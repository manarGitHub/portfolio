import { useState } from "react";

const SocialMediaIcons = () => {
  const [showCopied, setShowCopied] = useState(false);
  const email = "manabakari18@gmail.com";

  const handleEmailClick = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000); // Hide message after 2 seconds
    } catch (err) {
      // Fallback to mailto if clipboard fails
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 items-center relative">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/bakari-manar"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          alt="linkedin-link" 
          src="../assets/linkedin.png" 
          className="w-8 h-8 object-contain"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/manarGitHub"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          alt="github-link" 
          src="../assets/github.png" 
          className="w-8 h-8 object-contain"
        />
      </a>
      <button
        className="hover:opacity-50 transition duration-500"
        onClick={handleEmailClick}
        title="Copy email to clipboard"
      >
        <img 
          alt="email-link" 
          src="../assets/email.png" 
          className="w-8 h-8 object-contain"
        />
      </button>
      
      {/* Copy confirmation message */}
      {showCopied && (
        <div className="absolute -top-8 bg-green-500 text-white text-xs px-2 py-1 rounded">
          Email copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default SocialMediaIcons;