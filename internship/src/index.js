import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
const starters = menuItems.filter(e => e.type == "starters");
const pizza = menuItems.filter(e => e.type == "pizza");
const pasta = menuItems.filter(e => e.type == "pasta");
const spicyscheck = document.getElementById("check");
spicyscheck.addEventListener("click", checkboxspice);

function checkboxspice(){
    const allspicy = document.querySelectorAll(".icons");

    if (document.querySelector('#check:checked') !== null){
        //turning spice on
        console.log("not check");
        allspicy.forEach(e => {e.hidden = false })
    }
    else{
        allspicy.forEach(e => {e.hidden = true})


    }

}
function order(a,b){
    return a.menuOrder - b.menuOrder;
}

starters.sort(order);
pizza.sort(order);
pasta.sort(order);

console.log(menuItems);
console.log(starters);
console.log(pizza);
console.log(pasta);
renderstarters();
renderpasta();
renderpizza();

function listingTemplate(group, e){
    const liststarter = document.createElement('li');
        const price = document.createElement("span");
        price.className = "price";
        const title = document.createElement('h3');
        title.className = "title"
        const subtitle = document.createElement("div");
        const spicy = document.createElement("i");
        
        if (e.spicy == true){
           
            spicy.className = "disclaimer spicy";
            liststarter.className = "icons";
        }
        

        // Title
        price.appendChild(document.createTextNode("$" + e.price.toFixed(2)));
        title.appendChild(document.createTextNode(e.name));
        title.appendChild(price);

        //subtitle
        subtitle.appendChild(document.createTextNode(e.description + " "));
        subtitle.appendChild(spicy);

        //append to list now
        liststarter.append(title);
        liststarter.append(subtitle);

        group.append(liststarter);

}

function renderstarters(){
    const getstarters = document.getElementById('starters');

    const group = document.createElement('ul');
    starters.forEach(e=>{
        listingTemplate(group, e);
    });
    getstarters.append(group);
}

function renderpizza(){
    const getpizza = document.getElementById('pizza');

    const group = document.createElement('ul');
    pizza.forEach(e=>{
        listingTemplate(group, e);
    });
    getpizza.append(group);
    
}

function renderpasta(){
    const getpasta = document.getElementById('pasta');

    const group = document.createElement('ul');
    pasta.forEach(e=>{
        listingTemplate(group, e);
    });
    getpasta.append(group);
    
}