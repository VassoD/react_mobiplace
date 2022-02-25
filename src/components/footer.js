import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
    <div className="leftside">
    <p>Developed by Vassiliki for the SHA class 2022 project</p>    </div>
    <div className="rightside">
    <p>mobiplace@mobiplace.com</p> 
    <FontAwesomeIcon icon={faEnvelope} pull="right" size="xl" />
    </div>
  </div>
  );
}
