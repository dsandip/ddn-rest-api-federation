import { getAuthor, getArticle, getArticles } from './functions';

async function test() {
    try {
        // Test default author (ID: 1)
        console.log('Testing default author:');
        const defaultAuthor = await getAuthor();
        console.log(defaultAuthor);

        // Test specific author (ID: 2)
        console.log('\nTesting author ID 2:');
        const author = await getAuthor(2);
        console.log(author);

        // Test author's article
        console.log('\nTesting article for article ID 2:');
        const article = await getArticle(2);
        console.log(article);

        // Test author's article
        console.log('\nTesting all articles');
        const articles = await getArticles();
        console.log(articles);
        

        console.log('\nTest completed.');
    } catch (error) {
        console.error('Error:', error);
    }
}

test();