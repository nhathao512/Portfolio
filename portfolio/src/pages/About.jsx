export const About = () => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
    <h1 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h1>
    <div className="space-y-8">
      <section>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a passionate software engineering student with a strong interest
          in applying technology and AI to solve real-world problems. My goal is
          to become a full-stack developer and contribute to innovative projects
          that push the boundaries of traditional software development.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Education</h2>
        <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-medium text-gray-100">
            Ton Duc Thang University
          </h3>
          <p className="text-gray-300">
            Software Engineering | Expected Graduation: 2026
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          Experience
        </h2>
        <ul className="space-y-4 text-gray-300">
          <li className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-medium text-gray-100 mb-2">
              Web Development
            </h3>
            <p>1 year of experience in education industry projects</p>
          </li>
          <li className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-medium text-gray-100 mb-2">
              Mobile Development
            </h3>
            <p>Experience with Java and Dart for mobile applications</p>
          </li>
          <li className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-medium text-gray-100 mb-2">
              UI/UX Design
            </h3>
            <p>Designed user interfaces for web and mobile applications</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
);
