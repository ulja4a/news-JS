export interface LoaderOptions {
    apiKey: string;
}

export interface RequestOptions {
    endpoint: string;
    options?: Record<string, string>;
}

export type ResponseCallback = (data: unknown) => void;

export interface NewsArticle {
    title: string;
    description: string | null;
    author: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    source: {
        name: string;
    };
}

export interface NewsSource {
    id: string;
    name: string;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface SourcesResponse {
    status: string;
    sources: NewsSource[];
}