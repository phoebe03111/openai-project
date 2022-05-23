import ai from "../../assets/image/ai.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Fun with AI</h1>
      <img className="header__image" src={ai} alt="artificial intelligence" />
    </header>
  );
};

export default Header;
