import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './LandingPage';
import ClothingSuggestion from './ClothingSuggestion';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5
    }
  }
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-grow bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
          >
            <div className="backdrop-blur-sm bg-white/10 min-h-full">
              <Routes>
                <Route
                  path="/"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="page-container"
                    >
                      <LandingPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/suggest"
                  element={
                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      className="page-container"
                    >
                      <ClothingSuggestion />
                    </motion.div>
                  }
                />
              </Routes>
            </div>
          </motion.main>
        </AnimatePresence>

        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full bg-white/10 backdrop-blur-md shadow-lg"
        >

        </motion.div>
      </div>
    </Router>
  );
};

export default App;
