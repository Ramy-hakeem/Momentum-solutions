import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
    return (
        <footer className="w-full  bg-gray-800 text-white shadow-md  bottom-0 ">
            <div className="container  flex items-center justify-around  p-4">
                <p>
                    date: 14/6/2024
                </p>

                <img src={logo} alt="logo" className="h-10" />

            </div >
        </footer >
    )
}

export default Footer
