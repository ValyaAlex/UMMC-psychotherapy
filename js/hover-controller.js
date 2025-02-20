function getDeviceType() {
    let infoBlock = document.querySelectorAll('.specialization__info')
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      userAgent
    );

  if (window.innerWidth >= 1023 && window.innerHeight <= 1250) {
    if (isMobile) {
        infoBlock.forEach((e) => {
            e.style.transform = 'translateY(0)' 
        })
      } else {
        infoBlock.forEach((e) => {
            e.style.transform = 'translateY(85px)' 
        })
      }
  }
}
