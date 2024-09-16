import { useState } from "react";
import { FaCalendar, FaClock, FaSearch } from "react-icons/fa";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      name: "100m Sprint Final",
      time: "7:00 PM",
      date: "July 26, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.japantimes.co.jp%2Fwp-content%2Fuploads%2F2016%2F08%2Fsp-track-b-20160816.jpg&f=1&nofb=1&ipt=2047f81296df4d38c222a032fc1a429d68b77eca5d0c45a26e2c4b2c99b67187&ipo=images",
    },
    {
      name: "Men's Marathon",
      time: "6:00 AM",
      date: "August 4, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.vox-cdn.com%2Fthumbor%2F1J4Pk4H6cbF8ndyg6EZJX4mmKIE%3D%2F0x677%3A2315x2220%2F1310x873%2Fcdn0.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F50468587%2FGettyImages-592639404.0.jpg&f=1&nofb=1&ipt=87f482709a981a66e67483c08db2d17bd13cf24df0cfe7620d0c47b96dd2a1ab&ipo=images",
    },
    {
      name: "Women's 200m Final",
      time: "6:30 PM",
      date: "July 30, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2Fpresto%2F2021%2F08%2F02%2FUSAT%2Fca2bd30d-962e-4c19-ae92-27c92c2adeb1-USATSI_16319755.jpg%3Fcrop%3D4191%2C2357%2Cx0%2Cy58%26width%3D3200%26height%3D1800%26format%3Dpjpg%26auto%3Dwebp&f=1&nofb=1&ipt=cca389fb9dcf5a44e6bd1595fd4bea55465c199adfafe7c438bac7007f4cd19e&ipo=images",
    },
    {
      name: "Men's Pole Vault Final",
      time: "8:00 PM",
      date: "July 27, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.liveabout.com%2Fthmb%2F8-IRksiR5eCTvcjtkskbBu37qbw%3D%2F4831x3616%2Ffilters%3Afill(auto%2C1)%2Fathlete-in-mid-air-doing-pole-vault-184629865-5b2533fa119fa8003612d712.jpg&f=1&nofb=1&ipt=d746c7ecaf4be8e64a0ed2856657cc92785e276aefa2e005d18ebf8b813f4e28&ipo=images",
    },
    {
      name: "Women's Gymnastics All-Around Final",
      time: "1:00 PM",
      date: "July 28, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.nbclosangeles.com%2F2024%2F07%2FGettyImages-2164457019_99b630.jpg%3Fquality%3D85%26strip%3Dall%26crop%3D0px%252C419px%252C5292px%252C2976px%26resize%3D1200%252C675&f=1&nofb=1&ipt=7484f088806428a06874a2bff20e5ed42e196cd4a30684730bac1544996cc6cf&ipo=images",
    },
    {
      name: "Men's 100m Freestyle Final",
      time: "7:00 PM",
      date: "July 29, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Rv0G7PMom8x-NjFQEJH3dwHaE7%26pid%3DApi&f=1&ipt=95e1cd3208203a4119896a7927fcd1413708d03faea10555ec22423a30c857cd&ipo=images",
    },
    {
      name: "Men's Basketball Final",
      time: "5:00 PM",
      date: "August 7, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FQZa3bz7TgAa2Zw5_skSt49AHIEo%3D%2F0x0%3A3000x2116%2F1220x813%2Ffilters%3Afocal(1850x870%3A2330x1350)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F52711987%2F631157028.0.jpg&f=1&nofb=1&ipt=d63a9cde869c98846622b8d91d57c740dcce15fdfb2e0b5b21b71e3f715a4318&ipo=images",
    },
    {
      name: "Women's Heptathlon Final",
      time: "6:00 PM",
      date: "August 1, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fichef.bbci.co.uk%2Fimages%2Fic%2F1920x1080%2Fp09r86y8.jpg&f=1&nofb=1&ipt=dfba836791d4c6339821568be6235494021f881951c57b02a03fb2ecf7e659d0&ipo=images",
    },
    {
      name: "Men's Long Jump Final",
      time: "7:00 PM",
      date: "July 30, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oregonlive.com%2Fresizer%2FvqmOMbYsZdvULcjMJpN5-J6Q8_o%3D%2F1280x0%2Fsmart%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fadvancelocal%2FD7JGKXMWJRC3BMQ4BNXJ5HIQDE.JPG&f=1&nofb=1&ipt=c4b2bda5e432d149ae6f1af14d18e3350e669ab562cc29db8ff6f492911622b2&ipo=images",
    },
    {
      name: "Women's Triple Jump Final",
      time: "7:30 PM",
      date: "August 3, 2024",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FMPXT3M%2Fwomens-triple-jump-final-commonwealth-games-2018-MPXT3M.jpg&f=1&nofb=1&ipt=a9d4078ce83a8bf698fd0e54cc36180ff386f08d82ae16d2274ac99532e47cbd&ipo=images",
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
        Events Schedule
      </h2>

      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full p-3 pl-12 border border-gray-300 rounded-full bg-white text-gray-900 dark:bg-gray-800 dark:text-light dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={event.image}
              alt={`Image of ${event.name}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                {event.name}
              </h3>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                <FaCalendar className="mr-2 text-secondary" /> {event.date}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <FaClock className="mr-2 text-secondary" /> {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
