import React from 'react';
import { motion } from 'framer-motion';
import type { Reaction } from '../types';

const reactions: Reaction[] = [
  { type: '👏', count: 0 },
  { type: '😲', count: 0 },
  { type: '🔥', count: 0 },
  { type: '😢', count: 0 },
  { type: '🎉', count: 0 },
];

export function ReactionBar() {
  const [userReactions, setUserReactions] = React.useState<Reaction[]>(reactions);

  const handleReaction = (type: Reaction['type']) => {
    setUserReactions(prev =>
      prev.map(reaction =>
        reaction.type === type
          ? { ...reaction, count: reaction.count + 1 }
          : reaction
      )
    );
  };

  return (
    <div className="flex gap-2 p-4 bg-white rounded-lg shadow-sm">
      {userReactions.map(({ type, count }) => (
        <motion.button
          key={type}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleReaction(type)}
          className="flex flex-col items-center gap-1 p-2 rounded-full hover:bg-gray-100"
        >
          <span className="text-2xl">{type}</span>
          <span className="text-xs font-medium text-gray-600">{count}</span>
        </motion.button>
      ))}
    </div>
  );
}