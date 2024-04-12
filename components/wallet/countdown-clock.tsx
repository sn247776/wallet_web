"use client";

import React, { useState, useEffect } from 'react';

export default function CountdownClock() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft]:any = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <p className='text-white/75'>Time Remaining to redeem your tickets:</p>

      <div className='flex my-8 gap-5'>
        <div className='text-center'><h3 className='text-primary text-4xl font-semibold'>{timeLeft.hours.toString().padStart(2, '0')}</h3><p className='text-white/75 text-xs'>Hours</p></div>
        <div className='text-primary text-4xl font-semibold'>:</div>
        <div className='text-center'><h3 className='text-primary text-4xl font-semibold'>{timeLeft.minutes.toString().padStart(2, '0')}</h3><p className='text-white/75 text-xs'>Min</p></div>
        <div className='text-primary text-4xl font-semibold'>:</div>
        <div className='text-center'><h3 className='text-primary text-4xl font-semibold'>{timeLeft.seconds.toString().padStart(2, '0')}</h3><p className='text-white/75 text-xs'>Sec</p></div>
      </div>
    </div>
  );
}
