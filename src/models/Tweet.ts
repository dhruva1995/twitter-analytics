export interface TrendingPageData {
  id: Id;
  month: number;
  trendingHashTags: TrendingHashTagsEntity[];
  mostLiked: Tweet[] | null;
  mostRetweeted: Tweet[] | null;
  mostEngaged: Tweet[] | null;
}
export interface Id {
  timestamp: number;
  date: string;
}
export interface TrendingHashTagsEntity {
  hashTag: string;
  engagement: number;
}
export interface Tweet {
  id: number;
  date: string;
  content: string;
  userName: string;
  likeCount: number;
  retweetCount: number;
  storage: number;
  engagementCount: number;
}
