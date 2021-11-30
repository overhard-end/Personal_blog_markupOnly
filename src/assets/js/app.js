
let menu_body = document.getElementById("bur");
menu_body.addEventListener("click", (e)=>{
    let ClickPosOnMenu = e.target.getBoundingClientRect();
if(ClickPosOnMenu.x === 0){
    console.log(ClickPosOnMenu.x)
}
else {
    console.log("else")
}
})
document.querySelector(".burger-menu").addEventListener('click',()=>{
    
    if(menu_body.classList.value === "burger-menu--v" ){
        menu_body.classList = "burger-menu--h"
    }else{
        menu_body.classList ="burger-menu--v";
    };
});

let form = document.querySelector(".discussion-form-answer--h");
let elements = [...document.querySelectorAll('#click')].forEach(item => { 
   
    item.addEventListener('click',()=>{
        if(elements.classList.value === "discussion-form-answer--h" ){
            elements.classList.remove("discussion-form-answer--h");
            elements.classList.add("discussion-form-answer")
        }else{
            elements.classList.remove("discussion-form-answer");
            elements.classList.add("discussion-form-answer--h");
        };
      });
  });

  let modalContainer = document.getElementById("modal-container");
  let contactModal = document.querySelector(".contact-modal");
  let modalStory = document.querySelector(".story-modal")
  
  
  

  modalContainer.addEventListener("click",(event)=>{
     let clickPosition = event.target.getBoundingClientRect()
     if(clickPosition.x === 0){
         modalContainer.classList = "modal-container--hidden";
         contactModal.classList ="contact-modal--hidden"
         modalStory.classList ="story-modal--hidden"
     }
  });

  let closeBtnContact =document.querySelector(".back-btn");
  closeBtnContact.addEventListener("click", ()=>{
    modalContainer.classList = "modal-container--hidden"
    contactModal.classList ="contact-modal--hidden"
  });

  let contactMeBtn =document.querySelector(".contact-me")
  contactMeBtn.addEventListener("click", ()=>{
    modalContainer.classList = "modal-container";
    contactModal.classList ="contact-modal"

  });
  
  let stor = [...document.querySelectorAll(".stories__item")].forEach(item =>{
      
      item.addEventListener("click",() =>{
        modalContainer.classList = "modal-container";
        modalStory.classList ="story-modal--hidden"
        modalStory.classList ="story-modal"

      })
  })
  
  