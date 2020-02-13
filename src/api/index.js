import axios from 'axios'

export default {
    getMethods: params => axios.get('/xx', {params: params}).then(res => res.data)   
}