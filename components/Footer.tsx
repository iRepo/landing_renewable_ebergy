import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-4">
          Sustainable Energy Solutions
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Creating a cleaner, greener future through innovative energy
          solutions.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sustainable Energy Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
