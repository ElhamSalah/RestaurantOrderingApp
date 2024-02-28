 const menuArray = [
    {
        emoji: "🍔",
        name: "Hamburger",
        ingredients: ["Cheese", "Beef", "Lettuce"],
        price: 200,
        id: 0,
        plus: "+"
    },

    {
      
        emoji: "🍕",
        name: "Pizza",
        ingredients: ["Pepperoni", "Mushrom", "Mozarella","Olive"],
        id: 1,
        price: 500,
        plus: "+"
    },
        {
        emoji: "🍺",
        name: "Beer",
        ingredients: ["Grain, Hops, Yeast, Water"],
        price: 100,
        id: 2,
        plus: "+"
    }
]

let emojiSection = document.querySelector('.emojiSection');
let infoSection = document.querySelector('.infoSection');
let image = document.querySelector('.image');
let order = document.querySelector('.order');
let remove = document.querySelector('.remove')
let totalPrice= document.querySelector('.Totalprice')
let orderContent = document.querySelector('.orderContent')
let itemCont = document.querySelector('.ItemContent')
let ComOrderBtn= document.querySelector('.ComOrderBtn');
let formPart =document.querySelector('.formPart')
let PayBtn= document.getElementById('.paybtn')
let h1 = document.querySelector('.h1')
let input= document.getElementById('.InputName');
let promptMassage = document.querySelector('.promptMassage');
let code= document.getElementById('.Code');
let CCV= document.getElementById('.CCV');
let container= document.querySelector('.container')



function renderMenu() {
    let emojiHTML = '';
    let infoHTML = '';
    let images = '';

    for (const item of menuArray) {
        emojiHTML += `<p class="emoji">${item.emoji}</p>`;
        infoHTML += `
            <div class="item-info">
                <p class="name">${item.name}</p>
                <p class="recepi">${item.ingredients.join(', ')}</p>
                <p class="price">${item.price}</p>
            </div>
        `;
        
        images += `<p class="plus">${item.plus}</p>`;
    }

    emojiSection.innerHTML = emojiHTML;
    infoSection.innerHTML = infoHTML;
    image.innerHTML = images;
}

renderMenu();


image.addEventListener('click', function(e) {
    order.style.display = 'inline';
    promptMassage.style.display='none';
   
    const clickedIndex = Array.from(this.children).indexOf(e.target);
    const ItemPrice = menuArray[clickedIndex].price;
    const itemName = menuArray[clickedIndex].name;
    
    orderContent.innerHTML += `
    <div class="ItemContent">
        <p>${itemName}</p>
        <p class="remove">Remove</p> 
        <p>${ItemPrice}</p>
     </div>   
  `;
    totalPrice.innerHTML = Number(totalPrice.innerHTML) + ItemPrice;
});

orderContent.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {
        const itemToRemove = e.target.parentElement;
        const itemPrice = parseFloat(itemToRemove.querySelector('p:nth-child(3)').textContent);
        totalPrice.textContent = parseFloat(totalPrice.textContent) - itemPrice;
        itemToRemove.remove();
    }
});

ComOrderBtn.addEventListener('click', function(e){
    
    if(totalPrice.innerHTML==0){
        alert('You did not add anything')
        formPart.style.display="none";
    } else{
        formPart.style.display="block";
        input.value="";
        CCV.value="";
        code.value="";
        container.style.opacity="0.1";
        formPart.style.opacity="1";
    }
})
formPart.addEventListener('submit', function(event) {
    event.preventDefault();
        let nameUser = document.getElementById("InputName").value;
        promptMassage.style.display = 'inline';
        promptMassage.innerHTML =  `Thanks, ${nameUser}! Your order is on its way!`;
        formPart.style.display = 'none';
        order.style.display = 'none';  
});








