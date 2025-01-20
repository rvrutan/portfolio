export default function Resume() {
    return (
      <section className="text-center m-10">
        <h2 className="text-3xl font-bold mb-4 ">Resume</h2>
        <a href="assets/Roni Rutan Resume.pdf" download className="bg-blue-700 text-white p-2 rounded">Download Resume</a>
        <h3 className="text-2xl font-bold mt-6">Proficiencies</h3>
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
      </ul>
      </section>
    );
  }