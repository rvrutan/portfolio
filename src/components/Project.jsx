export default function Project({ title, img, liveLink, repoLink }) {
  return (
    <div className="bg-stone-300 text-stone-700 shadow-lg rounded-lg overflow-hidden mx-4 md:mx-0">
      <img
        src={img}
        alt={title}
        className="w-full h-40 md:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-bold text-center">{title}</h3>
        <div className="flex flex-col md:flex-row justify-between mt-2 text-center md:text-left">
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="text-stone-900 mb-2 md:mb-0"
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