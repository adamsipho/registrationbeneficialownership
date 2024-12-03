'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">Beneficial Ownership Registration</span>
        </Link>
        <nav className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}>
          <Link href="/" className="block md:inline-block py-2 md:py-0 text-gray-600 hover:text-gray-800">Home</Link>
          <Link href="/#about-us" className="block md:inline-block py-2 md:py-0 text-gray-600 hover:text-gray-800">About Us</Link>
          <Link href="/#services" className="block md:inline-block py-2 md:py-0 text-gray-600 hover:text-gray-800">Services</Link>
          <Link href="/#contact-us" className="block md:inline-block py-2 md:py-0 text-gray-600 hover:text-gray-800">Contact Us</Link>
        </nav>
        <div className="flex items-center">
          <Button className="bg-blue-600 text-white" onClick={() => window.location.href = '#pricing'}>Register</Button>
          <button className="md:hidden ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

