import { PureComponent, ReactNode } from "react";
import { ContentState } from "components/Content";
import ContactModal from "components/Modals/ContactModal";
import contactImageThumbnail from "assets/images/thumbnails/thumbnail_contact.webp";
import contactImage from "assets/images/contact.webp";

interface ContactSectionProps {
  loadedContactImage: boolean;
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
  handleImageLoad: (imageType: keyof ContentState["loadedImages"]) => void;
}

class ContactSection extends PureComponent<ContactSectionProps> {
  render(): ReactNode {
    return (
      <>
        <section className="contact-section" onClick={this.props.toggleContactModal}>
          <div className="section-image-container">
            <img
              src={this.props.loadedContactImage ? contactImage : contactImageThumbnail}
              alt="Contact image"
              className="contact-image"
              loading="lazy"
              decoding="async"
              onLoad={() => this.props.handleImageLoad("contact")}
            />
          </div>
          <div className="section-content">
            <h2 className="section-title">Контакты</h2>
          </div>
        </section>
        <ContactModal onClose={this.props.toggleContactModal} isActive={this.props.isContactModalOpen} />
      </>
    )
  }
}

export default ContactSection;
