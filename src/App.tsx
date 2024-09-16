import { useState } from "react";
import { FaHome, FaMedal, FaMoon, FaSun, FaUsers } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import AthleteProfiles from "./components/AthleteProfiles";
import Events from "./components/Events";
import Home from "./components/Home";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen w-svw`}>
      <div className="min-h-screen bg-white dark:bg-neutral-800 text-dark dark:text-light flex flex-col">
        <nav className="bg-white dark:bg-gray-800 sticky top-0 z-50 shadow-lg transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
              <img
                src="/olympic-rings.svg"
                alt="Olympic Rings"
                className="h-8 w-auto mr-3"
              />
              Olympic Horizon 2024
            </h1>
            <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 flex items-center transition-colors duration-200"
                >
                  <FaHome className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/athletes"
                  className="hover:text-blue-500 flex items-center transition-colors duration-200"
                >
                  <FaUsers className="mr-2" /> Athletes
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-blue-500 flex items-center transition-colors duration-200"
                >
                  <FaMedal className="mr-2" /> Events
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  {darkMode ? (
                    <FaSun className="text-yellow-400" />
                  ) : (
                    <FaMoon className="text-blue-600" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <main className="flex-grow container mx-auto py-8 px-4 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/athletes" element={<AthleteProfiles />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>

        <footer className="bg-lightGray dark:bg-dark text-dark dark:text-light py-6 transition-colors duration-300">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Olympic Horizon. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
