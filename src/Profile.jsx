import React from "react";
import CLink from "./CLink";

const Profile = () => {
  return (
    <main class="profile">
      <p id="timeline">
        2021 - 2022
        <br />
        AGENDA MEDIA AGENCY
        <br />
        VIDEO EDITOR
        <br />
        <br />
        2020 - 2022
        <br />
        MOSCOW FILM SCHOOL
        <br />
        DIRECTING
        <br />
        <br />
        2019 - 2021
        <br />
        CONTENTSERVICE AGENCY
        <br />
        VIDEO EDITOR
      </p>
      <img src="media/anton.jpg" alt="" srcset="" />
      <p id="contacts">
        <CLink to="mailto:martynovxas@gmail.com">MARTYNOVXAS@GMAIL.COM</CLink>
        <br />
        <CLink to="tel:+46707782279">+46 70-778 22 79</CLink>
        <br />
        <span id="links">
          <CLink to="https://www.instagram.com/martynovxas" target="_blank">
            IG
          </CLink>
          <CLink to="http://linkedin.com/in/antonxmartynov" target="_blank">
            IN
          </CLink>
          <CLink to="https://t.me/njysx" target="_blank">
            TG
          </CLink>
        </span>
      </p>
    </main>
  );
};

export default Profile;
