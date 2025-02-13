import { PureComponent, ReactNode } from "react";
import FormSection from "./Sections/FormSection";
import LocationSection from "./Sections/LocationSection";
import ProgramsSection from "./Sections/ProgramsSection";
import ContactSection from "./Sections/ContactSection";
import InstagramSection from "./Sections/InstagramSection";

export interface ContentState {
  isProgramModalOpen: boolean;
  isContactModalOpen: boolean;
  loadedImages: {
    program: boolean;
    contact: boolean;
    instagram: boolean;
  };
}

class Content extends PureComponent<object, ContentState> {
  state: Readonly<ContentState> = {
    isProgramModalOpen: false,
    isContactModalOpen: false,
    loadedImages: {
      program: false,
      contact: false,
      instagram: false
    }
  };

  render(): ReactNode {
    return (
      <>
        <main className="main">
          <h1 className="hidden-keywords">Face code, face Code, Face Code, FACE CODE, визажист, ВИЗАЖИСТ</h1>

          <ProgramsSection
            loadedProgramImage={this.state.loadedImages.program}
            isProgramModalOpen={this.state.isProgramModalOpen}
            toggleProgramModal={this.toggleProgramModal}
            handleImageLoad={this.handleImageLoad}
          />

          <ContactSection
            loadedContactImage={this.state.loadedImages.contact}
            isContactModalOpen={this.state.isContactModalOpen}
            toggleContactModal={this.toggleContactModal}
            handleImageLoad={this.handleImageLoad}
          />

          <InstagramSection
            loadedInstagramImage={this.state.loadedImages.instagram}
            handleImageLoad={this.handleImageLoad}
          />

          <FormSection />
          <LocationSection />
        </main>
      </>
    );
  }

  handleImageLoad = (imageType: keyof ContentState['loadedImages']) => {
    this.setState(prevState => ({
      loadedImages: {
        ...prevState.loadedImages,
        [imageType]: true
      }
    }));
  };

  toggleProgramModal = () => {
    this.setState(prevState => ({
      isProgramModalOpen: !prevState.isProgramModalOpen
    }));
  };

  toggleContactModal = () => {
    this.setState(prevState => ({
      isContactModalOpen: !prevState.isContactModalOpen
    }));
  };
}

export default Content;
