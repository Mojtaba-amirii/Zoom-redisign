import { FaArrowRight } from "react-icons/fa";

export default function Card({ icon, title }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="shrink-0 text-blue-600">{icon}</div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600">
          Discover how Zoom empowers {title.toLowerCase()} with innovative
          solutions tailored to your unique needs.
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
          Learn more
          <FaArrowRight className="h-5 w-5 inline-block ml-1" />
        </a>
      </div>
    </div>
  );
}
