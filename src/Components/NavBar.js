import React from "react";
import "./NavBar.css";
import IconCross from "../Components/Icons/IconCross";
import IconTwitter from "../Assets/IconTwitter.png";
import userImg from "../Assets/user-jeanette.jpg";

const NavBar = ({ navIsActive, handleNavBar }) => {
  const isActive = navIsActive ? "isActive" : "";
  return (
    <section className={`NavBar__Container ${isActive}`}>
      <nav className="NavBar">
        <section className="NavBar__Header">
          <span className="NavBar__Header__Title">
            Información de la cuenta
          </span>
          <IconCross handle={handleNavBar} />
        </section>
        <section className="NavBar__User__Dats">
          <div className="User__Dats">
            <img
              className="User__Dats__ImgProfile"
              src={userImg}
              alt="User Perfil"
            />
            <div className="User__Dats__Names">
              <span className="User__Dats__Name">User Jannet</span>
              <span className="User__Dats__NameId">@User Jannet</span>
            </div>
            <div className="NavBar__User__Specs">
              <p>
                8 <span className="User__Follows"> Siguiendo</span>
              </p>
              <p>
                4 <span className="User__Follows"> Seguidores</span>
              </p>
            </div>
          </div>
          <div className="NavBar__IconPlus__Container">
            <svg
              className="NavBar__IconPlus"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
              </g>
            </svg>
          </div>
        </section>
        {/* Iconos */}
        <ol className="ListOfNavigations">
          <li className="Navigations IconTwitter__Container">
            <img className="IconTwitter" src={IconTwitter} alt="Icon Twitter" />
          </li>
          <li className="Navigations">
            <svg
              className="NavigationsIcon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
              </g>
            </svg>
            <span className="Navigations__Title">Perfil</span>
          </li>
          <li className="Navigations">
            <svg
              className="NavigationsIcon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
                <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
              </g>
            </svg>
            <span className="Navigations__Title">Listas</span>
          </li>
          <li className="Navigations">
            <svg
              className="NavigationsIcon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
              </g>
            </svg>
            <span className="Navigations__Title">Guardados</span>
          </li>
          <li className="Navigations">
            <div className="IconGuardados__Container">
              <svg
                className="NavigationsIcon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g>
                  <path d="M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z"></path>
                  <path d="M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z"></path>
                </g>
              </svg>
              <svg
                className="NavigationsIcon Pincel"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g>
                  <path d="M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878z"></path>
                </g>
              </svg>
            </div>
            <span className="Navigations__Title">Mostrar</span>
          </li>
          <li className="Navigations CreateTweet">
            <svg
              className="IconCreateTweet"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
              </g>
            </svg>
            <p>Twittear</p>
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default NavBar;
