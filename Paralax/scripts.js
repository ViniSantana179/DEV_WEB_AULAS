document.querySelectorAll('nav ul a').forEach((ele)=>{
    console.log('aquii')
    ele.addEventListener('click', (event)=>{
        event.preventDefault();
        const href = ele.getAttribute('href');
        const alvo = document.querySelector(href);

        if(alvo){
            alvo.scrollIntoView({
                behavior: "smooth"
            });
        }
    })
})

const menu = document.getElementById('menu')
const limite = 100;
window.addEventListener('scroll',()=>{
    if(window.scrollY > limite){
        menu.classList.add('shrink')
    }
    else
    {
        menu.classList.remove('shrink')
    }
})