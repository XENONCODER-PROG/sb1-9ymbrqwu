import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import type { Player } from '../types';

interface PlayerCardProps {
  player: Player;
  onClick: () => void;
}

export function PlayerCard({ player, onClick }: PlayerCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        {player.imageUrl ? (
          <img
            src={player.imageUrl}
            alt={player.name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <User className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{player.name}</h3>
        <p className="text-sm text-gray-600">{player.team}</p>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
            {player.sport}
          </span>
        </div>
      </div>
    </motion.div>
  );
}