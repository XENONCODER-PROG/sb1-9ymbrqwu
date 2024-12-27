import React from 'react';
import type { BowlerStats } from '../../types/cricket';

interface BowlerInfoProps {
  bowler: BowlerStats;
}

export function BowlerInfo({ bowler }: BowlerInfoProps) {
  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <h4 className="text-sm font-medium text-gray-600 mb-2">Current Bowler</h4>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{bowler.name}</p>
          <p className="text-sm text-gray-600">
            {bowler.overs}-{bowler.maidens}-{bowler.runs}-{bowler.wickets}
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">{bowler.economy.toFixed(1)}</p>
          <p className="text-xs text-gray-600">Economy</p>
        </div>
      </div>
    </div>
  );
}