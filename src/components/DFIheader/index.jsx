import { menuItems } from "../../module/config/constants/globals";
import useMediaQueryWatcher from "../../module/config/hooks/useMediaQueryWatcher";
import { useEffect, useState } from "react";
import { Hamburger, Cancel } from "../../module/icons";
import MenuLink from "../menulink";
import { headerClass as styles } from "./DFIheader.classes";
import logo from "../../assets/logo.png";

const DFIHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isTablet = useMediaQueryWatcher("(min-width: 1024px)");

  const showMenuFunc = () => {
    setShowMenu(!showMenu);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100); // Change 100 to your desired scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        isScrolled
          ? "lg:bg-white lg:bg-opacity-25 lg:backdrop-blur-lg " + styles.header
          : "lg:bg-transparent " + styles.header
      }
    >
      <div className={styles.wrapper}>
        <a href="#home" className={styles.logoContainer}>
          <img src={logo} alt="DevFest Antalya Logo" />
        </a>

        {isTablet && (
          <>
            <nav className="lg:block">
              <ul className={styles.headerMenu}>
                {menuItems.map(({ label, slur }) => (
                  <div key={slur} onClick={showMenuFunc}>
                    <MenuLink key={slur} label={label} slur={slur} />
                  </div>
                ))}
              </ul>
            </nav>
          </>
        )}
        {showMenu && (
          <nav className={styles.showMenu}>
            <ul className={styles.headerMenu}>
              {menuItems.map(({ label, slur }) => (
                <div key={slur} onClick={showMenuFunc}>
                  <MenuLink key={slur} label={label} slur={slur} />
                </div>
              ))}
            </ul>
          </nav>
        )}
        <button
          aria-label={!showMenu ? "menu" : "close"}
          className={styles.toggleMenuBtn}
          onClick={showMenuFunc}
        >
          {!showMenu ? (
            <Hamburger color="fill-black" />
          ) : (
            <Cancel color="stroke-black" />
          )}
        </button>
      </div>
    </header>
  );
};

export default DFIHeader;
