import React from 'react';

interface RunRateInfoProps {
  currentRunRate: number;
  requiredRunRate?: number;
}

export function RunRateInfo({ currentRunRate, requiredRunRate }: RunRateInfoProps) {
  return (
    <div className="flex gap-4 text-sm border-t border-b border-gray-200 py-2 my-3">
      <div>
        <span className="text-gray-600">CRR: </span>
        <span className="font-medium">{currentRunRate.toFixed(2)}</span>
      </div>
      {requiredRunRate && (
        <div>
          <span className="text-gray-600">RRR: </span>
          <span className="font-medium">{requiredRunRate.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}