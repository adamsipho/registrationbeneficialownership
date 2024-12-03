import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Expert Beneficial Ownership Registration Services</h1>
        <p className="text-xl mb-8">Ensure compliance with CIPC regulations efficiently and accurately</p>
        <Link href="#about">
          <Button className="bg-white text-blue-600 hover:bg-gray-100">Learn More</Button>
        </Link>
      </div>
    </div>
  )
}

