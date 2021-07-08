export default function hamburger(){
    const hamburger = document.getElementById('hamburger');
    const site = document.getElementById('site-container');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('hamburger--actived');

        if (hamburger.classList.contains('hamburger--actived')){
            site.classList.add('main-container--disabledScroll')
            nav.classList.add('nav--actived')
        }else{
            window.removeEventListener('scroll', disableScroll)
            site.classList.remove('main-container--disabledScroll')
            nav.classList.remove('nav--actived')
        }
    })

    function disableScroll(){  
        window.scrollTo(0, 0);
      }
}