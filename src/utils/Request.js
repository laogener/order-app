import axios from 'axios';

export default function Request(url,params) {
    return axios({
        baseURI:'',
        url:url,
        method:'get',
        ...params
    })
}