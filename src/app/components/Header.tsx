const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a className="text-2xl font-bold text-gray-800">MyLogo</a>
          </div>
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">Item 1</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Item 2</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Item 3</a>
          </nav>
          <div className="lg:hidden">
            <button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Button
            </button>
          </div>
        </div>
        <div className="lg:hidden mt-2 flex flex-col space-y-2">
          <a href="#" className="text-gray-700 hover:text-blue-500">Item 1</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Item 2</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Item 3</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
