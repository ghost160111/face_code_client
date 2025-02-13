import { ChangeEvent, FormEvent, PureComponent, ReactNode } from "react";
import FullnameItem from "./FullnameItem";
import PhoneItem from "./PhoneItem";
import TextItem from "./TextItem";
import SubmitItem from "./SubmitItem";

interface FormTemplateProps {
  isLoading: boolean;
  fullname: string;
  phone: string;
  text: string;
  maxTextLength: number;
  onFormSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  onFullNameChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onTextAreaChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
}

class FormTemplate extends PureComponent<FormTemplateProps> {
  render(): ReactNode {
    const {
      isLoading,
      fullname,
      phone,
      text,
      maxTextLength,
      onFormSubmit,
      onFullNameChange,
      onPhoneChange,
      onTextAreaChange,
    } = this.props;

    return (
      <form className="form" onSubmit={onFormSubmit}>
        <FullnameItem
          isLoading={isLoading}
          fullname={fullname}
          onFullNameChange={onFullNameChange}
        />
        <PhoneItem
          isLoading={isLoading}
          phone={phone}
          onPhoneChange={onPhoneChange}
        />
        <TextItem
          isLoading={isLoading}
          maxTextLength={maxTextLength}
          text={text}
          onTextAreaChange={onTextAreaChange}
        />
        <SubmitItem isLoading={isLoading} />
      </form>
    );
  }
}

export default FormTemplate;
