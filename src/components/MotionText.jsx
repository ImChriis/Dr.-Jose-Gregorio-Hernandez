import { motion } from 'framer-motion';

export default function MotionText() {
    return (
    <div className="text-center">
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-white text-7xl font-bold"
    >
      Historia de 
    </motion.p>
          <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-white text-7xl font-bold"
      >
        José Gregorio Hernández
    </motion.p>

      <motion.p       
       initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="text-white text-4xl font-semibold mt-4">
        La vida y hombre de un hombre de ciencia y fé
      </motion.p>
      
    </div>
    )
}