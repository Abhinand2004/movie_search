import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold">MovieSearch</h2>
                            <p className="text-gray-400 text-sm">Your ultimate movie discovery platform</p>
                        </div>
                        <div className="flex flex-col justify-start md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                Home
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                Search
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                Genres
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                About
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 border-t border-gray-700 pt-4 text-center">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} MovieSearch. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
