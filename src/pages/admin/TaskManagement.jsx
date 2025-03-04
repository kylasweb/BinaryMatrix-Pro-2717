import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckSquare, FiPlus, FiTrash2, FiEdit2 } from 'react-icons/fi';

export default function TaskManagement() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks') || '[]'));
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    reward: 0,
    deadline: '',
    requiredRank: 'BRONZE',
    type: 'RECRUITMENT' // RECRUITMENT, SALES, TRAINING
  });

  const handleAddTask = () => {
    const updatedTasks = [...tasks, { ...newTask, id: Date.now(), status: 'ACTIVE' }];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setNewTask({
      title: '',
      description: '',
      reward: 0,
      deadline: '',
      requiredRank: 'BRONZE',
      type: 'RECRUITMENT'
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Task Management</h2>
          <button
            onClick={handleAddTask}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <FiPlus className="mr-2" />
            Add Task
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <FiCheckSquare className="text-primary-500 text-2xl" />
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-2">{task.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{task.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Reward:</span>
                  <span className="font-medium">${task.reward}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Deadline:</span>
                  <span className="font-medium">
                    {new Date(task.deadline).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Required Rank:</span>
                  <span className="font-medium">{task.requiredRank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Type:</span>
                  <span className="font-medium">{task.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}