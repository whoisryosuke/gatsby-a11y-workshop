import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Heading } from "grommet"

const Header = ({ siteTitle }) => (
  <>
    <Heading level="1" margin="none" size="medium">
      {/* <span className="headerIcon">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
          <g>
            <path d='M111.8,58c-1.5-1.6-3.7-2.4-5.9-2.3l-26.5,1.5L94,40.6c2.1-2.4,2.7-5.5,1.9-8.3c-0.4-1.9-1.6-3.7-3.4-4.8 c-0.1,0-34.9-20.3-34.9-20.3c-2.8-1.7-6.4-1.3-8.9,0.9l-17,15.2c-3.1,2.8-3.4,7.6-0.6,10.7c2.8,3.1,7.6,3.4,10.7,0.6l12.9-11.5 l10.7,6.2L46.6,50.7c-7.8,1.3-14.8,4.9-20.3,10.1l9.8,9.8c4.4-4,10.3-6.5,16.8-6.5c13.8,0,25,11.2,25,25c0,6.5-2.5,12.4-6.5,16.8 l9.8,9.8c6.5-7,10.6-16.3,10.6-26.6c0-6.1-1.4-12-4-17.1l10.3-0.6l-2.5,30.6c-0.3,4.2,2.8,7.9,7,8.2c0.2,0,0.4,0,0.6,0 c3.9,0,7.2-3,7.6-7L114,64C114.2,61.8,113.4,59.6,111.8,58z'
            />
            <path d='M97.8,25.5c7,0,12.7-5.7,12.7-12.7c0-7-5.7-12.7-12.7-12.7C90.7,0,85,5.7,85,12.7C85,19.8,90.7,25.5,97.8,25.5z'
            />
            <path d='M52.9,114.1c-13.8,0-25-11.2-25-25c0-5.2,1.6-10,4.3-14l-9.9-9.9c-5.2,6.6-8.3,14.9-8.3,24c0,21.5,17.4,38.9,38.9,38.9 c9,0,17.4-3.1,24-8.3l-9.9-9.9C62.9,112.5,58.1,114.1,52.9,114.1z'
            />
          </g>
        </svg>
      </span> */}
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </Heading>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header