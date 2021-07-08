export function titleAnimation(){
    const title = document.getElementById('title-site');
    const titleText = title.textContent;
    const splitTitle = titleText.split("");
    title.textContent = "";

    for (let i=0; i<splitTitle.length; i++){
        title.innerHTML += "<span class='intro-title__char'>" + splitTitle[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 30);

    function onTick(){
        let span = title.querySelectorAll('.intro-title__char')[char];
        span.classList.add('intro-title__char--fade')
        char++;
        if (char === splitTitle.length){
            clearInterval(timer);
            timer = null;
            return;
        }
    }
}

// We need to remove the animation when that ends. If we not, scrolled header animation won't work.
export function headerAnimationRemoved(){
    const header = document.getElementById('header');
    
    header.addEventListener('animationend', () =>{
        if (header.classList.contains('header--animated')){
            header.classList.remove('header--animated')
        }
    })
}