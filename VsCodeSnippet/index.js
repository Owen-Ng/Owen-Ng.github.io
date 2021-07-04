const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');
const Copied = document.getElementById('Copy')
const im = document.getElementById('important');
const container = document.getElementById("container")
function toSnippet(s){
    const res = s.split("\n");
    return JSON.stringify(res);

}
function Copy(event){
    // outputField.focus();
    const el = document.createElement('textarea');
    el.value = outputField.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
        
   
}
document.addEventListener('mousedown', function(event) {
    var isClickInside = inputField.contains(event.target) ||  outputField.contains(event.target) || Copied.contains(event.target);
  
    if (!isClickInside) {
        inputField.value = "";
        container.style.bottom = "-600px";
    }
  });
document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("loaded")
    Copied.addEventListener('click', Copy)
    
    im.addEventListener('click',()=>{
        container.style.bottom = "5px";
    })
    // im.addEventListener('mouseleave',()=>{
    //     container.getElementById("container").style.bottom = "-600px";
    // })
    // container.addEventListener('mouseenter',()=>{
    //     container.style.bottom = "5px";
    // })
    // container.addEventListener('mouseleave',()=>{
    //     container.getElementById("container").style.bottom = "-600px";
    // })
    inputField.addEventListener('input', function(event){
        const snippet = toSnippet(event.target.value);
        outputField.value = snippet.replace(new RegExp(",", "g"), ",\n");
        //That g on RegExp means globally so the regex will be apply everywhere in the snippet
    })
});
  