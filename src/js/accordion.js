


const items=document.querySelectorAll(".faq-item");

const MinuseAndPlus=document.querySelectorAll(".minusAndPlus");
let minusPlus;




items.forEach(item=>{
    
    
    
    item.addEventListener("click",()=>{
        
        
        
        
        minusPlus = item.querySelector(".minusAndPlus");
        
        const FagContent=item.querySelector('.faq-content');
        console.log(FagContent);
         const LentghOfCOntent=FagContent.scrollHeight;
        if(!item.classList.contains('open')){
            
        removeActives();

            item.classList.add('open');
            minusPlus = item.querySelector(".minusAndPlus");
            minusPlus.innerHTML="-";
            
           
            FagContent.style.height=LentghOfCOntent+'px'
            
        }
        else{
            FagContent.style.height=null
            item.classList.remove('open');
            minusPlus.innerHTML="+";

           
           
            
        }
       
    })


function removeActives(){

    items.forEach(item=>{
       item.querySelector('.faq-content').style.height=null
        item.classList.remove('open');

        minusPlus = item.querySelector(".minusAndPlus");
        minusPlus.innerHTML="+";


       
    })
}

   
})









