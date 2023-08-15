

const bar=document.querySelector(".bar");

const mobile_menu=document.querySelector(".mobile-menu");

const menyu_remove=document.querySelector(".menyu_remove");




bar.addEventListener("click",()=>
{
    
    mobile_menu.classList.add("show");
    document.body.style.backgroundColor="white";
    
    

    
})
menyu_remove.addEventListener("click",()=>
{
    mobile_menu.classList.remove("show");
    document.body.style.backgroundColor="white";

})