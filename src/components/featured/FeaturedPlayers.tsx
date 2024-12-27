import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerCard } from '../PlayerCard';
import type { Player } from '../../types';

const featuredPlayers: Player[] = [
  {
    id: '1',
    name: 'Yashasvi Jaiswal',
    team: 'India',
    sport: 'Cricket',
    imageUrl: 'https://assets.khelnow.com/news/uploads/2023/07/Yashasvi-Jaiswal-celebrates-his-century-on-Test-debut.jpg',
    stats: {
      matches: 7,
      achievements: ['Double Century vs England', 'Fastest Test 50 by an Indian']
    }
  },
  {
    id: '2',
    name: 'Jasprit Bumrah',
    team: 'India',
    sport: 'Cricket',
    imageUrl: 'https://www.hindustantimes.com/ht-img/img/2024/02/05/550x309/PTI02-05-2024-000097B-0_1707146230492_1707146247608.jpg',
    stats: {
      matches: 192,
      achievements: ['ICC World No.1 ODI Bowler', 'Fastest Indian to 100 ODI wickets']
    }
  },
  {
    id: '3',
    name: 'Virat Kohli',
    team: 'India',
    sport: 'Cricket',
    imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/11/15/550x309/kohli_hundred_1700044550419_1700044550619.jpg',
    stats: {
      matches: 350,
      achievements: ['ICC Player of the Year', 'Most ODI centuries']
    }
  }
];

export function FeaturedPlayers() {
  const navigate = useNavigate();

  return (
    <section className="lg:col-span-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Players</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPlayers.map(player => (
          <PlayerCard
            key={player.id}
            player={player}
            onClick={() => navigate(`/player/${player.id}`)}
          />
        ))}
      </div>
    </section>
  );
}