// Menu Button
const button = document.querySelectorAll(".menu-button");
const item = document.querySelectorAll(".card");

button.forEach(function(element){
    element.addEventListener("click", myClick);
    function myClick(){
        const buttonText = this.textContent.toLowerCase();
        item.forEach(function(element){
            if(buttonText=="all"){
                element.style.display = "block";
            }
            else if(element.classList.contains(buttonText)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
        })
    }
})

//Menu Searchbar
const card_title = document.querySelectorAll(".card-title");
const card_description = document.querySelectorAll(".card-description");
const card_price = document.querySelectorAll(".card-price");
const searchbar = document.querySelector(".form-control");

searchbar.addEventListener("keyup", mySearch);
function mySearch(){
    var searchbarValue = searchbar.value;
    var i = 0;
    //Check if search bar value equals card content
    card_title.forEach(function(element){
        if(element.textContent.toLowerCase().includes(searchbarValue) || card_description[i].textContent.toLowerCase().includes(searchbarValue) || card_price[i].textContent.toLowerCase().includes(searchbarValue)){
            item[i].style.display = "block";
        }
        else{
            item[i].style.display = "none";
        }
        i = i+1;
    })
}

//Modal
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalPrice = document.querySelector('.modal-price');
const closeButton = document.querySelector('.close-button');

//Display Modal Popup On Click
item.forEach(function(card){
    card.addEventListener('click', function(){
        modalImage.src = card.querySelector('img').src;
        modalImage.alt = card.querySelector('img').alt;
        modalTitle.textContent = card.querySelector('.card-title').textContent;
        modalDescription.textContent = card.querySelector('.card-description').textContent;
        modalPrice.textContent = card.querySelector('.card-price').textContent;
        modal.style.display = 'flex';
    });
});

//Close Button
closeButton.addEventListener('click', function(){
    modal.style.display = 'none';
});

//Close on click outside modal card
window.addEventListener('click', function(event){
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
