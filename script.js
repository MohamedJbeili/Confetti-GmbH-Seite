window.onload = function(){
    let navi = document.querySelector("nav"),
     header = document.querySelector(".header").clientHeight,
     oben = document.querySelector(".oben"),
     mainHeight = document.querySelector("main").clientHeight,
     logo = document.querySelector("#logo-nav");
   
    window.addEventListener("scroll",function(){

     if(window.scrollY >= header) { navi.classList.add("fixed");
     logo.style.display ="inline-block"}
     else {navi.classList.remove("fixed");logo.style.display ="none"};
    
     
     window.scrollY >= mainHeight ? oben.style.opacity = 1 :oben.style.opacity = 0;
     oben.addEventListener("click",()=>{
        window.scrollTo({ top : 0,behaviour : "smooth"});
        
             });
        
        
     });







}