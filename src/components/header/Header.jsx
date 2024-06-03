import "./header.css";
import logo from "../../../starter-code/assets/shared/logo.svg";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="container-data">
          <img className="logo-header" src={logo} alt="Logo page" />
          <h2 className="title-header">start slideshow</h2>
        </div>
      </header>
    </>
  );
}
