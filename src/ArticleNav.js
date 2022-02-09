import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './css/ArticleNav.css';

function createNavLink(link) {
    return `/${link.split('/').slice(-5, -1).join('/')}`;
}

function createNextPostLink(curIndex, posts) {
    if (posts) {
        let link = false;
        if (curIndex + 1 < posts.length) {
            link = createNavLink(posts[curIndex + 1].link)
        } else {
            link = createNavLink(posts[0].link);
        }
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

    const handleNextClick = (position) => {
        window.history.pushState({}, window.title, `/${posts[position].link.split('/').slice(-5, -1).join('/')}`);
        setCurPostIndex(position);
    }

    useEffect(() => {
        setNextArticleLink(createNextPostLink(curPostIndex, posts));
    }, [curPostIndex, posts]);

    //Return this component while there are more posts
    if (curPostIndex < posts.length - 1) {

        return (
            <div className="article-nav">
                <a href={"#top-content"} onClick={() => handleNextClick(curPostIndex + 1)}>Next Post: {getNextPostTitle(curPostIndex, posts)}</a>
            </div>

        );
    } else {
        return (
            <div></div>
        );
    }



}

export default ArticleNav;