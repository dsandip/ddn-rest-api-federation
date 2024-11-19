import { getAuthor, getAuthorArticle } from './functions';

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
        console.log('\nTesting article for author ID 2:');
        const article = await getAuthorArticle(2);
        console.log(article);

        console.log('\nTest completed.');
    } catch (error) {
        console.error('Error:', error);
    }
}

test();