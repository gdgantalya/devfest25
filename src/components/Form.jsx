import { useState } from "react";


export default function Form({ title }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${title} The form has been submitted!\nAd: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        setFormData({ name: "", email: "", message: "" }); // form reset
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto"
        >
            <h2 className="text-xl font-bold mb-4">{title} Form</h2>
            <input
                type="text"
                name="name"
                placeholder="Name Surname"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 w-full mb-3 rounded"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="E-posta"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full mb-3 rounded"
                required
            />
            <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 w-full mb-3 rounded"
                rows="4"
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
}