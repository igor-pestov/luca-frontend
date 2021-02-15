import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Element = ({ title, icon, link, active = false }) => {

    return (
        <li className={`element ${active ? 'active' : ''}`} >
            <Link to={`/${link}`}>
                <img src={icon} />
                <span className="text">{title}</span>
            </Link>
        </li>
    )
}

export default Element