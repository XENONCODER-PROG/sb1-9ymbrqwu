import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import type { PlayerStats } from '../../types';

interface PlayerTimelineProps {
  performances: PlayerStats[];
}

export function PlayerTimeline({ performances }: PlayerTimelineProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-bold">Recent Performances</h3>
      </div>
      <div className="space-y-4">
        {performances.map((perf, index) => (
          <motion.div
            key={perf.date + index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">
                  {format(new Date(perf.date), 'MMM dd, yyyy')}
                </p>
                <p className="font-medium">{perf.match}</p>
              </div>
              <div className="text-right">
                {Object.entries(perf.performance).map(([key, value]) => (
                  <p key={key} className="text-sm">
                    <span className="text-gray-600">{key}: </span>
                    <span className="font-medium">{value}</span>
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}