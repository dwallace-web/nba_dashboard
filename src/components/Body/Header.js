import React from 'react'
import {
    Link,
} from 'react-router-dom'

const Header = () => {
    return (
        <div >
            <p className="home-button">
                <Link to={`/`}>
                    Home
                </Link>
            </p>
        </div>
    )
}

export default Header
