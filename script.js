let products = {
    data:[
        {
        productName:"Regular White T-Shirt",
        category:"bootomwear",
        price:"$300",
        image:'img/jeans-removebg-preview.png',
    },

    {
        productName:"Regular White T-Shirt",
        category:"topwear",
        price:"$300",
        image: 'img/shirt-removebg-preview.png',
    },

    {
        productName:"Black Men's Jacket",
        category:"jacket",
        price:"$3080",
        image:"img/jacket-removebg-preview.png",
    },

    {
        productName:"Baba Black Men's Jacket",
        category:"jackt",
        price:"$3050",
        image:"img/jacket2-removebg-preview.png",
    },


    {
        productName:"Regular White T-Shirt",
        category:"topwear",
        price:"$300",
        image:"red-tshirt-removebg-preview.png",
    },

    {
        productName:"Pants",
        category:"bottomwear",
        price:"$1300",
        image:'img/pant-removebg-preview.png',
    },

    {
        productName:"Smart - Watches",
        category:"watch",
        price:"$3300",
        image:'img/smart-watch-removebg-preview.png',
    },

    {
        productName:"Analog - Watches",
        category:"watch",
        price:"$3300",
        image:'img/watch-removebg-preview.png',
    },
],
};

for (let i of products.data){
    //create card 
    let card = document.createElement("div");
    //card should have categories and should stay hidden in initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //Price list
    let price = document.createElement("h6");
    price.classList.add("price");
    price.innerText = i.price.toUpperCase();
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from buttons (Parameter same as categories)
function filterProduct(value){
    //buttons class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //cheak if value equal innertext
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    //select all cards 
    let elements = document.querySelectorAll(".card");
    //loop through all cards 
    elements.forEach((element) => {
        //display all cards on 'all' buttons click
    if (value == "all"){
        element.classList.remove("hide");
    }else{
        //cheak if element contains categories class
        if(element.classList.contains(value)){
            //display element based on categories
            element.classList.remove("hide");
    } else {
        //hide other elements
        element.classList.add("hide");
    }
    }
    });
}


//search button click 
document.getElementById("search").addEventListener
("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
   
    //loop through all elements
    elements.forEach((element,index) => {
        //cheak if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching cards
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    })

})
//Initially display all product
window.onload = () => {
    filterProduct("all");
}
