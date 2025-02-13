import "./Header.scss";
import { PureComponent, ReactNode } from "react";
import logo from "assets/layout/logo.svg";
import logoWhite from "assets/layout/logoWhite.svg";

class Header extends PureComponent {
  render(): ReactNode {
    return (
      <header className="header">
        <a href="/">
          <div className="header-image-container">
            <figure>
              <picture>
                <source media="(min-width: 601px)" srcSet={logoWhite} />
                <img
                  src={logo}
                  alt="Логотип"
                  className="logo-image"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </figure>
          </div>
        </a>
      </header >
    );
  }
}

export default Header;
