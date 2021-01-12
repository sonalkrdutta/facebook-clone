import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
            title="S"
            src="https://www.facebook.com/facebook"
            width="340"
            height="100%"
            style={{ border: "none", overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrtpted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
