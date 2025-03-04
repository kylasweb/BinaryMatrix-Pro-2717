import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiPlus, FiEdit2, FiTrash2, FiMove } from 'react-icons/fi';

export default function SectionManager() {
  const [sections, setSections] = useState([
    {
      id: 'hero',
      name: 'Hero Section',
      type: 'hero',
      status: 'active',
      lastModified: '2024-03-15'
    },
    {
      id: 'features',
      name: 'Features Grid',
      type: 'grid',
      status: 'active',
      lastModified: '2024-03-15'
    },
    {
      id: 'testimonials',
      name: 'Testimonials Slider',
      type: 'slider',
      status: 'active',
      lastModified: '2024-03-15'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Section Library</h3>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <FiPlus className="mr-2" />
          Add Section
        </button>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            whileHover={{ scale: 1.01 }}
            className="border rounded-lg p-4 bg-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="cursor-move text-gray-400 hover:text-gray-600">
                  <FiMove />
                </div>
                <div>
                  <h4 className="font-medium">{section.name}</h4>
                  <p className="text-sm text-gray-500">Type: {section.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  Modified: {section.lastModified}
                </span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}