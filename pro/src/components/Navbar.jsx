import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar-container' style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            padding: "15px"
        }}>
            <Link to={"/"} style={{
                textDecoration: "none",
                color: "white"
            }}>
                <h1>KALVIUM <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="kalvi" style={{marginBottom:"-6px"}} /></h1>
            </Link>
            <div style={{
                display: "flex",
                gap: "30px",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Link to={"/about"} style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                    <h1>ABOUT</h1>
                </Link>
                <Link to={"/Forms"} style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                    <h1>REGISTRATION FORM</h1>
                </Link>
            </div>
        </div>
    )
}

export default Navbar