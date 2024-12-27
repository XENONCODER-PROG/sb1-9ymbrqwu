export interface BatsmanStats {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

export interface BowlerStats {
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface CricketMatch {
  id: string;
  teams: {
    home: string;
    away: string;
  };
  score: {
    home: {
      runs: number;
      wickets: number;
      overs: number;
    };
    away: {
      runs: number;
      wickets: number;
      overs: number;
    };
  };
  currentInnings: 'home' | 'away';
  runRate: number;
  requiredRunRate?: number;
  currentBatsmen: BatsmanStats[];
  currentBowler: BowlerStats;
  status: 'live' | 'completed' | 'upcoming';
  venue: string;
  matchType: string;
}