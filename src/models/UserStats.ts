export interface UserStats {
  id: Id;
  month: number;
  mostLikedUsers: UserPair[];
  mostRetweetedUsers: UserPair[];
  mostEngagedUsers: UserPair[];
  mostMentionedUsers: UserPair[];
}

export interface Id {
  timestamp: number;
  date: string;
}

export interface UserPair {
  userName: string;
  value: number;
}
