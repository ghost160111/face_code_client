import { PureComponent, ReactNode } from "react";
import { ContentState } from "components/Content";
import ProgramModal from "components/Modals/ProgramModal";
import programmsImageThumbnail from "assets/images/thumbnails/thumbnail_programs.webp";
import programmsImage from "assets/images/programs.webp";

interface ProgramsSectionProps {
  loadedProgramImage: boolean;
  isProgramModalOpen: boolean;
  toggleProgramModal: () => void;
  handleImageLoad: (imageType: keyof ContentState["loadedImages"]) => void;
}

class ProgramsSection extends PureComponent<ProgramsSectionProps> {
  render(): ReactNode {
    return (
      <>
        <section className="programs-section" onClick={this.props.toggleProgramModal}>
          <div className="section-image-container">
            <img
              src={this.props.loadedProgramImage ? programmsImage : programmsImageThumbnail}
              alt="Programs image"
              className="responsive-image"
              loading="lazy"
              decoding="async"
              onLoad={() => this.props.handleImageLoad("program")}
            />
          </div>
          <div className="section-content">
            <h2 className="section-title">Программы</h2>
          </div>
        </section>
        <ProgramModal onClose={this.props.toggleProgramModal} isActive={this.props.isProgramModalOpen} />
      </>
    )
  }
}

export default ProgramsSection;
