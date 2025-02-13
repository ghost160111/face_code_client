import "./ContactModal.scss"
import { PureComponent, ReactNode } from "react";

interface ContactModalProps {
    onClose: () => void;
    isActive: boolean;
}

class ContactModal extends PureComponent<ContactModalProps> {
    render(): ReactNode {
        return (
            <div className={`contact-modal-overlay ${this.props.isActive ? "active" : "disactive"}`} onClick={this.props.onClose}>
                <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="contact-modal-close" onClick={this.props.onClose}>
                        <span>&times;</span>
                    </button>
                    <h3 className="contact-title">Свяжитесь с нами</h3>
                    <a href="tel:+998908081291" className="contact-phone-link">
                        +998 90 808 12 91
                    </a>
                </div>
            </div>
        );
    }
}

export default ContactModal;