export const ProfileAvatar = ({ name, title, imageUrl }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4 h-48 w-40 overflow-hidden rounded-2xl border-4 border-blue-400/30 shadow-xl transition-all hover:scale-105 hover:border-blue-400/50">
      <img src={imageUrl} alt="Profile" className="h-full w-full object-cover" />
    </div>
    <h1 className="mb-1 text-xl font-bold text-blue-400">{name}</h1>
    <p className="mb-6 text-sm text-gray-400">{title}</p>
  </div>
);
