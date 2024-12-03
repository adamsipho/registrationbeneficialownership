import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Beneficial Ownership Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-4xl font-bold">R399</p>
            <p className="text-xl mt-2">Base price for registration</p>
            <p className="mt-4">R99 for each additional owner</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

