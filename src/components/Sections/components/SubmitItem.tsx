import { PureComponent, ReactNode } from "react";

interface SubmitItemProps {
  isLoading: boolean;
}

class SubmitItem extends PureComponent<SubmitItemProps> {
  render(): ReactNode {
    return (
      <div className="form-item">
        <button
          className="form-item__btn"
          type="submit"
          disabled={this.props.isLoading}
        >
          Отправить
        </button>
      </div>
    );
  }
}

export default SubmitItem;
