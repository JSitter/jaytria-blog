import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function convertCurrentPostToIndex(posts, params) {
    console.log(params);
    console.log(posts)
    if ("title" in params) {
        const index = posts.some((post, index) => {
            console.log(post)
            // if (post.link)
        })
    }
}

function createPreviousPostLink(curIndex) {

}

function createNextPostLink(curIndex) {

}

function ArticleNav({ posts }) {
    let params = useParams();

    useEffect(() => {
        convertCurrentPostToIndex(posts, params)
    }, [params])

    return (
        <div>
            <a href="#">Previous Article: Previous Article</a> | <a href="#">Next article: Article Title</a>
        </div>
    );
}

export default ArticleNav;