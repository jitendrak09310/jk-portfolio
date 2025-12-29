import { useState } from "react";
import "./CompatibilityPopUp.css";

function CompatibilityPopUp() {
    const [show, setShow] = useState(() => {
        const visited = localStorage.getItem("visited");
        if (!visited) {
            localStorage.setItem("visited", "true");
            return true;
        }
        return false;
    });

    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <h2>Welcome!</h2>
                <p>
                    This site is optimized for desktop browsers. Please use{" "}
                    <strong>Chrome</strong>, <strong>Microsoft Edge</strong>, or{" "}
                    <strong>Firefox</strong> for the best experience.
                </p>

                <button onClick={() => setShow(false)}>Got it</button>
            </div>
        </div>
    );
}

export default CompatibilityPopUp;
