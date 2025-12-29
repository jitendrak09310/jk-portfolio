import { useEffect, useState } from "react";
import "./VisitorCounter.css";

function VisitorCounter() {
    const [count, setCount] = useState(null);

    useEffect(() => {
        fetch("https://api.countapi.xyz/hit/jk-portfolio/visits")
            .then((res) => res.json())
            .then((data) => setCount(data.value))
            .catch(console.error);
    }, []);

    return (
        <div className="visitor-counter">
            👀 Visitors: {count ?? "—"}
        </div>
    );
}

export default VisitorCounter;
