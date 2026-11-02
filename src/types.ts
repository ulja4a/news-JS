export interface LoaderOptions {
    apiKey: string;
}
export interface RequestOptions {
    endpoint: string;
    options?: Record<string, string>;
}
export type ResponseCallback = (data: unknown) => void;