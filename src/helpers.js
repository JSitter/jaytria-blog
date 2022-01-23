const fetchJSON = (route) => {
    return new Promise((resolve, reject) => {
        try {
            const response = fetch('wp-json/wp/v2/' + route)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        } catch (err) {
            console.log('Error fetching resource: ' + err);
        }
    })
}

export { fetchJSON };
