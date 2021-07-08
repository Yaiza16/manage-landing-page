export default function headerIntersecting(){
    const header = document.getElementById('header');
    const intro = document.getElementById('intro');

    const sectionOptions = {
        rootMargin: "-50px 0px 0px 0px"
    };

    const sectionObserver = new IntersectionObserver(function(entries, sectionOneObserver){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                header.classList.add('header--scrolled')
            }else{
                header.classList.remove('header--scrolled')
            }
        })
    }, sectionOptions);

    sectionObserver.observe(intro)
}