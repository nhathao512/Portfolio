export const ProfileAvatar = ({ name, title, imageUrl }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-40 h-48 rounded-2xl mb-4 overflow-hidden border-4 border-blue-400/30 shadow-xl hover:border-blue-400/50 transition-all hover:scale-105">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    <h1 className="text-xl font-bold text-blue-400 mb-1">{name}</h1>
    <p className="text-sm text-gray-400 mb-6">{title}</p>
  </div>
);
