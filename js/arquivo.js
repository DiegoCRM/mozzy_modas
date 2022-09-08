const header = document.getElementById('header');
const headerClassList = header.classList;

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        if (!headerClassList.contains('scrollHide')) {
          headerClassList.add('scrollHide')
        }
      } else {
         if (headerClassList.contains('scrollHide')) {
           headerClassList.remove('scrollHide')
         }
       }
})



$(function () {
  $(".roupa").owlCarousel({
      
      nav: true,
      navText: ['<i class="fa fa-backward"></i>','<i class="fa fa-forward"></i>'],
      responsive: {
          0: {
              item: 1
          },
          480: {
              item: 3
          },
          768: {
              item: 6
          }
      }
  })
})