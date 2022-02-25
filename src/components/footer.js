import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faYoutube } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <div className="footer">
            <p>copyright @2022</p>
            <div className="social">
            {/* <FontAwesomeIcon  icon={faYoutube} size="xl"/> */}

            <FontAwesomeIcon  icon={faEnvelope} size="xl"/>
            </div>
        </div>
    )
}
