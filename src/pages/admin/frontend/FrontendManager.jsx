import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiEdit, FiFileText, FiSettings, FiRefreshCw } from 'react-icons/fi';
import PageEditor from './PageEditor';
import TemplateManager from './TemplateManager';
import SectionManager from './SectionManager';

export default function FrontendManager() {
  const [activeTab, setActiveTab] = useState('pages');
  const [selectedPage, setSelectedPage] = useState(null);

  const tabs = [
    { id: 'pages', label: 'Pages', icon: FiFileText },
    { id: 'templates', label: 'Templates', icon: FiLayout },
    { id: 'sections', label: 'Sections', icon: FiEdit },
    { id: 'settings', label: 'Settings', icon: FiSettings }
  ];

  const clearCache = () => {
    localStorage.removeItem('pageCache');
    // Additional cache clearing logic
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Frontend Manager</h2>
          <button
            onClick={clearCache}
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <FiRefreshCw className="mr-2" />
            Clear Cache
          </button>
        </div>

        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === tab.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'pages' && <PageEditor selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
        {activeTab === 'templates' && <TemplateManager />}
        {activeTab === 'sections' && <SectionManager />}
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-4">GDPR Settings</h3>
              {/* GDPR Settings Form */}
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-4">Custom CSS</h3>
              {/* Custom CSS Editor */}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}