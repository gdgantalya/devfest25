import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {

    return (
        <div className="p-8 pt-40 min-h-[80vh] flex justify-center items-start">
            {/*İletişim Bilgileri */}
            <div className="bg-gray-100/50 shadow-md hover:shadow-xl transition border-pink-200 border-2 rounded-lg p-6 w-3/4 max-w-2xl">
                <h2 className="text-3xl text-center text-pink-500 font-serif mb-4">Contact Information</h2>
                <div className="mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-black-600" />
                    <span className="text-black-800">Google DevFest Ofis, Antalya</span>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-black-600" />
                    <a
                        href="tel:+905551234567"
                        className="text-blue-600 hover:underline"
                    >
                        +90 555 123 45 67
                    </a>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-black-600" />
                    <a
                        href="mailto:info@devfest.com"
                        className="text-blue-600 hover:underline"
                    >
                        info@devfest.com
                    </a>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                    You can contact us with any questions, suggestions, or collaboration opportunities.
                </p>
            </div>
        </div>
    );
}

