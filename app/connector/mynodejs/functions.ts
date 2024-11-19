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

interface Article {
  id: number;
  title: string;
  author_id: number;
}

const api = {
  baseUrl: "http://local.hasura.dev:5000"
};

/**
 * Get author details by ID
 * @param authorId ID of the author to fetch (defaults to 1)
 * @returns Author details
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
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
 * Get an article by author ID
 * @param authorId ID of the author whose article to fetch (defaults to 1)
 * @returns Article details
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 * @hml author_article
 */
export async function getAuthorArticle(
  authorId: number = 1
): Promise<Article> {
  const url = `${api.baseUrl}/author-article?authorid=${authorId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw await response.json();
  }
  return response.json() as Promise<Article>;
}
