import TeamMemberCard from "../components/TeamMemberCard";

const team = [
    {
        name: "Ahmet Yılmaz",
        role: "Organizatör",
        img: "https://via.placeholder.com/150",
        desc: "Yazılım geliştirici ve organizasyon lideri",
    },
    {
        name: "Ayşe Demir",
        role: "Tasarımcı",
        img: "https://via.placeholder.com/150",
        desc: "UI/UX tasarımcısı ve grafik uzmanı",
    },
    {
        name: "Mehmet Can",
        role: "Sunucu",
        img: "https://via.placeholder.com/150",
        desc: "Etkinlik sunucusu ve içerik üretici",
    },
    {
        name: "Elif Kaya",
        role: "Geliştirici",
        img: "https://via.placeholder.com/150",
        desc: "Frontend geliştirici (React.js, TailwindCSS)",
    },
];

export default function Team() {
    return (
        <div className="p-8 pt-24 min-h-[80vh]">
            <h1 className="text-3xl font-serif mb-6 text-center text-purple-400">Organizers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {team.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
}
