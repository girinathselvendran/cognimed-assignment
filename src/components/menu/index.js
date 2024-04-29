import React, { useContext } from "react";
import "./styles.css";
import UserContext from "../../context/UserContext";

function Menu() {
  const { data, setData } = useContext(UserContext);

  const handleToggle = (e) => {
    const isChecked = e.target.checked;
    console.log("Toggle is:", isChecked);
    setData(isChecked === false ? "mode1" : "mode2");
  };
  return (
    <div>
      <nav className="menu">
        <div className="menu-list">
          <img
            className="user-img"
            width="100"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="user-img"
          />

          <a href="#" className="active-menu">
            <i class="fa-regular fa-message"></i>{" "}
          </a>

          <a href="#">
            <i className="fa-regular fa-user"></i>
          </a>

          <a href="#">
            {" "}
            <i className="fa-regular fa-gear"></i>
          </a>
        </div>

        <div className="toggle-btn ">
          <span className="mode1"> Mode 1</span>
          <br />
          <br />
          <label className=" switch toggle-mode">
            <input type="checkbox" onClick={(e) => handleToggle(e)} />
            <span className="slider round"></span>
          </label>
          <br />
          <br />
          <span className="mode2"> Mode 2</span>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
