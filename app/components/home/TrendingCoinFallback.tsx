// components/home/TrendingCoinsFallback.tsx
import React from 'react';

const TrendingCoinsFallback = () => {
    return (
        <div className='trending-coins'>
            <h4>Trending Coins</h4>
            <div className="space-y-3 mt-4">
                {/* Create 6 skeleton rows */}
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border-b border-gray-800">
                        <div className="flex items-center gap-3 skeleton">
                            {/* Skeleton for coin image */}
                            <div className="w-9 h-9 rounded-full bg-gray-700 animate-pulse skeleton" />
                            {/* Skeleton for coin name */}
                            <div className="skeleton h-4 w-24 bg-gray-700 rounded animate-pulse" />
                        </div>
                        <div className=" skeleton flex flex-col items-end gap-2">
                            {/* Skeleton for price change */}
                            <div className="  skeleton h-3 w-16 bg-gray-700 rounded animate-pulse" />
                            {/* Skeleton for price */}
                            <div className="skeleton h-4 w-20 bg-gray-700 rounded animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingCoinsFallback;