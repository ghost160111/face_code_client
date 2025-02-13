import { PureComponent, ReactNode } from "react";

class LocationSection extends PureComponent {
  render(): ReactNode {
    return (
      <section className="location-section">
        <div className="location-overlay">
          <div className="location-info-container">
            <h2 className="section-title location-title">Локация</h2>
            <address className="location-address">
              Салон Prime Look
              <br />
              ул. Махтумкули 99
            </address>
          </div>
          <div className="map-container">
            <iframe
              title="Prime Look Location"
              src="https://yandex.ru/map-widget/v1/?ll=69.327725%2C41.305312&z=17.54&pt=69.327725,41.305312,pm2rdl&l=map"
              className="map-iframe"
              loading="lazy"
              aria-label="Location map"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default LocationSection;
