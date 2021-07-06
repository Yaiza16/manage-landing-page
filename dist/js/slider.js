export default function slider(){
  
 let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 40,
        setWrapperSize: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});
}


// Anisha Li
// “Manage has supercharged our team’s workflow. The ability to maintain 
// visibility on larger milestones at all times keeps everyone motivated.”

// Ali Bravo
// “We have been able to cancel so many other subscriptions since using 
// Manage. There is no more cross-channel confusion and everyone is much 
// more focused.”

// Richard Watts
// “Manage allows us to provide structure and process. It keeps us organized 
// and focused. I can’t stop recommending them to everyone I talk to!”

// Shanai Gough
// “Their software allows us to track, manage and collaborate on our projects 
// from anywhere. It keeps the whole team in-sync without being intrusive.”