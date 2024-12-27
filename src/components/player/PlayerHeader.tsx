import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';
import type { PlayerDetails } from '../../types';

interface PlayerHeaderProps {
  player: PlayerDetails;
  onFollow: () => void;
  onShare: () => void;
}

export function PlayerHeader({ player, onFollow, onShare }: PlayerHeaderProps) {
  return (
    <div className="relative h-64 bg-gradient-to-b from-india-blue to-blue-700 rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={player.imageUrl}
          alt={player.name}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative h-full flex items-end p-6 text-white">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{player.name}</h1>
          <p className="text-blue-100 mb-4">{player.team} • {player.sport}</p>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onFollow}
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                player.isFollowing
                  ? 'bg-white text-blue-600'
                  : 'bg-blue-600 text-white border border-white'
              }`}
            >
              <Heart className="w-4 h-4" fill={player.isFollowing ? 'currentColor' : 'none'} />
              {player.isFollowing ? 'Following' : 'Follow'}
            </motion.button>
            <button
              onClick={onShare}
              className="p-2 rounded-full hover:bg-white/10"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <p className="text-sm">
              <span className="font-medium">{player.followers.toLocaleString()}</span> followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}