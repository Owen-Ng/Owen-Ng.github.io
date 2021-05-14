var textWrapper = document.querySelector('#welcome');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var logo = document.querySelector('#logoanime');

logo.innerHTML = logo.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '#welcome .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  });

    anime.timeline({loop: false})
    .add({
    targets: '#logoanime .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration:700,
    delay: (el, i) => 70*i
    });