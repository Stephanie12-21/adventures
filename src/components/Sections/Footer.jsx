export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="mb-6 sm:mb-0">
          <h3 className="text-2xl font-bold text-teal-500 mb-4">Tripee</h3>
          <p className="text-gray-600">
            Discover the world's wonders with Tripee. Your journey begins here.
          </p>
        </div>
        <div className="mb-6 sm:mb-0">
          <h4 className="font-bold mb-4">About</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6 sm:mb-0">
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Partner With Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6 sm:mb-0">
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        <p>&copy; 2023 Tripee. All rights reserved.</p>
      </div>
    </footer>
  );
}
