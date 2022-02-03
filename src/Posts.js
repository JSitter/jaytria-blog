import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJSON } from './helpers.js';

import NotFound from './NotFound.js';
import About from './About.js';

import './css/Posts.css';

const LoadingSpinner = () => {
    return (
        <article>
            <div className="loader">Loading...</div>
            <strong className="loading-article">Loading</strong>
        </article>
    );
}

const Article = (post) => {

    return (
        <article>
            <h2 dangerouslySetInnerHTML={{ __html: post.response.title.rendered }}></h2>
            <section dangerouslySetInnerHTML={{ __html: post.response.content.rendered }}></section>
        </article >
    );
}

const Post = ({ response, params }) => {
    let post = getPost(params, response);

    return (
        <div>
            {post ? <Article response={post} /> : <NotFound />}
        </div>
    );
}

function getPost(params, posts) {
    const link_address = `https://blog.jaytria.com/${params.year}/${params.month}/${params.day}/${params.title}/`

    if ("title" in params) {
        const found_post = posts.filter(post => post.link === link_address);
        if (found_post) {
            return found_post[0];
        } else {
            return false;
        }

    } else {
        return posts[0]
    }
}

function Posts() {

    const [loading, setLoading] = useState(true);
    const [allPosts, setAllPosts] = useState(false);

    let params = useParams();

    useEffect(() => {
        fetchJSON('posts').then(json => {
            setAllPosts(json);
            setLoading(false);
            console.log(json);
        });
    }, []);

    return (
        <section className="main-content">
            {!loading ? <Post response={allPosts} params={params} /> : <LoadingSpinner />}
            <About />
        </section>
    );
}

export default Posts;
