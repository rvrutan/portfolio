import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-stone-300 p-6">
      <div className="container mx-auto text-center text-stone-700">
        <p className="text-base md:text-lg">&copy; 2025 Roni V. Rutan</p>
        <div className="flex justify-center flex-wrap space-x-4 mt-4">
          <a href="https://github.com/rvrutan" target="_blank" rel="noreferrer" className="hover:text-yellow-700">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <a href="https://www.linkedin.com/in/ronirutan/" target="_blank" rel="noreferrer" className="hover:text-yellow-700">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a href="https://bsky.app/profile/ronirutan.bsky.social" className="hover:text-yellow-700">
            <FontAwesomeIcon icon={faBluesky} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}