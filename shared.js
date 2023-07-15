var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var negativeButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton=document.querySelector(".main-nav__item--cta")

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className ='open'; this will overwrite the class name
    modal.classList.add("open");
    backdrop.style.display='block';
    setTimeout(function(){
      backdrop.classList.add("open");
    }, 10);
  });
}

function closeModal() {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if(modal){
    modal.classList.remove("open");

  }
  backdrop.classList.remove("open");
  setTimeout(function(){
    
    backdrop.style.display='none';
  }, 400);
}

backdrop.addEventListener("click", function () {
  closeModal();
  mobileNav.classList.remove("open");
 });

 if(negativeButton){
    negativeButton.addEventListener("click", closeModal);

 }

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.style.display='block';
  setTimeout(function(){
    backdrop.classList.add("open");
  }, 10);
  
});

ctaButton.addEventListener('animationstart',function(){
console.log('Animation started',event)
});

ctaButton.addEventListener('animationend',function(){
  console.log('Animation ended',event)
  });

  ctaButton.addEventListener('animationiterate',function(){
    console.log('Animation iteration',event)
    });
