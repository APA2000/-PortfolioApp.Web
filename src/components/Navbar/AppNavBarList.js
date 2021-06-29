import React from 'react'
import PropTypes from 'prop-types'
import AppNavLink from './AppNavLink'

const AppNavBarList = ({
    navbarOpen, navLinks
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
                            <AppNavLink
                                key = {'nav-link-' + index}
                                linkTo = { navLink.linkTo ?? ''}
                                text = { navLink.linkText ?? '' }
                            />
                        );
                    })
                }
              </ul>
          </div>
    )
}

AppNavBarList.propTypes = {
    navbarOpen: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired
}

export default AppNavBarList
