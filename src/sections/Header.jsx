import { useState } from "react";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleOpenMenu = (e) => {
        setMenuOpen(false);
        document.title = "EBRAHIM - " + e.target.textContent;
    }


    return (
    <header className="sticky top-0 left-0 z-10 bg-[#F5F7FF]">
        <div className="relative flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full">
            <a href="#" className="uppercase text-4xl font-bold text-gray-900">
            ebrahim
            </a>

            {/* Navigation */}
            <nav
            className={`z-15 max-md:fixed max-md:top-0 max-md:left-0 items-center justify-center flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal transition-[width] max-md:overflow-hidden max-md:h-full max-md:bg-white/90 ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
            <a className="hover:text-indigo-600" href="#home" onClick={(e) => handleOpenMenu(e)}>
            Home
            </a>
            <a className="hover:text-indigo-600" href="#about" onClick={(e) => handleOpenMenu(e)}>
            About
            </a>
            <a className="hover:text-indigo-600" href="#skills" onClick={(e) => handleOpenMenu(e)}>
            Skills
            </a>
            <a className="hover:text-indigo-600" href="#experience" onClick={(e) => handleOpenMenu(e)}>
            Experience
            </a>
            <a className="hover:text-indigo-600" href="#education" onClick={(e) => handleOpenMenu(e)}>
            Education
            </a>
            <a className="hover:text-indigo-600" href="#contact" onClick={(e) => handleOpenMenu(e)}>
            Contact
            </a>
            {/* Close Menu Button */}
            <button
            className="md:hidden text-gray-600 max-md:absolute max-md:top-8 max-md:right-6"
            onClick={() => setMenuOpen(false)}
            >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            </nav>

            {/* Open Menu Button */}
            <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(true)}
            >
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
        </div>
    </header>
    )
}

export default Header;