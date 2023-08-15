let markdownIt = require("markdown-it");

let option = {
  html: true,
  breaks: true,
  linkify: true,
};

module.exports = (eleventyConfig, options = {}) => {
  md = new markdownIt();
  eleventyConfig.addShortcode(
    "flaxaudio",
    function(audio, caption, path, audioEl, color) {
      // render the caption as markdown
      // caption = md.renderInline(caption);

      path = options.path;

      audioEl = `<audio
        controls
        src="${path ? path : ""}${audio ? audio : ""}">
            Your browser does not support the
            <code>audio</code> element.
    </audio>`;

      console.log("something", options.audioEl);
      return `<style>
button:not(.playing) .pause {
display: none;
}
.playing .play {
display: none;
}
</style>
  <script src="https://unpkg.com/wavesurfer.js@5.2.0/dist/wavesurfer.js"></script>
  <figure class="flax-audio">
    <figcaption>${caption ? caption : ""}</figcaption>
    ${options.audioEl == true ? audioEl : ""}
    <div class="waveform" id="waveform${audio.replace(/\W+/g, "")}"></div>
    <button class="" id="bt${audio.replace(
        /\W+/g,
        ""
      )}" onclick="wavesurfer${audio.replace(/\W+/g, "")}.playPause()">
    <span class="play">

    <span class="icon">▶</span>
    <span class="name">play</span>

    </span>
    <span class="pause">

<span class="icon">⏸</span>
<span class="name">pause</span>
</span>
    </button>
    <p>Total time: <span id="time-total${audio.replace(
        /\W+/g,
        ""
      )}">0.00</span> seconds</p>
<p>Current time: <span id="time-current${audio.replace(
        /\W+/g,
        ""
      )}">0.00</span> seconds</p>
<p>Remaining time: <span id="time-remaining${audio.replace(
        /\W+/g,
        ""
      )}">0.00</span> seconds</p>
</figure>
<script>
let button${audio.replace(
        /\W+/g,
        ""
      )} = document.querySelector('#bt${audio.replace(/\W+/g, "")}')
let wavesurfer${audio.replace(/\W+/g, "")} = WaveSurfer.create({
container: '#waveform${audio.replace(/\W+/g, "")}',
    scrollParent: true,
    waveColor: 'grey',
    progressColor: 'orange',
    cursorColor: '${color}',
    barWidth: 3,
    barRadius: 3,
    cursorWidth: 2,
    height: 50,
    barHeight: 20,
    barGap: 2,
      plugins: [
    ]
})
wavesurfer${audio.replace(/\W+/g, "")}.load( '${path ? path : ""}${audio ? audio : ""
        }');
wavesurfer${audio.replace(/\W+/g, "")}.on('audioprocess', function() {
    if(wavesurfer${audio.replace(/\W+/g, "")}.isPlaying()) {
        var totalTime = wavesurfer${audio.replace(/\W+/g, "")}.getDuration(),
            currentTime = wavesurfer${audio.replace(
          /\W+/g,
          ""
        )}.getCurrentTime(),
            remainingTime = totalTime - currentTime;
        
        document.getElementById('time-total${audio.replace(
          /\W+/g,
          ""
        )}').innerText = totalTime.toFixed(1);

        document.getElementById('time-current${audio.replace(
          /\W+/g,
          ""
        )}').innerText = currentTime.toFixed(1);
        document.getElementById('time-remaining${audio.replace(
          /\W+/g,
          ""
        )}').innerText = remainingTime.toFixed(1);
    } 
});

wavesurfer${audio.replace(
          /\W+/g,
          ""
        )}.on('play', function() { button${audio.replace(
          /\W+/g,
          ""
        )}.classList.add("playing")})
wavesurfer${audio.replace(
          /\W+/g,
          ""
        )}.on('pause', function() { button${audio.replace(
          /\W+/g,
          ""
        )}.classList.remove("playing") })
</script> 
`;
    }
  );
};
