document.addEventListener('DOMContentLoaded', function() {
  new Splide('#gallery', {
    type: 'loop',
    height: '766px',
    perPage: 4,
    perMove: 1,
    pagination: false,
    breakpoints: {
      991: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      }
    },
  }).mount();
});
