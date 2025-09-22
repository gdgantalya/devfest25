import TeamMemberCard from "../components/TeamMemberCard";

const team = [
    {
        name: "Sadık Yurt",
        role: "Organizatör",
        img: "https://via.placeholder.com/150",
        desc: "Speaker",
    },
    {
        name: "Mert Öz",
        role: "Tasarımcı",
        img: "https://via.placeholder.com/150",
        desc: "Speaker",
    },
    {
        name: "Sevgi Taş",
        role: "Sunucu",
        img: "https://via.placeholder.com/150",
        desc: "Speaker",
    },
    {
        name: "Özlem Yılmaz",
        role: "Geliştirici",
        img: "https://via.placeholder.com/150",
        desc: "Speaker",
    },
];

export default function Speakers() {
    return (
        <div className="p-8 pt-24 min-h-[80vh]">
            <h1 className="text-3xl font-serif mb-6 text-center text-yellow-600">Speakers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {team.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
}
