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
          <h2 className="text-3xl font-bold mb-6 text-center">
            Paris 2024 Summer Olympics
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <FaCalendarAlt className="text-2xl text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Date</h3>
                <p>July 26 - August 11, 2024</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>Paris, France</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMedal className="text-2xl text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Events</h3>
                <p>329 events in 32 sports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Athletes Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
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
                <h3 className="text-xl font-semibold mb-2">{athlete.name}</h3>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
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
              name: "Women's 200m Final",
              date: "July 30, 2024",
              time: "6:30 PM",
              image:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2Fpresto%2F2021%2F08%2F02%2FUSAT%2Fca2bd30d-962e-4c19-ae92-27c92c2adeb1-USATSI_16319755.jpg%3Fcrop%3D4191%2C2357%2Cx0%2Cy58%26width%3D3200%26height%3D1800%26format%3Dpjpg%26auto%3Dwebp&f=1&nofb=1&ipt=cca389fb9dcf5a44e6bd1595fd4bea55465c199adfafe7c438bac7007f4cd19e&ipo=images",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
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
            View Full Schedule
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
