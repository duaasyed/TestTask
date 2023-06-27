import React from "react";

import DefaultAvatar from "../../assets/images/profile.jpg";
import "./styles.css";

function Avatar({ imageSrc, className = "" }) {
  return (
    <div>
      <img
        className={`avatar__image ${className}`}
        src={imageSrc ?? DefaultAvatar}
        alt="Avatar"
      />
    </div>
  );
}

export default Avatar;
