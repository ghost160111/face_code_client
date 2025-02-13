import { ChangeEvent, PureComponent, ReactNode } from "react";

interface FullnameItemProps {
  isLoading: boolean;
  fullname: string;
  onFullNameChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

class FullnameItem extends PureComponent<FullnameItemProps> {
  render(): ReactNode {
    return (
      <div className="form-item">
        <label
          className="form-item__label"
          htmlFor="fullname"
        >
          Ваше имя
        </label>
        <input
          className="form-item__input"
          type="text"
          id="fullname"
          placeholder="Имя"
          value={this.props.fullname}
          onChange={this.props.onFullNameChange}
          disabled={this.props.isLoading}
          required
        />
      </div>
    );
  }
}

export default FullnameItem;
