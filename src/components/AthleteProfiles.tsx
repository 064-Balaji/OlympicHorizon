import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const AthleteProfiles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const athletes = [
    {
      name: "Armand Duplantis",
      sport: "Pole Vault",
      country: "Sweden",
      medals: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F62%2F04%2Ff7%2F6204f703de3b3acc10daca4b54b96968.jpg&f=1&nofb=1&ipt=b1388bd437c4626f8e2a184bd9c2372d1e5c312cd8dad930a8bc65439a45addc&ipo=images",
    },
    {
      name: "Simone Biles",
      sport: "Gymnastics",
      country: "USA",
      medals: 7,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foverlandiop.com%2Fwp-content%2Fuploads%2F2021%2F08%2F210805175355-biles-medal-0803.jpg&f=1&nofb=1&ipt=2b932078bbec225b637deefe958264d8a797bac40772c3b742a65d0e19e1c002&ipo=images",
    },
    {
      name: "Eliud Kipchoge",
      sport: "Marathon",
      country: "Kenya",
      medals: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210808193536-eliud-kipchoge-olympic-marathon-full-169.jpg&f=1&nofb=1&ipt=072b5a22007967e310fdfcb1058a3f2516ae74ce0d256d60e47e2ee51229f3b4&ipo=images",
    },
    {
      name: "Noah Lyles",
      sport: "100m Sprint",
      country: "USA",
      medals: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.si.com%2F.image%2Ft_share%2FMTgyOTEzMDkwMDk2OTk3NzI4%2Fnoah-lyes-200-olympics-inline.jpg&f=1&nofb=1&ipt=b0b926e61d56f0323019b27939c4e4e74f2adfe1e07b2045341a636e3dccfdc5&ipo=images",
    },
    {
      name: "Katie Ledecky",
      sport: "Swimming",
      country: "USA",
      medals: 10,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.businessinsider.in%2Fphoto%2F75145795%2Fkatie-ledecky-has-gotten-creative-with-her-pre-olympic-workouts-while-in-lockdown-incorporating-fins-flippers-and-snorkels-into-her-routine.jpg&f=1&nofb=1&ipt=d1046f6532b13a050a4dcfcfc0a9d14c804f07b7b630048f3c150a5374169143&ipo=images",
    },
    {
      name: "Shelly-Ann Fraser-Pryce",
      sport: "100m Sprint",
      country: "Jamaica",
      medals: 9,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.legoldberg.com%2Fwp-content%2Fuploads%2F2024%2F09%2Fshellyfinale_XL.jpg&f=1&nofb=1&ipt=081cbffc5de7905aa915b4a652a6b11dcc86587002f049b975ae29ce6ad78a06&ipo=images",
    },
    {
      name: "Caeleb Dressel",
      sport: "Swimming",
      country: "USA",
      medals: 7,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2021%2F07%2FCaeleb-Dressel-2.jpg%3Fquality%3D90%26strip%3Dall&f=1&nofb=1&ipt=9171c014c3995b50fe9aa6eb12c76059ff3668b4bc53c5adfeb5035c1ed467c7&ipo=images",
    },
    {
      name: "Katarina Johnson-Thompson",
      sport: "Heptathlon",
      country: "UK",
      medals: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fe0.365dm.com%2F21%2F02%2F1600x900%2Fskysports-pa-katarina-johnson-thompson_5282009.jpg&f=1&nofb=1&ipt=d9c156d9fceaaed0e647c60ffc1fdbef836c3f896ad9c0b0c4190aa9d31db145&ipo=images",
    },
    {
      name: "Joshua Cheptegei",
      sport: "Long Distance",
      country: "Uganda",
      medals: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finsightpostug.com%2Fwp-content%2Fuploads%2F2023%2F08%2FJoshua-Cheptegei-wins-third-successive-10000m-gold.jpg&f=1&nofb=1&ipt=f7ecd7c88e8a1f0fb97f342bd1837414a6f8003cd613b7c38179572cf0c5ebd3&ipo=images",
    },
    {
      name: "Yulimar Rojas",
      sport: "Triple Jump",
      country: "Venezuela",
      medals: 4,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lapatilla.com%2Fwp-content%2Fuploads%2F2019%2F08%2FRojas.jpg&f=1&nofb=1&ipt=aa470039ed8c9886b89e7c0a6f305ed64e0b62b058db53702e24ec21a54fd9ff&ipo=images",
    },
  ];

  const filteredAthletes = athletes.filter(
    (athlete) =>
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-primary dark:text-light">
        Athlete Profiles
      </h2>

      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search athletes..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark dark:text-light"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAthletes.map((athlete, index) => (
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
              <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-light">
                {athlete.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {athlete.sport}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {athlete.country}
              </p>
              <p className="mt-2 text-secondary font-semibold">
                Medals: {athlete.medals}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AthleteProfiles;
