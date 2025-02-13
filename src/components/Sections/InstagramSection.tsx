import { ContentState } from "components/Content";
import { PureComponent, ReactNode } from "react";
import instagramImage from "assets/images/instagram.webp";
import instagramImageThumbnail from "assets/images/thumbnails/thumbnail_instagram.webp";

interface InstagramSectionProps {
  loadedInstagramImage: boolean;
  handleImageLoad: (imageType: keyof ContentState["loadedImages"]) => void;
}

class InstagramSection extends PureComponent<InstagramSectionProps> {
  render(): ReactNode {
    return (
      <section className="instagram-section">
        <div className="section-image-container">
          <img
            src={this.props.loadedInstagramImage ? instagramImage : instagramImageThumbnail}
            alt="Instagram image"
            className="responsive-image"
            loading="lazy"
            decoding="async"
            onLoad={() => this.props.handleImageLoad("instagram")}
          />
        </div>
        <a
          href="https://www.instagram.com/facec.ode"
          className="instagram-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
        />
        <div className="section-content">
          <h2 className="section-title">Инстаграм</h2>
        </div>
      </section>
    );
  }
}

export default InstagramSection;
