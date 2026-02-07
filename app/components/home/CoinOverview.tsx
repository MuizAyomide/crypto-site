import { fetcher } from '@/lib/coingecko.action';
import { cn, formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import CoinOverviewFallback from './CoinOverviewFallback';

export default async function CoinOverview() {

    let coin;
    try {
        const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
            dex_pair_format: 'symbol'
        } catch (error) {
            console.error('Error fetching coin details:', error);
            return <CoinOverviewFallback />
        });


        return (
            <div id='coin-overview'>
                <div className="header">
                    <Image src={coin.image.large} width={56} height={56} alt={coin.name} />
                    <div className='info'>
                        <p>{coin.name}/ {coin.symbol.toUpperCase()}</p>
                        <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
                    </div>
                </div>
            </div>
        )
    }
