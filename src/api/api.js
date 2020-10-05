import Axios from "axios";

const instance = Axios.create(
    {
        baseURL: 'https://randomuser.me/api/1.3/'
    }
);

export const contactsApi = {
    getMultipleUsers(count) {
        return instance.get(`?results=${count}`)
            .then(response => {
                return response
            })
    },
}