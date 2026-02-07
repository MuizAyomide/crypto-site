import Image from 'next/image'
import React from 'react'
import DataTable from './components/DataTable'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { fetcher } from '@/lib/coingecko.action';

// Define the type for TrendingCoin
interface TrendingCoin {
  item: {
    id: string;
    name: string;
    large: string;
    price: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      }
    }
  }
}

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      return (
        <Link href={`/coin/${item?.id}`} className="flex items-center gap-3">
          <Image src={item?.large} alt={item?.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      )
    }
  },
  {
    header: '24h Change',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
      const changeValue = item.data.price_change_percentage_24h.usd.toFixed(2);

      return (
        <div className={cn('price-change flex items-center gap-1', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
          {isTrendingUp ? (
            <TrendingUp width={16} height={16} />
          ) : (
            <TrendingDown width={16} height={16} />
          )}
          <p>{changeValue}%</p>
        </div>
      )
    }
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) => `$${coin.item.price}`
  }
]

// Dummy data for trending coins
const dummyData: TrendingCoin[] = [
  {
    item: {
      id: 'bitcoin',
      name: 'Bitcoin',
      large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      price: '89,123.45',
      data: {
        price_change_percentage_24h: {
          usd: 2.34
        }
      }
    }
  },
  {
    item: {
      id: 'ethereum',
      name: 'Ethereum',
      large: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      price: '4,567.89',
      data: {
        price_change_percentage_24h: {
          usd: -1.23
        }
      }
    }
  },
  {
    item: {
      id: 'solana',
      name: 'Solana',
      large: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
      price: '123.45',
      data: {
        price_change_percentage_24h: {
          usd: 5.67
        }
      }
    }
  }
]

const page = async () => {
  const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
    dex_pair_format: 'symbol'
  });




  return (
    <main className='main-container'>
      <section className='home-grid'>
        <div id='coin-overview'>
          <div className="header">
            <Image src={coin.image.large} width={56} height={56} alt={coin.name} />
            <div className='info'>
              <p>{coin.name}/ {coin.symbol.toUpperCase}</p>
              <h1>{coin.market_data.current_price.usd}</h1>
            </div>
          </div>
        </div>

        <p>Coin Overview</p>

        <p>Trending Coins</p>
        <DataTable
          data={dummyData}
          columns={columns}
          rowKey={(coin) => coin.item.id}
        />
      </section>

      <section className='w-full mt-7 space-y-4 '>
        <p>Categories</p>
      </section>
    </main>
  )
}

export default page