import { ApiObject } from "./ApiObject"

export const loginService = {
    login(loginData) {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.LOGIN
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(res => {
                if (res.ok) return res.json();
                throw new Error(res.message);
            })
    },
    getImage(userInfo, userId) {
        let URL = ApiObject.BASE_URL + `/user/${userId}?_format=json`;
        const token = btoa(`${userInfo.name}:${userInfo.pass}`);
        return fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(res => {
                if (res.ok) return res.json();
                throw new Error("Failed to fetch image");
            });
    }
}

