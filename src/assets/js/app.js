
let menu_body = document.getElementById("bur");
document.querySelector(".burger-menu").addEventListener('click',()=>{
    
    if(menu_body.classList.value === "burger-menu--v" ){
        menu_body.classList.toggle("burger-menu--v");
        menu_body.classList.add("burger-menu--h")
    }else{
        menu_body.classList.remove("burger-menu--h");
        menu_body.classList.add("burger-menu--v");
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

  let modalWindow = document.querySelector(".modal-container");
  let body = document.querySelector("body");
  body.addEventListener("click",()=>{
      let stor =document.querySelector(".stories__item")
      modalWindow.classList.remove("modal-container")
      document.querySelector(".story-modal").classList.add("story-modal--hidden")
  })
  