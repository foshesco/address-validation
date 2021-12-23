import React from "react";
import './popup-common.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-inner-inner">
                    {props.children}
                </div>
                <div className="popup-inner-inner-btn">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                </div>
            </div>
        </div >
    ) : "";
}

export default Popup