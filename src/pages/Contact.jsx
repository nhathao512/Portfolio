export const Contact = () => {
  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Contact Me</h1>
      <div className="text-gray-300 text-lg space-y-4">
        <p>Email: <a href="mailto:vonhathao641@gmail.com" className="text-cyan-400 hover:underline">vonhathao641@gmail.com</a></p>
        <p>Phone: <a href="tel:+84334944908" className="text-cyan-400 hover:underline">+84 334 944 908</a></p>
        <p>Location: Hồ Chí Minh, Việt Nam</p>
      </div>
    </div>
  );
};