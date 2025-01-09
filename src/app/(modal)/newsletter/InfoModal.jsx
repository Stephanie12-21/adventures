import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

export function InfoModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto flex items-center justify-center"
              >
                <InfoIcon className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Déjà abonné
              </h2>
              <p className="mt-2 text-gray-600">
                Vous êtes déjà abonné à la newsletter. Merci pour votre fidélité
                !
              </p>
              <Button
                onClick={onClose}
                className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Fermer
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
