const events = [
    {
        time: "09:30 - 10:00",
        title: "Registration and Welcome",
        speaker: "Organization Team",
        location: "Entrance Hall",
    },
    {
        time: "10:00 - 11:00",
        title: "Opening Speech",
        speaker: "Ahmet Yılmaz",
        location: "Main Hall",
    },
    {
        time: "11:15 - 12:00",
        title: "Artificial Intelligence and the Future",
        speaker: "Ayşe Demir",
        location: "Hall A",
    },
    {
        time: "13:00 - 14:00",
        title: "Networking & Lunch",
        speaker: "Tüm Katılımcılar",
        location: "Fuaye Alanı",
    },
    {
        time: "14:15 - 15:00",
        title: "cloud technologies",
        speaker: "Mehmet Can",
        location: "Hall B",
    },
    {
        time: "15:15 - 16:00",
        title: "Software Developer Trends",
        speaker: "Elif Kaya",
        location: "Hall A",
    },
    {
        time: "16:15 - 17:00",
        title: "Closing & Certificate Distribution",
        speaker: "Organization Team",
        location: "Main Hall",
    },
];

export default function Calendar() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Event Schedule
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition"
                    >
                        <p className="text-sm text-gray-500 mb-2">{event.time}</p>
                        <h2 className="text-xl font-semibold">{event.title}</h2>
                        <p className="text-blue-600 font-medium mt-2">
                            🎤 {event.speaker}
                        </p>
                        <p className="text-gray-600 mt-1">📍 {event.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
