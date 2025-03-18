import Project from "../Project";

export default function Portfolio() {
  const projects = [
    {
      title: "Wordle by Roni",
      img: "assets/Wordle by Roni.JPG",
      liveLink: "https://main.d31onown0apcrr.amplifyapp.com/",
      repoLink: "https://github.com/rvrutan/WORDLE",
    },
    {
      title: "JUMPER",
      img: "assets/jumper.png",
      liveLink: "https://rvrutan.github.io/jumper/",
      repoLink: "https://github.com/rvrutan/jumper",
    },
    {
      title: "Multi-Dictionary",
      img: "assets/Multi-Dictionary.JPG",
      liveLink: "https://multi-dictionary.netlify.app/",
      repoLink: "https://github.com/rvrutan/dictionary",
    },
    {
      title: "Weather Dashboard",
      img: "assets/weaather-dashboard demo.png",
      liveLink: "https://weather-dashboard-9vqe.onrender.com/",
      repoLink: "https://github.com/rvrutan/weather-dashboard",
    },
    {
      title: "README Generator",
      img: "assets/readme-gerator.JPG",
      liveLink: "",
      repoLink: "https://github.com/rvrutan/readme-generator",
    },
    {
      title: "Employee Tracker",
      img: "assets/employee-tracker.JPG",
      liveLink: "",
      repoLink: "https://github.com/rvrutan/employee-tracker",
    },
  ];

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            img={project.img}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}
