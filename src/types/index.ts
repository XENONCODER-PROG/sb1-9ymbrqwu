// ... existing interfaces ...

export interface PlayerStats {
  date: string;
  match: string;
  performance: {
    runs?: number;
    wickets?: number;
    goals?: number;
    assists?: number;
  };
}

export interface PlayerComment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
  reactions: Reaction[];
  parentId?: string;
  replies?: PlayerComment[];
}

export interface PlayerDetails extends Player {
  followers: number;
  isFollowing: boolean;
  recentPerformances: PlayerStats[];
  bio: string;
}