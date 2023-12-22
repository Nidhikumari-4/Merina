import React from "react";
import "./Navbar.scss";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <Image src="/icons_search.svg" alt="Image" width="20" />
        <InputText type="search" placeholder="Search" className="searchInput" />
      </div>
      <div className="right_navbar">
        <div className="calendar">
          <span className="calendar_dates">
            <p className="dates">11-10-2022</p>
            <Image src="/calendar.svg" alt="Image" width="20" />
          </span>
          <p className="or"> OR</p>
          <span className="calendar_dates">
            <p className="dates">11-10-2022</p>
            <Image src="/calendar.svg" alt="Image" width="20" />
          </span>
        </div>
        <div className="userBoard">
          <Image src="/userImage.svg" alt="Image" width="30" />

          <span className="text_area">
            <p className="user_text">Welcome back</p>
            <p className="user_name">Akshita Patel</p>
          </span>

          <Image src="/Arrow - Down 2.png" alt="Image" width="20" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
