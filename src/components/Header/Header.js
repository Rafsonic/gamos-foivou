import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useTranslation } from "react-i18next";
import en from "./../../images/lng/uk.png";
import gr from "./../../images/lng/gr.png";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { t, i18n } = useTranslation();

  const lang = i18n.language;
  const isGreek = lang.toLowerCase().includes("gr");
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header id="header" className={props.topbarNone}>
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light kolitos relative">
          <div id="lng-picker">
            {isGreek ? (
              <button onClick={() => changeLang("en")}>
                <img height={25} src={en} alt="en"></img>
              </button>
            ) : (
              <button onClick={() => changeLang("gr")}>
                <img height={25} src={gr} alt="gr"></img>
              </button>
            )}
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">{/* <MobileMenu /> */}</div>
              </div>
              <div className="col-lg-12 col-md-6 col-6 d-lg-none">
                <div className="navbar-header text-center">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                  >
                    {t("hero_title")}
                    {/* Foivos & Xristiana */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
