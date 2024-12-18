import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../screens/Login'
export default function Navbar() {
    return (
        <>
            <div className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                       <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <Link className='nav-link'  to="/login"><Login/></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}