import React from "react";
import "./navbar.css";
import logo from "../../assets/netflix-logo.png";
import { Link } from "react-router-dom";
import avatar2 from "../../assets/avatar2.jpg";
import { BsSearch, BsCaretDownFill, BsBell } from "react-icons/bs";

const Navbar = () => {
  const [isToggle, setIsToggle] = React.useState(false);

  const handleToggle = () => setIsToggle((toggled) => !toggled);

  const modalRef = React.useRef();

  React.useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (
        isToggle &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setIsToggle(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickOutside);

    return () =>
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickOutside);
  }, [isToggle]);

  return (
    <div className="navbar__container">
      <div className="navbar-logo__container">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links__container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/anime">Anime</Link>
          </li>
          <li>
            <Link to="/tv">TV</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right__container">
        <div className="navbar-searchbar">
          <input type="text" />
          <BsSearch className="search__icon" />
        </div>
        <BsBell className="bell" />
        <div className="navbar-auth__container">
          <div className="navbar-auth-avatar">
            <img src={avatar2} alt="" />
          </div>
          <div className="navbar-arrow__down">
            <BsCaretDownFill
              onClick={handleToggle}
              id={isToggle && "toggle"}
              className="carret__down toggle"
            />
          </div>
        </div>
        {isToggle && (
          <div ref={modalRef} className="navbar-modal__container">
            <ul>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/subscriptions">Subscriptions</Link>
              </li>
              <li>Watchlist</li>
              <li>Settings</li>
              <li>
                <Link to="/plans">Plans</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
