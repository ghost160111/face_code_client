


// FormSection.tsx
import "./FormSection.scss";
import { ChangeEvent, FormEvent, PureComponent, ReactNode } from "react";
import FormTemplate from "./components/FormTemplate";

interface FormSectionState {
  fullname: string;
  phone: string;
  text: string;
  maxTextLength: number;
  isLoading: boolean;
  isSuccess: boolean;
}

class FormSection extends PureComponent<object, FormSectionState> {
  state: Readonly<FormSectionState> = {
    fullname: "",
    phone: "",
    text: "",
    maxTextLength: 1200,
    isLoading: false,
    isSuccess: false,
  };

  render(): ReactNode {
    return (
      <section className="form-section">
        <h2>Отправить заявку</h2>
        {this.state.isSuccess && (
          <div className="form-success">
            Ваша заявка успешно отправлена!
          </div>
        )}
        <FormTemplate
          isLoading={this.state.isLoading}
          maxTextLength={this.state.maxTextLength}
          fullname={this.state.fullname}
          phone={this.state.phone}
          text={this.state.text}
          onFormSubmit={this.onFormSubmit}
          onFullNameChange={this.onFullNameChange}
          onPhoneChange={this.onPhoneChange}
          onTextAreaChange={this.onTextAreaChange}
        />
      </section>
    );
  }

  onFormSubmit = async (evt: FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();
    if (this.state.fullname && this.state.phone && this.state.text) {
      this.setState({ isLoading: true, isSuccess: false });
      try {
        await this.postForm();
        this.onSuccess();
      } catch (err) {
        this.onFail();
      } finally {
        this.resetForm();
      }
    }
  };

  async postForm(): Promise<void> {
    const { fullname, phone, text } = this.state;
    const response = await fetch("https://facecode.vercel.app/api/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, phone, text }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }

  resetForm = (): void => {
    this.setState({
      fullname: "",
      phone: "",
      text: "",
      isLoading: false,
    });
  };

  onFail(): void {
    this.setState({ isLoading: false, isSuccess: false });
    alert("Не удалось отправить форму!");
  }

  onSuccess(): void {
    this.setState({ isLoading: false, isSuccess: true }, () => {
      setTimeout(() => {
        this.removeAlertMessage();
      }, 5000);
    });
  }

  removeAlertMessage(): void {
    this.setState(prevState => ({
      ...prevState,
      isSuccess: false,
    }));
  }

  onFormItemChange = (key: keyof FormSectionState, value: string): void => {
    this.setState(
      (prevState) => ({
        ...prevState,
        [key]: value,
      })
    );
  };

  onFullNameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    this.onFormItemChange("fullname", evt.target.value);
  };

  onPhoneChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    this.onFormItemChange("phone", evt.target.value);
  };

  onTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    if (evt.target.value.length <= this.state.maxTextLength) {
      this.onFormItemChange("text", evt.target.value);
    }
  };
}

export default FormSection;

