import { Link } from "react-router-dom";
import "./index.css";

const HomePage = () => {
  const kfcLogo =
    "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png";
  const mcdonaldsLogo =
    "https://images.crowdspring.com/blog/wp-content/uploads/2023/12/09194155/mcdonalds-logo.png";
  const dominosLogo =
    "https://1000logos.net/wp-content/uploads/2023/04/Dominos-logo-500x281.png";
  const outlets = [
    { name: "kfc", logo: kfcLogo, alt: "KFC Logo" },
    { name: "mcdonalds", logo: mcdonaldsLogo, alt: "McDonalds Logo" },
    { name: "dominos", logo: dominosLogo, alt: "Dominos Logo" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10 mb-20">Menus</h1>
      <div className="flex justify-center space-x-8">
        {outlets.map((outlet) => (
          <Link key={outlet.name} to={`/outlet/${outlet.name}`}>
            <div className="p-20 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={outlet.logo} alt={outlet.alt} className="h-24 w-auto" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;


