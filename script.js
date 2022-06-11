let toggleBtn=document.querySelectorAll('.toggle');
toggleBtn.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        for(item of toggleBtn){
            if(item!== el){
                item.parentElement.classList.remove('active');
            }
        }
        el.parentElement.classList.toggle('active');
    })
})