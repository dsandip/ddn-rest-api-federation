/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function hello(name?: string) {
  return `hello ${name ?? "world"}`;
}

interface Author {
  id: number;
  name: string;
}

interface RelatedArticle {
  id: number;
  relationshipType: string;
}

interface Article {
  id: number;
  title: string;
  author_id: number;
  related_articles: RelatedArticle[];
}

const api = {
  baseUrl: "http://local.hasura.dev:5000"
};

/**
 * Get author details by ID
 * @param authorId ID of the author to fetch (defaults to 1)
 * @returns Author details
 * @readonly
 * @hml author
 */
export async function getAuthor(
  authorId: number = 1
): Promise<Author> {
  const url = `${api.baseUrl}/author?authorid=${authorId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw await response.json();
  }
  return response.json() as Promise<Author>;
}

/**
 * Get article by ID
 * @param articleId ID of the article to fetch (defaults to 1)
 * @returns Article details with related articles
 * @readonly
 * @hml article
 */
export async function getArticle(
  articleId: number = 1
): Promise<Article> {
  const url = `${api.baseUrl}/article?articleid=${articleId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw await response.json();
  }
  return response.json() as Promise<Article>;
}

/**
 * Get all articles
 * @returns Array of all articles with their related articles
 * @readonly
 * @hml articles
 */
export async function getArticles(): Promise<Article[]> {
  const url = `${api.baseUrl}/articles`;
  const response = await fetch(url);
  if (!response.ok) {
    throw await response.json();
  }
  return response.json() as Promise<Article[]>;
}
