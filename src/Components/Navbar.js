import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { useContext } from 'react'


const Navbar = () => {
    const navigate = useNavigate();
    function checkValidation() {
        // debugger;
        const a = 6;
        if (a > 5) {
            // navigate('/image')
        }
        else
            console.log("hi")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                    <ul className="navbar-nav  ml-auto">
                        <li className="nav-item active ">
                            <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Signup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Entertainment
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/audio">Audio Songs</NavLink>
                                <NavLink className="dropdown-item" to="/video">Video Songs</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/image">Images</NavLink>
                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Outlet></Outlet>
        </>

    )
}

export default Navbar