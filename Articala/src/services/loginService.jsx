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
        let URL = ApiObject.BASE_URL + `/user/71?_format=json`;
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
    },
    createAccounte(info) {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.CREATEANACCOUNTE
        console.log(info)
        console.log(URL)
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": {
                    "value": info.userName
                },
                "field_name": {
                    "value": info.fName
                },
                "field_surname": {
                    "value": info.LName
                },
                "mail": {
                    "value": info.Email
                },
                "field_mobile": {
                    "value": info.Mobile
                },
                "field_gender": {
                    "target_id": 9
                },
                "field_how_did_you_find_us": [
                    { "target_id": 18 },
                    { "target_id": 15 }

                ],
                "pass": {
                    "value": info.pass
                }

            })
        }).then(res => {
            if (res.ok) return res.json();
            throw new Error(res.message);
        })
    }
}

