import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';

export default function PageEditor({ selectedPage, setSelectedPage }) {
  const [pages] = useState([
    { id: 'home', title: 'Home Page', type: 'landing' },
    { id: 'about', title: 'About Us', type: 'content' },
    { id: 'features', title: 'Features', type: 'content' },
    { id: 'plans', title: 'Plans & Pricing', type: 'dynamic' },
    { id: 'blog', title: 'Blog', type: 'blog' },
    { id: 'contact', title: 'Contact Us', type: 'form' },
    { id: 'faq', title: 'FAQ', type: 'faq' },
    { id: 'privacy', title: 'Privacy Policy', type: 'legal' },
    { id: 'terms', title: 'Terms of Service', type: 'legal' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Pages</h3>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <FiPlus className="mr-2" />
          Add Page
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <motion.div
            key={page.id}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">{page.title}</h4>
              <div className="flex space-x-2">
                <button className="text-gray-600 hover:text-gray-800">
                  <FiEye />
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit2 />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 />
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-500 capitalize">Type: {page.type}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}