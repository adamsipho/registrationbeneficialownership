import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
      <div className="max-w-3xl mx-auto">
        <p className="mb-4">
          At Beneficial Ownership Registration, we specialize in helping businesses and individuals in South Africa comply with beneficial ownership regulations. Our mission is to simplify the process of registering beneficial ownership information, ensuring transparency and compliance with legal requirements.
        </p>
        <p className="mb-4">
          With a deep understanding of South Africa's corporate laws, we provide a seamless, reliable, and professional service tailored to your needs. Whether you're a small business or a large corporation, we're here to guide you every step of the way.
        </p>
        <p className="text-xl font-semibold text-center mt-8">
          Your compliance, our priority.
        </p>
      </div>
    </motion.div>
  )
}

