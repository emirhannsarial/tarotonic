// src/components/Footer.tsx

export default function Footer() {
    return (
        <footer className="rounded-lg shadow-sm  m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center">
                        <img src={'/logo.png'} className="mr-3 h-6 sm:h-9"
                             alt="Tart Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap text-white">Taratonic</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/read" className="hover:underline me-4 md:me-6">Read</a>
                        </li>
                        <li>
                            <a href="/tarot-cards" className="hover:underline me-4 md:me-6">Tarot Cards</a>
                        </li>
                        <li>
                            <a href="/blog" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span
                    className="block text-sm text-white sm:text-center dark:text-gray-400">© {new Date().getFullYear()}
                    <a href="/"
                       className="hover:underline ml-1">Taratonic</a> All rights reserved. ✨</span>
            </div>
        </footer>
    );
}
