import React from 'react'
import PropTypes from 'prop-types'

const NavBarContactLinkList = ({
    navbarOpen,
    navLinks
}) => {
    return (
        <div
            className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
            }
        >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {
                    navLinks && navLinks.length > 0 &&

                    navLinks.map((navLink, index) => {
                        return (
                            <li key={navLink.linkText} className="nav-item">
                                <a
                                    className = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href = {navLink.linkTo}
                                    rel="noreferrer"
                                    target = "_blank"
                                >
                                    {
                                        navLink.iconClass &&
                                        <i className = {`${navLink.iconClass} text-lg leading-lg text-white opacity-75"`}></i>
                                    }
                                    <span className="ml-2">{ navLink.linkText }</span>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

NavBarContactLinkList.propTypes = {
    navbarOpen: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired
}

export default NavBarContactLinkList
