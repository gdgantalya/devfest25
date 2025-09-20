import { useState } from "react";

export default function Contact() {
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
        alert(`Mesajınız gönderildi!\nAd: ${formData.name}\nEmail: ${formData.email}\nMesaj: ${formData.message}`);
        setFormData({ name: "", email: "", message: "" }); // reset
    };

    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sol taraf: Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-6"
            >
                <h1 className="text-3xl font-bold mb-6 text-blue-600">
                    Contact
                </h1>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Name Surname</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Adınızı giriniz"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full rounded focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">E-posta</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-postanızı giriniz"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 w-full rounded focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Message</label>
                    <textarea
                        name="message"
                        placeholder="Mesajınızı yazınız"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="border p-2 w-full rounded focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full"
                >
                    Submit
                </button>
            </form>

            {/* Sağ taraf: İletişim Bilgileri */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="mb-2"><span className="font-medium">📍 Address:</span> Google DevFest Ofis, İstanbul</p>
                <p className="mb-2"><span className="font-medium">📞 Phone:</span> +90 555 123 45 67</p>
                <p className="mb-2"><span className="font-medium">✉️ E-posta:</span> info@devfest.com</p>
                <p className="text-gray-600 mt-4 text-sm">
                    You can contact us with any questions, suggestions, or collaboration opportunities.
                </p>
            </div>
        </div>
    );
}

