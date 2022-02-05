import { useEffect, useState } from 'react';

function createNavLink(link) {
    return `/${link.split('/').slice(-5, -1).join('/')}`;
}

function createNextPostLink(curIndex, posts) {
    if (posts) {
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

    const [nextArticleLink, setNextArticleLink] = useState('#');

    useEffect(() => {
        setNextArticleLink(createNextPostLink(curPostIndex, posts));
    }, [curPostIndex, posts]);

    //Return this component while there are more posts
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