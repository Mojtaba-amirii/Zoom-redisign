import {
  FaGraduationCap,
  FaChartLine,
  FaLandmark,
  FaHospital,
  FaIndustry,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import Card from "./components/Card";

const industryCards = [
  { icon: <FaGraduationCap className="h-8 w-8" />, title: "Education" },
  { icon: <FaChartLine className="h-8 w-8" />, title: "Financial Services" },
  { icon: <FaLandmark className="h-8 w-8" />, title: "Government" },
  { icon: <FaHospital className="h-8 w-8" />, title: "Healthcare" },
  { icon: <FaIndustry className="h-8 w-8" />, title: "Manufacturing" },
  { icon: <FaShoppingCart className="h-8 w-8" />, title: "Retail" },
];

export default function App() {
  return (
    <main className="flex flex-col items-center space-y-16 md:space-y-36 py-10 md:py-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              One platform to <span className="text-blue-600">connect</span> and{" "}
              <span className="text-blue-600">innovate</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Bring teams together, reimagine workplaces, engage new audiences,
              and delight your customers - all on the Zoom platform you know and
              love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium text-center transition duration-150 ease-in-out"
              >
                Plans & Pricing
              </a>
              <a
                href="#signup"
                className="text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-full px-8 py-3 text-lg font-medium text-center transition duration-150 ease-in-out"
              >
                Sign Up, It&apos;s Free
              </a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/woman-desk.jpg"
              alt="Woman at desk using Zoom"
              className="w-full h-auto object-cover transition duration-500 transform hover:scale-125"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="flex justify-center">
              <img
                src="/zoom_wheel_big.png"
                alt="Zoom features wheel"
                className="max-w-full h-auto"
              />
            </div>
            <div className="space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold">
                Make work, less work
              </h2>
              <p className="text-xl opacity-90">
                Securely connect and collaborate so you can work better
                together. Simple to manage and delightful to use, Zoom powers
                the modern workforce.
              </p>
              <a
                href="#possibilities"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 rounded-full px-6 py-3 text-lg font-medium transition duration-150 ease-in-out"
              >
                Discover the Possibilities
                <FaArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powering organizations across industries and geographies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zoom helps consolidate communications, connect people, and
            collaborate better together in the boardroom, classroom, operating
            room, and everywhere in between.
          </p>
          <a
            href="#solutions"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium transition duration-150 ease-in-out"
          >
            Explore Industry Solutions
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryCards.map((card, index) => (
            <Card key={index} icon={card.icon} title={card.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
