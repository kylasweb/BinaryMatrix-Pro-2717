import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  const getToastStyles = () => {
    const baseStyles = "fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg";
    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-500 text-white`;
      case 'error':
        return `${baseStyles} bg-red-500 text-white`;
      default:
        return `${baseStyles} bg-blue-500 text-white`;
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={getToastStyles()}
    >
      {message}
    </motion.div>
  );
};

export const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed bottom-0 right-0 p-4 z-50">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export const useToast = () => {
  const [, setToasts] = useState([]);

  const toast = (message, type = 'info') => {
    setToasts((prev) => [...prev, { message, type }]);
  };

  return toast;
};