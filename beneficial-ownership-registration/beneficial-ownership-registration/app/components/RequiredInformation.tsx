import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RequiredInformation() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Required Information</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          To complete your registration, please email the following information to{' '}
          <a href="mailto:smoganedi@gmail.com" className="text-blue-600 hover:underline">
            smoganedi@gmail.com
          </a>
          :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Company Registration Number</li>
          <li>Date of Company Registration</li>
          <li>Owner's ID Number</li>
          <li>ID Date of Issue</li>
          <li>Physical Address of Owner</li>
          <li>Email Address of Owner</li>
          <li>Cellphone Number of Owner</li>
        </ul>
        <p className="mt-4">
          Once we receive this information, we will process your registration and contact you with the next steps.
        </p>
      </CardContent>
    </Card>
  )
}

