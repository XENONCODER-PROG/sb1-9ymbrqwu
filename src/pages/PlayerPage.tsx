import React from 'react';
import { useParams } from 'react-router-dom';
import { PlayerHeader } from '../components/player/PlayerHeader';
import { PlayerTimeline } from '../components/player/PlayerTimeline';
import { PlayerComments } from '../components/player/PlayerComments';
import type { PlayerDetails } from '../types';

const mockPlayerDetails: PlayerDetails = {
  id: '1',
  name: 'Virat Kohli',
  team: 'India',
  sport: 'Cricket',
  imageUrl: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80&w=800',
  stats: {
    matches: 350,
    achievements: ['ICC Player of the Year', 'Most ODI centuries']
  },
  followers: 15000000,
  isFollowing: false,
  bio: 'Indian international cricketer and former captain of the Indian national team.',
  recentPerformances: [
    {
      date: '2024-03-15',
      match: 'India vs Australia',
      performance: { runs: 85, wickets: 0 }
    },
    {
      date: '2024-03-10',
      match: 'India vs England',
      performance: { runs: 120, wickets: 0 }
    }
  ]
};

const mockComments = [
  {
    id: '1',
    userId: 'user1',
    userName: 'CricketFan123',
    content: 'What an incredible innings today! 🔥',
    timestamp: new Date().toISOString(),
    reactions: [{ type: '🔥', count: 5 }],
    replies: [
      {
        id: '2',
        userId: 'user2',
        userName: 'SportLover',
        content: 'Absolutely brilliant performance!',
        timestamp: new Date().toISOString(),
        reactions: [{ type: '👏', count: 3 }]
      }
    ]
  }
];

export function PlayerPage() {
  const { playerId } = useParams();
  const [player, setPlayer] = React.useState<PlayerDetails>(mockPlayerDetails);

  const handleFollow = () => {
    setPlayer(prev => ({
      ...prev,
      isFollowing: !prev.isFollowing,
      followers: prev.followers + (prev.isFollowing ? -1 : 1)
    }));
  };

  const handleShare = () => {
    // Implement share functionality
    console.log('Share player:', playerId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PlayerHeader
        player={player}
        onFollow={handleFollow}
        onShare={handleShare}
      />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <PlayerTimeline performances={player.recentPerformances} />
          <PlayerComments comments={mockComments} />
        </div>
        <aside className="lg:col-span-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Career Statistics</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Matches</p>
                <p className="text-2xl font-bold">{player.stats.matches}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Achievements</p>
                <ul className="mt-2 space-y-2">
                  {player.stats.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}