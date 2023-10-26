import React from 'react'

export default function Logo({className}) {
    return (
        <div className={className}>
            <img
                 src={require("../assets/images/logo-blue.png")}
                 alt="gpgp"
                 className="object-center py-5"
             />
        </div>
    )
}
