const Navbar = () => {
    return (
        <header className="bg-slate-50 shadow-md border rounded-lg">
            <nav
                className="mx-auto flex max-w-7xl text-lg items-center justify-between py-6"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="font-semibold font-sans leading-6 text-gray-900 hover:scale-125 transition duration-300">
                        Home
                    </a>
                    <a href="#" className="font-semibold font-sans leading-6 text-gray-900 hover:scale-125 transition duration-300">
                        About me
                    </a>
                    <a href="#" className="font-semibold font-sans leading-6 text-gray-900 hover:scale-125 transition duration-300">
                        Skills
                    </a>
                    <a href="#" className="font-semibold font-sans leading-6 text-gray-900 hover:scale-125 transition duration-300">
                        Projects
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className="bg-white border rounded-2xl px-6">
                        CONTACT ME
                    </button>
                </div>
            </nav>

            {/* Mobile menu, show/hide based on menu open state. */}
            <div className="lg:hidden" role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div className="fixed inset-0 z-10" />
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
