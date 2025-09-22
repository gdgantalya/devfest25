export default function TeamMemberCard({ name, role, img, desc }) {
    return (
        <div className="bg-white/50 shadow-lg rounded-3xl p-4 text-center hover:shadow-xl transition">
            <img
                src={img}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-blue-600 font-medium">{role}</p>
            <p className="text-gray-600 mt-2 text-sm">{desc}</p>
        </div>
    );
}
