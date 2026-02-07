import Image from 'next/image'
import React, { Suspense } from 'react'
import Link from 'next/link';
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import CoinOverview from './components/home/CoinOverview';
import TrendingCoins from './components/home/TrendingCoins';

const page = async () => {


  return (
    <main className='main-container'>
      <section className='home-grid'>

        <Suspense fallback={<div>Loading Overview...</div>}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<div>Loading Trending...</div>}>
          <TrendingCoins />
        </Suspense>

        <p>Coin Overview</p>


      </section>

      <section className='w-full mt-7 space-y-4 '>
        <p>Categories</p>
      </section>
    </main>
  )
}

export default page