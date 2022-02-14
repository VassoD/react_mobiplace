import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer">
            <p>copyright @2022</p>
            <div className="social">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
             <i className="fa fa-instagram"></i>
            </div>
        </div>
    )
}
