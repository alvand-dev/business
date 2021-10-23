document.addEventListener('DOMContentLoaded', function() {
  new Splide('#gallery', {
    type: 'loop',
    height: '766px',
    perPage: 5,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1199: {
        perPage: 4,
      },
      991: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      575: {
        perPage: 1,
      }
    },
  }).mount();
});
