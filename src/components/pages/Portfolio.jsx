import Project from "../Project";

export default function Portfolio() {
  return (
    <section className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Repeat this Project component for each project */}
        <Project
          title="JUMPER"
          img="assets/jumper.png"
          liveLink="https://rvrutan.github.io/jumper/"
          repoLink="https://github.com/rvrutan/jumper"
        />
        <Project
          title="Multi-Dictionary"
          img="assets/Multi-Dictionary.JPG"
          liveLink="https://multi-dictionary.netlify.app/"
          repoLink="https://github.com/rvrutan/dictionary"
        />
        <Project
          title="Weather Dashboard"
          img="assets/weaather-dashboard demo.png"
          liveLink="https://weather-dashboard-9vqe.onrender.com/"
          repoLink="https://github.com/rvrutan/weather-dashboard"
        />
        <Project
          title="README Generator"
          img="assets/readme-gerator.JPG"
          liveLink=""
          repoLink="https://github.com/rvrutan/readme-generator"
        />
        <Project
          title="Employee Tracker"
          img="assets/employee-tracker.JPG"
          liveLink=""
          repoLink="https://github.com/rvrutan/employee-tracker"
        />
        <Project
          title="Vehicle Builder"
          img="assets/vehicle builder.JPG"
          liveLink=""
          repoLink="https://github.com/rvrutan/vehicle-builder"
        />
      </div>
    </section>
  );
}