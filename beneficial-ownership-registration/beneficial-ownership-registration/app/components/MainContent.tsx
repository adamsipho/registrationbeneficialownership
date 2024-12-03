'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AboutUs from './AboutUs'
import Services from './Services'
import Pricing from './Pricing'
import RequiredInformation from './RequiredInformation'

export default function MainContent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">What is Beneficial Ownership Registration?</h2>
          <p className="mb-4">
            Beneficial ownership registration is the process of identifying and recording the natural persons who ultimately own or control a legal entity or arrangement, such as a company, trust, or foundation.
          </p>
          <p className="mb-4">
            In South Africa, the Companies and Intellectual Property Commission (CIPC) requires companies to maintain a register of their beneficial owners and file this information with the CIPC.
          </p>
          <p className="mb-4">
            Beneficial Ownership Registration offers comprehensive services to help companies comply with these requirements quickly, accurately, and efficiently.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
            <CardDescription>We offer the following services related to beneficial ownership:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Preparation and filing of beneficial ownership information</li>
              <li>Regular updating of beneficial ownership records</li>
              <li>Assistance with compliance and record-keeping</li>
              <li>Expert consultation on beneficial ownership requirements</li>
              <li>Due diligence services for verifying beneficial ownership</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <div id="about-us">
        <AboutUs />
      </div>
      <Services />
      <div id="pricing">
        <Pricing />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">How to Submit Required Information</h2>
        <RequiredInformation />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {/* FAQ items */}
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Beneficial Ownership?</AccordionTrigger>
            <AccordionContent>
              Beneficial ownership refers to the natural person(s) who ultimately owns or controls a legal entity or arrangement. This includes direct or indirect ownership through shares, voting rights, or other means of control.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is the purpose of Beneficial Ownership?</AccordionTrigger>
            <AccordionContent>
              The purpose is to increase transparency in corporate structures, prevent financial crimes such as money laundering and tax evasion, and ensure that the true owners of companies can be identified.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a limit to the number of beneficial owners?</AccordionTrigger>
            <AccordionContent>
              No, there is no limit to the number of beneficial owners a company can have. All individuals who meet the criteria for beneficial ownership must be registered.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What is the minimum equity threshold before which a person can be considered a beneficial owner?</AccordionTrigger>
            <AccordionContent>
              In South Africa, the threshold is typically 5% of the shares or voting rights. However, this can vary depending on the specific circumstances and regulations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Will the public have access to CIPC's Beneficial Information?</AccordionTrigger>
            <AccordionContent>
              Currently, the beneficial ownership information filed with CIPC is not publicly accessible. However, this may change in the future as regulations evolve.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What supporting documents are required to file a Beneficial Ownership submission?</AccordionTrigger>
            <AccordionContent>
              The required documents typically include a signed mandate, Securities Register, certified IDs, and a Disclosure Diagram. These documents help verify the ownership structure and identities of the beneficial owners.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Securities Register vs Beneficial Ownership Register</AccordionTrigger>
            <AccordionContent>
              A securities register is a list of all the current shareholders of a company, including individuals, trusts, and other companies. The Beneficial Ownership register, on the other hand, is a list of only the individuals who control or own more than 5% of the company.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>How is control defined for Beneficial Ownership?</AccordionTrigger>
            <AccordionContent>
              Control can be defined through various means, including direct or indirect ownership of shares, voting rights, the right to appoint or remove directors, or other forms of significant influence over the company's decisions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>What is meant by an affected company in terms of Beneficial Ownership?</AccordionTrigger>
            <AccordionContent>
              An affected company is one that is required to comply with beneficial ownership regulations. This typically includes most private companies, but the exact definition can vary based on current regulations and the company's characteristics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Can you hold shares on behalf of other people?</AccordionTrigger>
            <AccordionContent>
              Yes, you can hold shares as a nominee or trustee for others. However, the beneficial ownership information must reflect the natural persons who ultimately benefit from or control those shares.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Do NPCs need to submit Beneficial Ownership information?</AccordionTrigger>
            <AccordionContent>
              Yes, Non-Profit Companies (NPCs) are required to submit beneficial ownership information even though they don't have shareholders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>When must you file Beneficial Ownership?</AccordionTrigger>
            <AccordionContent>
              Beneficial ownership information must be filed when a company is incorporated and updated whenever there are changes. Companies are also required to confirm their beneficial ownership information annually.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
        id="contact-us"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Ensure Compliance?</h2>
        <p className="mb-8">Submit your required information today, and we'll contact you with the next steps to complete your beneficial ownership registration.</p>
      </motion.div>
    </div>
  )
}

