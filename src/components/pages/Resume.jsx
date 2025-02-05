export default function Resume() {
  return (
    <section className="text-center m-4 md:m-10 p-10 md:p-20">
      <h2 className="text-3xl md:text-4xl mb-4">Resume</h2>
      <a
        href="assets/Roni Rutan Resume Most Updated.pdf"
        download
        className="bg-stone-300 text-stone-700 text-lg md:text-xl px-10 py-2 md:px-24 rounded-xl"
      >
        Download Resume
      </a>
      <h3 className="text-3xl md:text-4xl mt-6">Proficiencies</h3>
      <ul className="list-disc list-inside text-left m-4 md:mx-auto md:max-w-xs">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
      </ul>
    </section>
  );
}