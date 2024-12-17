import Logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <header className="bg-slate-50 shadow-md border rounded-lg sticky z-50 top-0 w-full">
            <nav
                className="mx-auto flex max-w-7xl text-lg items-center justify-between py-6"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-6"
                            src={Logo}
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#home" className="font-semibold font-sans leading-6 text-gray-900 hover:scale-125 transition duration-300">
                        Home
                    </a>
                    <a href="#about-me" className="font-semibold font-sans leading-6 text-gray-900 hover:scale-125 transition duration-300">
                        About me
                    </a>
                    <a href="#skills" className="font-semibold font-sans leading-6 text-gray-900 hover:scale-125 transition duration-300">
                        Skills
                    </a>
                    <a href="#" className="font-semibold font-sans leading-6 text-gray-900 hover:scale-125 transition duration-300">
                        Projects
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className="bg-blue-400 text-white border rounded-2xl text-base font-semibold px-6 py-1 hover:scale-125 transition duration-300 hover:shadow-lg font-sans">
                        CONTACT ME
                    </button>
                </div>
            </nav>

        </header>
    );
};

export default Navbar;
