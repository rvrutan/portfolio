export default function Project({ title, img, liveLink, repoLink }) {
  return (
    <div className="bg-stone-300 text-stone-700 shadow-lg rounded-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-center">{title}</h3>
        <div className="flex justify-between mt-2">
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="text-stone-900"
          >
            GitHub Repo
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-stone-900"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
