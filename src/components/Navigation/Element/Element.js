import React from "react"
import {
    NavLink
} from "react-router-dom";

const Element = ({ title, icon, link }) => {

    return (
        <li className='element' >
            <NavLink to={`/${link}`}>
                <img src={icon} />
                <span className="text">{title}</span>
            </NavLink>
        </li>
    )
}

export default Element