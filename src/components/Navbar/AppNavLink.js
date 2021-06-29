import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AppNavLink = ({
    linkTo,
    text,
    iconClass
}) => {
    return (
        <li className="nav-item">
            <Link
                to = {linkTo}
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
                {
                    iconClass &&
                    <i className={`${iconClass} text-lg leading-lg text-white opacity-75`}></i>
                }
                <span className="ml-2">
                    {text}
                </span>
            </Link>
        </li>
    )
}

AppNavLink.propTypes = {
    linkTo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default AppNavLink
