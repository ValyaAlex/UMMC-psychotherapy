/*maps*/

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map",
    {
      center: [56.858100, 60.628080],
      zoom: 16,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    });

  var myPlacemark = new ymaps.Placemark([56.858083, 60.626395], {},
    {
    iconLayout: 'default#image',
    iconImageHref: 'icon/map_mark.png',
    iconImageSize: [30, 45],
    hideIconOnBalloonOpen: false,
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();

  
};





