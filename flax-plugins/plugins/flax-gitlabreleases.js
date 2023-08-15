const axios = require('axios')
const Cache = require('@11ty/eleventy-cache-assets')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const dotenv = require('dotenv')

module.exports = async function (eleventyConfig, options = {}) {
  dotenv.config()
  // check the data passed through eleventyConfig
  if (!options.token) {
    console.log(
      '[eleventy-plugin-gitlab-releases] No token was define, we’re using .env RELEASETOKEN'
    )
  } else if (!process.env['RELEASETOKEN']) {
    console.log(
      '[eleventy-plugin-gitlab-releases] we couldn’t find any Gitlab token, please define it as .env[RELEASETOKEN]'
    )
  }
  // add shortCodess
  eleventyConfig.addShortcode(
    'gitlabreleases',
    async function (
      gitlaburlOveride,
      projectIdOveride,
      gitlabgroupOveride,
      gitlabprojectOveride
    ) {
      let output = ''
      let token
      if (options.token) {
        token = options.token
      } else {
        token = process.env['RELEASETOKEN']
          ? `PRIVATE-TOKEN ${process.env['RELEASETOKEN']}`
          : ''
      }

      //check if there is an override
      if (gitlaburlOveride) {
        console.log(
          '[eleventy-plugin-gitlab-releases] gitlaburl is defined in the shortcode'
        )
      } else if (!options.gitlaburl || options.gitlaburl == undefined) {
        console.log(
          '[eleventy-plugin-gitlab-releases] Please add the gitlab url'
        )
      }
      if (projectIdOveride) {
        console.log(
          '[eleventy-plugin-gitlab-releases] The Gitlab project id is defined in the shortcode'
        )
      } else if (
        !options.gitlabprojectid ||
        options.gitlabprojectid == undefined
      ) {
        console.log(
          '[eleventy-plugin-gitlab-releases] Please add the project ID from gitlab'
        )
      }
      if (gitlabgroupOveride) {
        console.log(
          '[eleventy-plugin-gitlab-releases] gitlab group name is defined in the shortcode'
        )
      } else if (!options.gitlabgroup || options.gitlabgroup == undefined) {
        console.log(
          '[eleventy-plugin-gitlab-releases] Please add the group the project'
        )
      }
      if (gitlabprojectOveride) {
        console.log(
          '[eleventy-plugin-gitlab-releases] gitlab project name is defined in the shortcode'
        )
      } else if (!options.gitlabproject || options.gitlabproject == undefined) {
        console.log(
          '[eleventy-plugin-gitlab-releases] Please add the name of the project'
        )
      }

      // override the data if you have data in the shortcode
      options = {
        gitlaburl: gitlaburlOveride ? gitlaburlOveride : options.gitlaburl,
        projectId: projectIdOveride
          ? projectIdOveride
          : options.gitlabprojectid,
        gitlabgroup: gitlabgroupOveride
          ? gitlabgroupOveride
          : options.gitlabgroup,
        gitlabproject: gitlabprojectOveride
          ? gitlabprojectOveride
          : options.gitlabproject,
      }

      // throw error if the options are not all here
      if (!options.gitlaburl) {
        throw new Error('[eleventy-plugin-gitlab-releases] no gitlaburl found')
      }

      if (!options.projectId) {
        throw new Error('[eleventy-plugin-gitlab-releases] no projectid found')
      }
      if (!options.gitlabgroup) {
        throw new Error(
          '[eleventy-plugin-gitlab-releases] no gitlabgroup found'
        )
      }
      if (!options.gitlabproject) {
        throw new Error(
          '[eleventy-plugin-gitlab-releases] no gitlaproject found'
        )
      }

      const response = await axios
        .get(
          `${options.gitlaburl}/api/v4/projects/${options.projectId}/releases/`,
          {
            method: 'GET',
            mode: 'cors',
            headers: { token },
          }
        )
        .then((response) => {
          let urlregex = /\]\(\/uploads/g
          response.data.forEach((entry) => {
            entry.description = entry.description.replace(
              urlregex,
              `](${options.gitlaburl}/${options.gitlabgroup}/${options.gitlabproject}/uploads`
            )
          })

          for (const release of response.data) {
            let content = generateOutput(release, options)
            output = output + content
          }
          return output
        })
        .catch((error) => {
          console.error(error)
        })
      return output
    }
  )
}

// return the content
// get links from the release
function getLinksFromRelease(release) {
  let links = ''
  for (link of release.assets.sources) {
    links =
      links +
      `<li><a href="${link.url}">Source code ${release.tag_name} (${link.format})</a></li>`
  }
  return links
}

function fulldate(value) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const date = new Date(value)
  if (isNaN(date)) return value
  return Intl.DateTimeFormat('en-GB', options).format(date)
}

function generateOutput(release, options) {
  return `<section class="gitlab-release-entry ${
    options.gitlabproject
  }" data-date="${release.created_at}">

    <div class="gitlab-release-project">${options.gitlabproject}</div>
    <div class="gitlab-release-date">${fulldate(release.created_at)}</div>
    <h2 id="">${release.name} (${release.tag_name})</h2>
    <div class="gitlab-release-links">
    <h3>Downloads</h3>
    <ul class="gitlab-release-downloadLinks">
    ${getLinksFromRelease(release)}
    </ul>
    </div>
    <div class="gitlab-release-content">${markdownify(
      release.description
    )}</div>
  </section>`
}

// markdown conversion for the output
let mdoptions = {
  html: true,
  linkify: true,
  typographer: true,
}

let mdit = markdownIt(mdoptions).use(markdownItAnchor, {})

// the markdownify
function markdownify(value) {
  if (!value) {
    return ``
  }
  return mdit.render(value)
}

