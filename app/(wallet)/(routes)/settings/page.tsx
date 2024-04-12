import Heading from '@/components/ui/heading'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function SettingsPage() {
  return (
    <div>
        <Heading level={2}>Settings</Heading>

        <div className="flex flex-col pt-8 gap-6">
            <h6 className='text-white/75'>General</h6>
            <div className='flex justify-between p-5 border-b-2 duration-100 hover:bg-card/30'>
                <p>My Profile</p>
                <ChevronRight />
            </div>
            <div className='flex justify-between p-5 border-b-2 duration-100 hover:bg-card/30'>
                <p>Contact Us</p>
                <ChevronRight />
            </div>
            <div className='flex justify-between p-5 border-b-2 duration-100 hover:bg-card/30'>
                <p>Change Password</p>
                <ChevronRight />
            </div>
            <div className='flex justify-between p-5 border-b-2 duration-100 hover:bg-card/30'>
                <p>Privacy Policy</p>
                <ChevronRight />
            </div>
        </div>
    </div>
  )
}
