import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-16"
      id="services"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We handle the entire process of registering beneficial ownership information with the CIPC, ensuring all details are accurate and compliant.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We provide regular updates to your beneficial ownership information, keeping your records current and in line with any changes in your company structure.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consultation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Our experts offer personalized consultation services to guide you through the complexities of beneficial ownership regulations and requirements.</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

