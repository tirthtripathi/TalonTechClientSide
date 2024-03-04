import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="container mx-auto text-center">
        {/* Name of Application */}
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Your Application Name</h2>

        {/* Links */}
        <nav className="mb-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="text-blue-600 hover:underline">Link 1</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Link 2</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Link 3</a></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
        </div>

        {/* Closer Statement */}
        <p className="text-sm text-gray-600">©️ 2024 Your EdTech Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;