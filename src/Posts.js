import { useParams } from 'react-router-dom';
import { API_ADDRESS } from './helpers.js';

import NotFound from './NotFound.js';

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
    const shareLink = `/${post.response.link.split('/').slice(-5, -1).join('/')}`;

    return (
        <article>
            <h2 dangerouslySetInnerHTML={{ __html: post.response.title.rendered }}></h2>
            <section dangerouslySetInnerHTML={{ __html: post.response.content.rendered }}></section>
            <section className="share-article">
                <a href={shareLink}>Share Article</a>
            </section>
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
    const link_address = `${API_ADDRESS}/${params.year}/${params.month}/${params.day}/${params.title}/`

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

function Posts({ allPosts, loading }) {
    let params = useParams();

    return (
        <section className="main-content">
            {!loading ? <Post response={allPosts} params={params} /> : <LoadingSpinner />}
        </section>
    );
}

export default Posts;
