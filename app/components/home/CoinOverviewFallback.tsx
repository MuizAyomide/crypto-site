// components/home/CoinOverviewFallback.tsx
import React from 'react';

const CoinOverviewFallback = () => {
    return (
        <div id='coin-overview-fallback'>
            <div className="header pt-2">
                {/* Skeleton for image */}
                <div className="w-14 h-14 rounded-full bg-gray-700 animate-pulse skeleton" />
                <div className='info space-y-2 skeleton'>
                    {/* Skeleton for name/symbol */}
                    <div className="h-4 w-32 bg-gray-700 rounded animate-pulse skeleton" />
                    {/* Skeleton for price */}
                    <div className="h-8 w-40 bg-gray-700 rounded animate-pulse skeleton" />
                    {/* Skeleton for price change */}
                    <div className="h-3 w-24 bg-gray-700 rounded animate-pulse skeleton" />
                </div>
            </div>
        </div>
    );
};

export default CoinOverviewFallback;