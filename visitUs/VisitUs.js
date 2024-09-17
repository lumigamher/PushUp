
export default class VisitUs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../visitUs/VisitUs.css">
            <div class="visit-container">
                <h2 class="visit-title">Visit Us</h2>
                <p class="visit-info">We are located in the heart of the city and open every day.</p>
                <div class="visit-hours">
                    <p><strong>Opening Hours:</strong></p>
                    <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>
                <div class="visit-location">
                    <p><strong>Our Location:</strong></p>
                    <p>123 Art Street, Art District, Cityname</p>
                </div>
                <div class="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2555071785243!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb0999df%3A0x5c7b2157d62f6633!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1637631454084!5m2!1sen!2s" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        `;
    }
}

customElements.define('visit-uss', VisitUs);
