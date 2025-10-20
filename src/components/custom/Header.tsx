function Header() {
    return (
        <header className="flex items-center justify-between px-10 shadow py-2">
            <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                <img src="/logo.svg" alt="Logo" width={40} height={40}/>
            </div>
            <div className="hidden md:flex flex-1 justify-center gap-8">
                <a className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary"
                   href="#">Home</a>
                <a className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary"
                   href="#">My Projects</a>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Account</span>
                </button>
            </div>
        </header>
    );
}

export default Header;