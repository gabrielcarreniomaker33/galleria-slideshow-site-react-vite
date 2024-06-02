import "./header.css";
import logo from "../../../starter-code/assets/shared/logo.svg";

export function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo page" />
        <h2>start slideshow</h2>
      </header>
    </>
  );
}
