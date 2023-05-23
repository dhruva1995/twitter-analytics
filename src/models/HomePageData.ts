export interface HomePageData {
  id: Id;
  month: number;
  tweetCount: number;
  uniqueUser: number;
  likeCount: number;
  retweetCount: number;
  storageCount: number;
  engagementCount: number;
  tweetsPerDay: Record<string, number>;
  activeUsersPerDay: Record<string, number>;
  storageUsagePerDay: Record<string, number>;
}
export interface Id {
  timestamp: number;
  date: string;
}

export default HomePageData;
