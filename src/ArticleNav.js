import { useEffect, useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { API_ADDRESS } from './helpers.js';

// function convertCurrentPostToIndex(posts) {
//     const params = window.location.pathname
//     const paramLength = params.split('/').length;
//     console.log("length", paramLength);
//     console.log("params", params);
//     console.log("convert current post to index", posts)

//     if (params.length > 2 && posts) {
//         posts.some((post, index) => {
//             console.log(post.link);
//             if (post.link === `${API_ADDRESS}${params}`) {
//                 return index;
//             }
//         })
//     } else { return 0; }
// }

function createNavLink(link) {
    return `/${link.split('/').slice(-5, -1).join('/')}`;
}

function createPreviousPostLink(curIndex, posts) {

}

function createNextPostLink(curIndex, posts) {
    console.log('createNextPostLink posts', posts)
    console.log('createNextPostLink index', curIndex)
    if (posts) {
        console.log('createNextPostLink Found posts')
        console.log("Created link: ", createNavLink(posts[curIndex + 1].link))
        const link = createNavLink(posts[curIndex + 1].link)
        return link;
    } else {
        return "#";
    }

}

function getNextPostTitle(curIndex, posts) {
    return posts[curIndex + 1].title.rendered;
}

function ArticleNav({ posts, curPostIndex, setCurPostIndex }) {

    // const [postIndex, setPostIndex] = useState(0)

    // useEffect(() => {
    //     const index = convertCurrentPostToIndex(posts);
    //     setPostIndex(index);
    // }, [posts])

    const [nextArticleLink, setNextArticleLink] = useState('#');

    useEffect(() => {
        setNextArticleLink(createNextPostLink(curPostIndex, posts));
    }, [curPostIndex, posts]);

    console.log("Article Nav num posts", posts.length)
    //Return this component while there are more posts
    console.log("Article Nav cur post index", curPostIndex)

    if (curPostIndex < posts.length - 1) {


        return (
            <div>
                <a href={"#top-content"} onClick={() => setCurPostIndex(curPostIndex + 1)}>Next Post: {getNextPostTitle(curPostIndex, posts)}</a>
            </div>
        );
    }
    return (
        <div></div>
    );



}

export default ArticleNav;