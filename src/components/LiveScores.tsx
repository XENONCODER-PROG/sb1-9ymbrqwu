import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CricketMatch } from '../types/cricket';
import { MatchHeader } from './cricket/MatchHeader';
import { RunRateInfo } from './cricket/RunRateInfo';
import { BatsmanRow } from './cricket/BatsmanRow';
import { BowlerInfo } from './cricket/BowlerInfo';

const mockMatch: CricketMatch = {
  id: '1',
  teams: { home: 'India', away: 'Australia' },
  score: {
    home: { runs: 245, wickets: 4, overs: 35.2 },
    away: { runs: 0, wickets: 0, overs: 0 }
  },
  currentInnings: 'home',
  runRate: 6.94,
  requiredRunRate: undefined,
  currentBatsmen: [
    {
      name: 'Virat Kohli',
      runs: 86,
      balls: 74,
      fours: 8,
      sixes: 2,
      strikeRate: 116.22
    },
    {
      name: 'KL Rahul',
      runs: 45,
      balls: 38,
      fours: 4,
      sixes: 1,
      strikeRate: 118.42
    }
  ],
  currentBowler: {
    name: 'Mitchell Starc',
    overs: 7.2,
    maidens: 1,
    runs: 42,
    wickets: 2,
    economy: 5.73
  },
  status: 'live',
  venue: 'M.Chinnaswamy Stadium, Bangalore',
  matchType: 'ODI Series - 2nd Match'
};

export function LiveScores() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Live Scores</h2>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-4"
      >
        <MatchHeader match={mockMatch} />
        <RunRateInfo 
          currentRunRate={mockMatch.runRate}
          requiredRunRate={mockMatch.requiredRunRate}
        />

        <div className="space-y-4">
          <div>
            <div className="grid grid-cols-6 gap-2 text-xs text-gray-600 border-b pb-1">
              <div className="col-span-2">Batter</div>
              <div className="text-center">R</div>
              <div className="text-center">B</div>
              <div className="text-center">4s/6s</div>
              <div className="text-center">SR</div>
            </div>
            {mockMatch.currentBatsmen.map((batsman, index) => (
              <BatsmanRow 
                key={batsman.name}
                batsman={batsman}
                isStriker={index === 0}
              />
            ))}
          </div>

          <BowlerInfo bowler={mockMatch.currentBowler} />
        </div>
      </motion.div>
    </div>
  );
}