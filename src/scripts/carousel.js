$(".carousel").slick({
  centerMode: true,
  arrows: true,
  centerPadding: "20px", // Ajuste conforme necessário
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "20px", // Ajuste conforme necessário
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "5px", // Ajuste conforme necessário
        slidesToShow: 1,
      },
    },
  ],
});
