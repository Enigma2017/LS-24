import React from "react";
import { Link } from "react-router-dom";
import { BellIcon } from "../../icons/Header/BellIcon";
import { SearchIcon } from "../../icons/Header/SearchIcon";


export const Header = ({navIsActive, navClose}) => {
  
  return (
    
    <div className="header">
      <Link className="header-link" to="/">
        Movies
      </Link>
      <Link className="header-link" to="/">
        Series
      </Link>
      <Link className="header-link" to="/">
        Documentaries
      </Link>
      <div className="ml-auto header-group">
        <SearchIcon className="icon"/>
        <BellIcon className="icon" />
        <div className="user">
          <img className="user-img" src="/src/assets/img/user.png" alt="" />
          <p className="user-name">Tetiana</p>
        </div>
      </div>
    </div>
  );
};
