import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-center md:text-left">
          {year} Felicia Josephine.
          <p>fjosephine131@gmail.com</p>
        </div>

        <div className="flex gap-4 justify-center md:justify-end">
          <Link
            href="https://github.com/Felca"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/felicia-josephine-a6237a374/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
