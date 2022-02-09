const API_ADDRESS = "https://api.jaytria.com";

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
}

const MenuLinks = [
    { title: "About", url: "https://jaytria.com/" },
    { title: "Client Login", url: "https://clients.jaytria.com/" },
];

const fetchJSON = (route) => {
    return new Promise((resolve, reject) => {
        try {
            const local_dev = `/wp-json/wp/v2/${route}`;
            const prod = 'https://blog.jaytria.com/request.php'

            const location = process.env.NODE_ENV === 'development' ? local_dev : prod

            fetch(process.env.NODE_ENV === 'development' ? local_dev : prod)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => {
                    reject(err);
                });
        } catch (err) {
            console.log(`Error fetching resource ${route}:  ${err}`);
        }
    })
}

const getPostIndex = (posts, url) => {
    const curSlug = url.split('/').at(-1);

    let postIndex = false;

    const curPost = posts.filter((post, index) => {

        if (post.slug === curSlug) {
            postIndex = index;
        }
    });

    if (curPost.length > 0) {
        return postIndex;
    } else {
        return 0
    }
}

export { API_ADDRESS, copyToClipboard, fetchJSON, getPostIndex, MenuLinks };
