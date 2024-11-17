export default function Card({ icon, title }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 text-blue-600">{icon}</div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
