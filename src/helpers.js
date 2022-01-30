const fetchJSON = (route) => {
    return new Promise((resolve, reject) => {

        try {
            const local_dev = '/wp-json/wp/v2/' + route;
            const prod = 'request.php'

            // console.log(process.env.NODE_ENV === 'development' ? local_dev : prod)
            fetch(process.env.NODE_ENV === 'development' ? local_dev : prod)
                .then(res => res.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        } catch (err) {
            console.log('Error fetching resource: ' + err);
        }
    })
}

export { fetchJSON };
