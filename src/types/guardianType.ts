export interface Article {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
  }
  
  export interface GuardianApiResponse {
    response: {
      status: string;
      userTier: string;
      total: number;
      startIndex: number;
      pageSize: number;
      currentPage: number;
      pages: number;
      orderBy: string;
      results: Article[];
    };
  }