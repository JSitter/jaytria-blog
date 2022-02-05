import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_ADDRESS, copyToClipboard } from './helpers.js';
import { faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    const [showSharingUrl, setShowSharingUrl] = useState(false);
    const [clipboardCopied, setClipboardCopied] = useState(false);
    const shareLink = `${window.location.host}/${post.response.link.split('/').slice(-5, -1).join('/')}`;

    const copied = (text) => {
        copyToClipboard(text)
        setClipboardCopied(true);
        setTimeout(() => setClipboardCopied(false), 2500);
    }

    const sendLinkFocus = (e) => {
        if (e.key == "Enter") {
            setShowSharingUrl(!showSharingUrl);
        }
    }

    const closeSendLinkFocus = (e) => {
        if (e.key == "Enter") {
            setShowSharingUrl(false);
        }
    }

    return (
        <article>
            <h2 dangerouslySetInnerHTML={{ __html: post.response.title.rendered }}></h2>
            <section dangerouslySetInnerHTML={{ __html: post.response.content.rendered }}></section>

            <section className="share-article">
                <div
                    onClick={() => setShowSharingUrl(!showSharingUrl)}
                    className="share-icon"
                    tabIndex="0"
                    onKeyDown={sendLinkFocus}
                >
                    <FontAwesomeIcon
                        className="share-icon fa-3x"
                        icon={faPaperPlane}
                    />
                    Share
                </div>
                <div className={`share-url ${!showSharingUrl ? 'hide' : 'visible'}`}>
                    <input onFocus={() => copied(shareLink)} value={shareLink} readOnly />
                    <span className="close" tabIndex="0" onKeyDown={closeSendLinkFocus} onClick={() => setShowSharingUrl(false)}>
                        <FontAwesomeIcon
                            className="close fa-2x"
                            icon={faTimesCircle}
                        />
                    </span>
                    <div className={`copied-location ${clipboardCopied ? "visible" : "hide"}`}>Copied URL</div>
                </div>
            </section>
        </article >
    );
}

const Post = ({ response, params, curPostIndex }) => {

    let post = getPost(params, response, curPostIndex);

    return (
        <div>
            {post ? <Article response={post} /> : <NotFound />}
        </div>
    );
}

function getPost(params, posts, curPostIndex) {
    const link_address = `${API_ADDRESS}/${params.year}/${params.month}/${params.day}/${params.title}/`

    if ("title" in params) {
        const found_post = posts.filter(post => post.link === link_address);
        if (found_post) {
            return found_post[0];
        } else {
            return false;
        }

    } else {
        return posts[curPostIndex];
    }
}

function Posts({ allPosts, loading, curPostIndex }) {
    let params = useParams();

    return (
        <section id="top-content" className="main-content">
            {!loading ? <Post response={allPosts} params={params} curPostIndex={curPostIndex} /> : <LoadingSpinner />}
        </section>
    );
}

export default Posts;
