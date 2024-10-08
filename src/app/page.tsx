import Link from "next/link";
import { Bell, Calendar, FileText, Info, Settings, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <aside className='w-64 bg-white shadow-md'>
        <div className='p-4'>
          <h2 className='text-2xl font-bold text-primary'>HOA Portal</h2>
        </div>
        <nav className='mt-6'>
          {[
            { name: "Home", icon: Bell, href: "/" },
            { name: "Notices", icon: Bell, href: "/notices" },
            { name: "Forms", icon: FileText, href: "/forms" },
            { name: "Utilities", icon: Settings, href: "/utilities" },
            { name: "Events", icon: Calendar, href: "/events" },
            { name: "Maintenance", icon: Bell, href: "/maintenance" },
            { name: "Vendors", icon: Users, href: "/vendors" },
            { name: "Committees", icon: Users, href: "/committees" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200'
            >
              <item.icon className='mr-3 h-5 w-5' />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 overflow-y-auto p-8'>
        <h1 className='mb-6 text-3xl font-bold'>Welcome, Tenant!</h1>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Recent Notices */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Notices</CardTitle>
              <CardDescription>
                Stay informed about important updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='list-inside list-disc space-y-2'>
                <li>Annual HOA meeting scheduled for July 15th</li>
                <li>Pool maintenance on June 1st - 3rd</li>
                <li>New recycling guidelines effective next month</li>
              </ul>
              <Button className='mt-4' variant='outline'>
                View All Notices
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Don&apos;t miss out on community activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='list-inside list-disc space-y-2'>
                <li>Community BBQ - June 10th</li>
                <li>Neighborhood Watch Meeting - June 20th</li>
                <li>Summer Pool Party - July 4th</li>
              </ul>
              <Button className='mt-4' variant='outline'>
                View Full Calendar
              </Button>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>
                Easily access important features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-2'>
                <Button variant='outline' className='justify-start'>
                  <FileText className='mr-2 h-4 w-4' />
                  Submit a Form
                </Button>
                <Button variant='outline' className='justify-start'>
                  <Bell className='mr-2 h-4 w-4' />
                  Request Maintenance
                </Button>
                <Button variant='outline' className='justify-start'>
                  <Info className='mr-2 h-4 w-4' />
                  View HOA Documents
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className='mt-8'>
          <h2 className='mb-4 text-2xl font-semibold'>Community Information</h2>
          <p className='text-gray-600'>
            Welcome to our HOA portal. Here you can find important information
            about our community, access necessary forms, view upcoming events,
            and stay updated on maintenance schedules. If you have any questions
            or need assistance, please don&apos;t hesitate to contact the HOA
            board.
          </p>
        </div>
      </main>
    </div>
  );
}
