import React from 'react';
import type { BatsmanStats } from '../../types/cricket';

interface BatsmanRowProps {
  batsman: BatsmanStats;
  isStriker?: boolean;
}

export function BatsmanRow({ batsman, isStriker }: BatsmanRowProps) {
  return (
    <div className="grid grid-cols-6 gap-2 py-2 text-sm">
      <div className="col-span-2 font-medium flex items-center gap-2">
        {batsman.name}
        {isStriker && <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />}
      </div>
      <div className="text-center font-bold">{batsman.runs}</div>
      <div className="text-center text-gray-600">{batsman.balls}</div>
      <div className="text-center text-gray-600">{batsman.fours}/{batsman.sixes}</div>
      <div className="text-center">{batsman.strikeRate.toFixed(1)}</div>
    </div>
  );
}