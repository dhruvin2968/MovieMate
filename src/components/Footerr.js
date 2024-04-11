import {Link}from "react-router-dom";
export const Footerr = () => {
  return (
    <footer className="bg-white shadow   dark:bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/_dhruv.in.307_/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/dhruvin-mehta-910b15259/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCqg02jb7qollc13y8MGHCSg" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Youtube</a>
          </li>
          <li>
            <a href="https://github.com/dhruvin2968" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          </li>
        </ul>
      </div>

    </footer>
  )
}
