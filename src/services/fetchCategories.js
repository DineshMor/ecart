import axios from 'axios';

export const fetchCategories = url => {
    return axios.get()
             .then(res => console.log(res))
             .catch(err => console.log(err))
}
