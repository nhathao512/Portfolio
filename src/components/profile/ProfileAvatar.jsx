export const ProfileAvatar = ({ name, title, imageUrl }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4 aspect-[4/5] w-32 overflow-hidden rounded-lg border border-cyan-300/30 bg-slate-900/60 shadow-xl shadow-slate-950/30 transition-all hover:border-cyan-300/60 sm:w-40 lg:w-full lg:max-w-40">
      <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
    </div>
    <h1 className="mb-1 text-xl font-bold text-cyan-300">{name}</h1>
    <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-400">{title}</p>
  </div>
);
