import { useEffect, useState } from 'react';
import { fetchJSON } from './helpers.js';

import './css/Posts.css';

const Placeholder = () => {
    return (
        <article>
            <strong>Loading ...</strong>
        </article>
    );
}

const Post = (response) => {
    console.log(response.data.id);
    return (
        <article>
            <h2 dangerouslySetInnerHTML={{ __html: response.data.title.rendered }}></h2>
            <section dangerouslySetInnerHTML={{ __html: response.data.content.rendered }}></section>
        </article >
    );
}

function Posts() {
    useEffect(() => {
        fetchJSON('posts').then(json => setMainPost(json[0]));
    }, []);

    const [mainPost, setMainPost] = useState(false);

    return (
        <section className="main-content">
            {mainPost ? <Post data={mainPost} /> : <Placeholder />}
        </section>
    );
}

export default Posts;
