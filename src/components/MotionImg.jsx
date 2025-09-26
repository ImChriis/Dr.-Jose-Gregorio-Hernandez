// src/components/MotionImage.jsx
import { motion } from 'framer-motion';
import main from '../assets/main.jpg';

export default function MotionImage() {
  return (
    <motion.img
      src={main.src}
      alt="Imagen no encontrada"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 2.5 }}
      className="w-[50%] h-full object-cover"
    />
  );
}