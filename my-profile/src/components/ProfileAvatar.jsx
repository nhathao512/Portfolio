export const ProfileAvatar = ({ name, title, imageUrl }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-25 h-30 rounded-xl mb-4 overflow-hidden border-4 border-cyan-400">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    <h1 className="text-xl font-bold mb-2">{name}</h1>
    <p className="text-sm text-gray-400 mb-6">{title}</p>
  </div>
);
