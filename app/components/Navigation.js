import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            Happy Birthday! 🎉
          </div>
          <div className="flex space-x-4">
            <Link
              href="/env"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Envelope
            </Link>
            <Link
              href="/proposal"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Proposal
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-lg transition-colors"
            >
              Love Story 💕
            </Link>
            <Link
              href="/yes"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Yes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
