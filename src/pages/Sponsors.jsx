
export default function Sponsors() {
    return (
        <div className="p-8 pt-40 min-h-[80vh] flex justify-center items-start">
            <div className="bg-gray-100/50 shadow-md hover:shadow-xl transition border-blue-200 border-2 rounded-lg p-6 w-3/4 max-w-2xl">
                <h1 className="text-3xl font-serif mb-6 text-center text-blue-400"> Sponsorship</h1>
                <p className="text-center mb-6 text-gray-700">
                    If you would like to sponsor our event, please click the button below!!
                </p>
                <div className="flex justify-center">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-black shadow-xl transition text-white border-2 px-6 py-4 rounded-3xl hover:bg-blue-400">
                            Become a Sponsor
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
