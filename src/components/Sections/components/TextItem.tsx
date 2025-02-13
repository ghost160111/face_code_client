import { ChangeEvent, PureComponent, ReactNode } from "react";

interface TextItemProps {
  isLoading: boolean;
  maxTextLength: number;
  text: string;
  onTextAreaChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
}

class TextItem extends PureComponent<TextItemProps> {
  render(): ReactNode {
    return (
      <div className="form-item">
        <label className="form-item__label" htmlFor="text">
          Пожалуйста напишите чтобы вы хотели сказать
        </label>
        <textarea
          className="form-item__text"
          id="text"
          onChange={this.props.onTextAreaChange}
          value={this.props.text}
          placeholder="Введите текст"
          maxLength={this.props.maxTextLength}
          disabled={this.props.isLoading}
          required
        />
      </div>
    );
  }
}

export default TextItem;
