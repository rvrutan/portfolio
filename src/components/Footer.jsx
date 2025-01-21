import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-stone-600 p-4 ">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Roni V. Rutan</p>
        <div className="flex justify-center space-x-4">
          {/* GitHub Icon */}
          <a href="https://github.com/rvrutan" target="_blank" rel="noreferrer" className="hover:text-yellow-500">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/ronirutan/" target="_blank" rel="noreferrer" className="hover:text-yellow-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          {/* Email Icon */}
          <a href="https://bsky.app/profile/ronirutan.bsky.social" className="hover:text-yellow-500">
            <FontAwesomeIcon icon={faBluesky} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}