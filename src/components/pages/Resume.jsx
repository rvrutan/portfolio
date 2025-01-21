export default function Resume() {
  return (
    <section className="text-center m-10 p-20">
      <h2 className="text-4xl mb-4 ">Resume</h2>
      <a
        href="assets/Roni Rutan Resume.pdf"
        download
        className="bg-stone-300 text-stone-700 text-xl px-24 py-2 rounded-xl"
      >
        Download Resume
      </a>
      <h3 className="text-4xl mt-6 ">Proficiencies</h3>
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
      </ul>
    </section>
  );
}
