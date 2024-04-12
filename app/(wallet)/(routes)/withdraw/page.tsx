import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import CountdownClock from '@/components/wallet/countdown-clock'
import React from 'react'

export default function Withdraw() {
  return (
    <div>
              <Heading level={2}>Withdraw</Heading>

<div className="grid grid-cols-2 pt-8 gap-6">

    <div className='flex gap-3 flex-col'>
        <div className='flex justify-between my-8'>
            <p>Current Available Balance:</p>
            <p className='text-primary font-semibold'>1000.00 USDT</p>
        </div>

        <div className='flex justify-between p-5 bg-card rounded-lg text-white/75'>
            <p>Wallet Type:</p> <p className='text-primary font-semibold'>TRC20</p>
        </div>
        <div className='flex justify-between p-5 bg-card rounded-lg text-white/75'>
            <p>Wallet Address:</p> <p className='text-primary font-semibold'>ajsknskjTbjfkjisdsj</p>
        </div>
        <div className='flex justify-between p-5 bg-card rounded-lg text-white/75'>
            <p>Fund Password:</p> <p className='text-primary font-semibold'>*************</p>
        </div>
        <div className='flex justify-between p-5 bg-card rounded-lg text-white/75'>
            <p>Amount submitted:</p> <p className='text-primary font-semibold'>1000.00 USDT</p>
        </div>
        <div className='flex justify-between p-5 bg-card rounded-lg text-white/75'>
            <p>Available number of Tickets:</p> <p className='text-primary font-semibold'>10</p>
        </div>

        <div className='text-white/75 italic text-sm text-right my-8'>Per Ticket: 100 USDT</div>

        <div className='flex justify-around'>
            <Button size={'xl'} variant={'outline'} >Cancel</Button>
            <Button size={'xl'} >Withdraw</Button>
        </div>

    </div>
    <div>
       
        <div className='flex items-center justify-center'><CountdownClock/></div>
        <div className='flex flex-col gap-3 mt-8'>
       <h6 className='text-primary font-semibold text-xl'> Withdrawal Instructions:</h6>

<p>1. Please confirm whether Wallet address: is correct. If the information is incorrectly filled in, we will not be responsible for any loss of your insurance.</p>

<p>2. The withdrawal amount will be processed within <b>24 hours</b>.</p>
<p>
3. You can only apply for withdrawals only <b>once</b> per day.</p>
        </div>

    </div>
</div>
    </div>
  )
}
