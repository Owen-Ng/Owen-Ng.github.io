var arr = []
for (let i = 0 ; i < 5; i ++){
    arr.push({id: String(i)})
}
function delete1(id){
    arr = arr.filter(e => e.id != id)
}

console.log(arr)
delete1("3");
console.log(arr);
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  });