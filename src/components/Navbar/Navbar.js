import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import AppNavBarList from "./AppNavBarList";
import NavBarContactLinkList from "./NavBarContactLinkList";
import { observer } from "mobx-react-lite";

const Navbar = observer(({
    title,
    navLinks,
    navContactLinks
}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const { slug } = useParams();

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-900 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            to = {`/${slug}`}
                            className = "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                        >
                            {title}
                        </Link>

                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>

                    <AppNavBarList
                        navLinks = {navLinks}
                        navbarOpen = {navbarOpen} />

                    <NavBarContactLinkList
                        navbarOpen = {navbarOpen}
                        navLinks = {navContactLinks} />
                </div>
            </nav>
        </>
    );
})

Navbar.prototypes = {
    name: PropTypes.string.isRequired
}

export default Navbar;