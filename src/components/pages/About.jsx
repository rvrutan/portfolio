export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-6 md:p-20 space-y-6 md:space-y-0 md:space-x-10">
      <img
        src="assets/IMG_1230.JPG"
        alt="Roni"
        className="w-48 h-48 md:w-72 md:h-80 rounded-full mx-auto md:mx-0 mb-4"
      />
      <div className="text-base md:text-lg">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">ABOUT</h1>
        <p className="mb-4">
          I am Veysel Yalin (Roni), a highly motivated and results-oriented
          individual eager to transition into the dynamic field of software
          development.
        </p>
        <p className="mb-4">
          With a proven track record of success as a Construction Project
          Manager for over six years, I possess exceptional project management,
          problem-solving, and team collaboration skills. My experience in
          successfully delivering numerous projects has instilled in me a strong
          work ethic, attention to detail, and the ability to thrive in
          fast-paced environments.
        </p>
        <p>
          I am a quick learner and a dedicated team player, eager to contribute
          my skills and enthusiasm to a challenging and rewarding role in
          software development. I have already embarked on my software
          development journey with the successful completion of projects such as
          the Weather Dashboard.
        </p>
      </div>
    </section>
  );
}