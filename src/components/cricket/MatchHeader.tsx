import React from 'react';
import type { CricketMatch } from '../../types/cricket';

interface MatchHeaderProps {
  match: CricketMatch;
}

export function MatchHeader({ match }: MatchHeaderProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-blue-600 font-medium">{match.matchType}</p>
        <p className="text-sm text-gray-600">{match.venue}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">{match.teams.home}</p>
          <p className="text-2xl font-bold text-blue-600">
            {match.score.home.runs}/{match.score.home.wickets}
            <span className="text-base text-gray-600 ml-2">
              ({match.score.home.overs} ov)
            </span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">{match.teams.away}</p>
          {match.score.away.runs > 0 && (
            <p className="text-2xl font-bold text-blue-600">
              {match.score.away.runs}/{match.score.away.wickets}
              <span className="text-base text-gray-600 ml-2">
                ({match.score.away.overs} ov)
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}