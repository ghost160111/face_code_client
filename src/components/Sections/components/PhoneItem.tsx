import { ChangeEvent, PureComponent, ReactNode } from "react";

interface PhoneItemProps {
  isLoading: boolean;
  phone: string;
  onPhoneChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

class PhoneItem extends PureComponent<PhoneItemProps> {
  private formatPhoneDigits(digits: string): string {
    const parts = ["+998 "];
    const operatorCode = digits.substring(0, 2);
    const part2 = digits.substring(2, 5);
    const part3 = digits.substring(5, 7);
    const part4 = digits.substring(7, 9);

    if (digits.length >= 2) { parts.push(`(${operatorCode}) `); } 
    else if (digits.length === 1) { parts.push(operatorCode); }

    if (part2) {
      parts.push(part2);
      if (part3 || part4) parts.push(" ");
    }
    if (part3) {
      parts.push(part3);
      if (part4) parts.push(" ");
    }

    if (part4) { parts.push(part4); }
    return parts.join("");
  }

  private extractDigits(phone: string): string {
    const digits = phone.replace(/\D/g, "");
    return digits.startsWith("998") ? digits.slice(3) : digits;
  }

  handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const inputType = (evt.nativeEvent as InputEvent).inputType;
    const currentDigits = this.extractDigits(this.props.phone);
    let newDigits = "";

    if (inputType?.startsWith("delete")) { newDigits = currentDigits.slice(0, -1); } 
    else { newDigits = this.extractDigits(evt.target.value); }

    const formattedPhone = this.formatPhoneDigits(newDigits.substring(0, 9));

    this.props.onPhoneChange({
      ...evt,
      target: { ...evt.target, value: formattedPhone },
    } as ChangeEvent<HTMLInputElement>);
  };

  render(): ReactNode {
    return (
      <div className="form-item">
        <label className="form-item__label" htmlFor="phone">
          Телефон
        </label>
        <input
          className="form-item__input"
          type="tel"
          id="phone"
          placeholder="+998 (__) ___ __ __"
          value={this.props.phone}
          onChange={this.handleChange}
          disabled={this.props.isLoading}
          required
        />
      </div>
    );
  }
}

export default PhoneItem;