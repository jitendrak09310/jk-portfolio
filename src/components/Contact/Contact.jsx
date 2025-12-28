import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
    const formRef = useRef();
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const email = formRef.current.email.value;

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");

        emailjs
            .sendForm(
                "service_4qtti9b",
                "template_yuj4g6n",
                formRef.current,
                "wccajsrW8js2VX6pQ"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    formRef.current.reset();
                },
                (error) => {
                    console.error(error);
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contact Me</h2>

                <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className={error ? "input-error" : ""}
                    />


                    {error && <p className="form-error">{error}</p>}

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                    />

                    <button type="submit" className="contact-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
