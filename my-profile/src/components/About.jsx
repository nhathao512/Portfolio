export const About = ({ about }) => (
  <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-8 shadow-lg mb-8">
    <h2 className="text-2xl font-bold text-cyan-400 mb-4">About Me</h2>
    <p className="text-gray-300 leading-relaxed">{about}</p>
  </div>
);
