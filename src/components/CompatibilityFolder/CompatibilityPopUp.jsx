import { useState } from "react";

function CompatibilityPopUp() {

    const [show, setShow] = useState(() => {
        const visited = localStorage.getItem("visited");
        console.log("visited (before):", visited);

        if (!visited) {
            localStorage.setItem("visited", "true");
            console.log("visited (after):", localStorage.getItem("visited"));
            return true;
        }
        return false;
    });

    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <h3>Best Experience</h3>
                <p>Please use Chrome, Microsoft Edge or Firefox on Desktop</p>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setShow(false);
                    }}
                >
                    OK
                </button>
            </div>
        </div>
    );
}

export default CompatibilityPopUp;
