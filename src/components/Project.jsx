export default function Project({ title, img, liveLink, repoLink }) {
    return (
      <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-xl font-bold text-center ">{title}</h3>
          <div className="flex justify-between mt-2">
            <a href={liveLink} target="_blank" rel="noreferrer" className="text-blue-300">Live Demo</a>
            <a href={repoLink} target="_blank" rel="noreferrer" className="text-blue-300">GitHub Repo</a>
          </div>
        </div>
      </div>
    );
  }