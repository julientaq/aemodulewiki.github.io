document.querySelectorAll(".module").forEach(module => {
  module.addEventListener("hover", function () {
    document.querySelector("#module-show").innerHTML = document.querySelector(`#{module.dataset.img}`).innerHTML;
  })
})
