export default class PhotoCarousel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      
      const carouselContainer = document.createElement('div');
      carouselContainer.classList.add('carousel');
      
      carouselContainer.innerHTML = `
        <img src="../img/photo1.jpg" alt="Photo 1" class="active">
        <img src="../img/photo2.jpg" alt="Photo 2">
        <img src="../img/photo3.jpg" alt="Photo 3">
      `;
      
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', 'carousel/carousel.css');
      
      this.shadowRoot.appendChild(linkElem);
      this.shadowRoot.appendChild(carouselContainer);
      
      this.currentIndex = 0;
      this.images = carouselContainer.querySelectorAll('img');
    }
    
    connectedCallback() {
      this.startCarousel();
    }
    
    startCarousel() {
      setInterval(() => {
        this.images[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.images[this.currentIndex].classList.add('active');
      }, 5000);
    }
  }