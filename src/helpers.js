const fetchJSON = (route) => {
    return new Promise((resolve, reject) => {
        try {
            const local_dev = `/wp-json/wp/v2/${route}`;
            const prod = 'request.php'

            fetch(process.env.NODE_ENV === 'development' ? local_dev : prod)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        } catch (err) {
            console.log(`Error fetching resource ${route}:  ${err}`);
        }
    })
}

export { fetchJSON };
