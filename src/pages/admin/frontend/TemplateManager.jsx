import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function TemplateManager() {
  const [templates, setTemplates] = useState([
    {
      id: 'default',
      name: 'Default Template',
      description: 'Default system template with standard layout',
      sections: ['header', 'hero', 'features', 'footer']
    },
    {
      id: 'minimal',
      name: 'Minimal Template',
      description: 'Clean and minimal design template',
      sections: ['header', 'content', 'footer']
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Templates</h3>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <FiPlus className="mr-2" />
          Add Template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <FiLayout className="text-primary-500 text-xl mr-2" />
                <h4 className="font-medium">{template.name}</h4>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit2 />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{template.description}</p>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-500">Sections:</div>
              <div className="flex flex-wrap gap-2">
                {template.sections.map((section) => (
                  <span
                    key={section}
                    className="px-2 py-1 bg-gray-100 rounded-md text-sm"
                  >
                    {section}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}