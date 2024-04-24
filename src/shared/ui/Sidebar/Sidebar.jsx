import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LogoIcon } from "../../icons/Logo/LogoIcon";
import { FilmIcon } from "../../icons/Sidebar/FilmIcon";
import { HeartIcon } from "../../icons/Sidebar/HeartIcon";
import { TrendingUpIcon } from "../../icons/Sidebar/TrendingUpIcon";
import { CelendarIcon } from "../../icons/Sidebar/CelendarIcon";
import { UsersIcon } from "../../icons/Sidebar/UsersIcon";
import { SlidersIcon } from "../../icons/Sidebar/SlidersIcon";
import { MessageCircleIcon } from "../../icons/Sidebar/MessageCircleIcon";

export const Sidebar = () => {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <div className={`sidebar ${show ? "sidebar-mobile" : ""}`}>
      <LogoIcon className="icon logo" />
      <div className="sidebar-open" onClick={toggleSidebar}>
        <span className="material-icons">{show ? "close" : "menu"}</span>
      </div>
      <div className="sidebar-pages">
        <NavLink
          to="/home"
          className="sidebar-link"
          activeClassName="is-active"
        >
          <FilmIcon className="sidebar-icon" />
          {!show && <span>Home</span>}
        </NavLink>
        <NavLink to="/" className="sidebar-link" activeClassName="is-active">
          <HeartIcon className="sidebar-icon" />
          {!show && <span>Favourites</span>}
        </NavLink>
        <NavLink
          to="/trending"
          className="sidebar-link"
          activeClassName="is-active"
        >
          <TrendingUpIcon className="sidebar-icon" />
          {!show && <span>Trending</span>}
        </NavLink>
        <NavLink
          to="/comingsoon"
          className="sidebar-link mb-small"
          activeClassName="is-active mb-small"
        >
          <CelendarIcon className="sidebar-icon" />
          {!show && <span>Coming soon</span>}
        </NavLink>
        <NavLink
          to="/community"
          className="sidebar-link"
          activeClassName="is-active"
        >
          <UsersIcon className="sidebar-icon" />
          {!show && <span>Community</span>}
        </NavLink>
        <NavLink
          to="/social"
          className="sidebar-link mb"
          activeClassName="is-active mb"
        >
          <MessageCircleIcon className="sidebar-icon" />
          {!show && <span>Social</span>}
        </NavLink>
        <NavLink
          to="/setting"
          className="sidebar-link"
          activeClassName="is-active"
        >
          <SlidersIcon className="sidebar-icon" />
          {!show && <span>Settings</span>}
        </NavLink>
        <NavLink
          to="/logout"
          className="sidebar-link"
          activeClassName="is-active"
        >
          <CelendarIcon className="sidebar-icon" />
          {!show && <span>Logout</span>}
        </NavLink>
      </div>
    </div>
  );
};