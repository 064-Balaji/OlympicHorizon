import { FaCalendarAlt, FaMapMarkerAlt, FaMedal } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Olympic Stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Olympic Horizon 2024</h1>
          <p className="text-2xl mb-8">Experience the Glory of the Games</p>
          <Link
            to="/events"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Explore Events
          </Link>
        </div>
      </section>

      {/* Olympic Overview Section */}
      <section className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
            Paris 2024 Summer Olympics
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <FaCalendarAlt className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Date
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  July 26 - August 11, 2024
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Paris, France
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMedal className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Events
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  329 events in 32 sports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Athletes Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          Featured Athletes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Armand Duplantis",
              sport: "Pole Vault",
              country: "Sweden",
              image:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F62%2F04%2Ff7%2F6204f703de3b3acc10daca4b54b96968.jpg&f=1&nofb=1&ipt=b1388bd437c4626f8e2a184bd9c2372d1e5c312cd8dad930a8bc65439a45addc&ipo=images",
            },
            {
              name: "Simone Biles",
              sport: "Gymnastics",
              country: "USA",
              image:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foverlandiop.com%2Fwp-content%2Fuploads%2F2021%2F08%2F210805175355-biles-medal-0803.jpg&f=1&nofb=1&ipt=2b932078bbec225b637deefe958264d8a797bac40772c3b742a65d0e19e1c002&ipo=images",
            },
            {
              name: "Eliud Kipchoge",
              sport: "Marathon",
              country: "Kenya",
              image:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210808193536-eliud-kipchoge-olympic-marathon-full-169.jpg&f=1&nofb=1&ipt=072b5a22007967e310fdfcb1058a3f2516ae74ce0d256d60e47e2ee51229f3b4&ipo=images",
            },
          ].map((athlete, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={athlete.image}
                alt={athlete.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {athlete.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {athlete.sport}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {athlete.country}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/athletes"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            View All Athletes
          </Link>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "100m Sprint Final",
              date: "July 26, 2024",
              time: "7:00 PM",
              image:
                "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.japantimes.co.jp%2Fwp-content%2Fuploads%2F2016%2F08%2Fsp-track-b-20160816.jpg&f=1&nofb=1&ipt=2047f81296df4d38c222a032fc1a429d68b77eca5d0c45a26e2c4b2c99b67187&ipo=images",
            },
            {
              name: "Men's Marathon",
              date: "August 4, 2024",
              time: "6:00 AM",
              image:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.vox-cdn.com%2Fthumbor%2F1J4Pk4H6cbF8ndyg6EZJX4mmKIE%3D%2F0x677%3A2315x2220%2F1310x873%2Fcdn0.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F50468587%2FGettyImages-592639404.0.jpg&f=1&nofb=1&ipt=87f482709a981a66e67483c08db2d17bd13cf24df0cfe7620d0c47b96dd2a1ab&ipo=images",
            },
            {
              name: "Women's Gymnastics",
              date: "August 6, 2024",
              time: "3:00 PM",
              image:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.nbclosangeles.com%2F2024%2F07%2FGettyImages-2164457019_99b630.jpg%3Fquality%3D85%26strip%3Dall%26crop%3D0px%252C419px%252C5292px%252C2976px%26resize%3D1200%252C675&f=1&nofb=1&ipt=7484f088806428a06874a2bff20e5ed42e196cd4a30684730bac1544996cc6cf&ipo=images",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {event.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{event.date}</p>
                <p className="text-gray-600 dark:text-gray-300">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/events"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            View All Events
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
