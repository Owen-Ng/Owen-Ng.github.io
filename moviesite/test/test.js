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