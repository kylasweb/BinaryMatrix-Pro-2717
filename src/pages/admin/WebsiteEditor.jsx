import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiSave, FiEye } from 'react-icons/fi';

export default function WebsiteEditor() {
  const [sections, setSections] = useState(
    JSON.parse(localStorage.getItem('websiteSections') || '[]')
  );
  const [activeSection, setActiveSection] = useState(null);

  const defaultSections = [
    {
      id: 'hero',
      title: 'Hero Section',
      content: {
        heading: 'Welcome to Our Network',
        subheading: 'Join the future of network marketing',
        cta: 'Get Started'
      }
    },
    {
      id: 'features',
      title: 'Features Section',
      content: {
        heading: 'Our Features',
        items: [
          { title: 'Binary System', description: 'Powerful binary compensation plan' },
          { title: 'Rewards', description: 'Earn rewards for your achievements' },
          { title: 'Community', description: 'Join our growing community' }
        ]
      }
    }
  ];

  const handleSave = () => {
    localStorage.setItem('websiteSections', JSON.stringify(sections));
  };

  const handlePreview = () => {
    // In a real implementation, this would show a preview
    console.log('Preview website');
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Website Editor</h2>
          <div className="flex space-x-4">
            <button
              onClick={handlePreview}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <FiEye className="mr-2" />
              Preview
            </button>
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              <FiSave className="mr-2" />
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3 border-r pr-6">
            <h3 className="text-lg font-medium mb-4">Sections</h3>
            <div className="space-y-2">
              {defaultSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeSection?.id === section.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <FiLayout className="inline-block mr-2" />
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Editor */}
          <div className="col-span-9">
            {activeSection ? (
              <div className="space-y-6">
                <h3 className="text-xl font-medium">{activeSection.title}</h3>
                <div className="space-y-4">
                  {Object.entries(activeSection.content).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      {Array.isArray(value) ? (
                        <div className="space-y-2">
                          {value.map((item, index) => (
                            <div key={index} className="space-y-2">
                              <input
                                type="text"
                                value={item.title}
                                onChange={(e) => {
                                  // Update logic here
                                }}
                                className="w-full px-3 py-2 border rounded-lg"
                              />
                              <textarea
                                value={item.description}
                                onChange={(e) => {
                                  // Update logic here
                                }}
                                className="w-full px-3 py-2 border rounded-lg"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => {
                            // Update logic here
                          }}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Select a section to edit
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}