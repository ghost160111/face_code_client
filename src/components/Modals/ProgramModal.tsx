import './ProgramModal.scss';
import { PureComponent, ReactNode } from "react";

interface ProgramModalProps {
    onClose: () => void;
    isActive: boolean;
}

interface ProgramModalState {
    programmList: {
        name: string;
        price: number;
        priceMax?: number;
    }[];
}

class ProgramModal extends PureComponent<ProgramModalProps, ProgramModalState> {
    state: Readonly<ProgramModalState> = {
        programmList: [
            { name: 'Nude', price: 400000 },
            { name: 'Свадебный', price: 1000000, priceMax: 1500000 },
            { name: 'Пробный', price: 500000 },
            { name: 'Вечерний', price: 500000 },
            { name: 'Smoky eyes', price: 500000 },
            { name: 'Графический', price: 500000, priceMax: 1500000 },
        ]
    };
    render(): ReactNode {

        return (
            <div className={`programm-modal-overlay ${this.props.isActive ? "active" : "disactive"}`} onClick={this.props.onClose}>
                <div className="programm-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="programm-modal-close" onClick={this.props.onClose}>
                        <span>&times;</span>
                    </button>
                    <h3 className="programm-title">Услуги и цены</h3>
                    <ul className="programm-services-list">
                        {this.state.programmList.map(
                            (service) => (
                                <li key={service.name} className="programm-service-list">
                                    <div className='programm-service-item'>
                                        <span className='programm-service-name'>{service.name}</span>
                                        <span className="programm-service-price">
                                            {service.priceMax ? (
                                                <>
                                                    {service.price.toLocaleString('en-US')} - <br />
                                                    {service.priceMax.toLocaleString('en-US')} сум
                                                </>
                                            ) : (
                                                `${service.price.toLocaleString('en-US')} сум`
                                            )}
                                        </span>

                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProgramModal;