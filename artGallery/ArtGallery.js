export default class ArtGallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.loadStyles();
    await this.render();
  }

  async loadStyles() {
    const response = await fetch('../artGallery/ArtGallery.css');
    const styles = await response.text();
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    this.shadowRoot.appendChild(styleElement);
  }

  async render() {
    this.shadowRoot.innerHTML += '<div class="gallery"></div>';
    await this.loadArtworks();
  }

  async loadArtworks() {
    try {
      const response = await fetch('../art.data.json');
      const data = await response.json();
      const gallery = this.shadowRoot.querySelector('.gallery');
      
      data.artworks.forEach(artwork => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
          <img class="art-image" src="${artwork.image}" alt="${artwork.title}">
          <div class="art-info">
            <h3>${artwork.title}</h3>
            <p>Artist: ${artwork.artist}</p>
            <p>Year: ${artwork.year}</p>
          </div>
        `;
        gallery.appendChild(card);
      });
    } catch (error) {
      console.error('Error loading artworks:', error);
    }
  }
}
