import axios from 'axios';

export const submit_form = (url, params, callback) => {

    axios.get(url, params)
        .then(res => {
            console.log(res);
            callback(res, true);
        })
        .catch(err => {
            callback(err, false);
        });

};