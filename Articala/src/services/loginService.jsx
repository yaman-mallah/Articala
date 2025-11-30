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
    getUserInfo(userInfo, userId) {
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
    },
    getArticalesInfo(userInfo) {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.ARTICALSINFO
        const token = btoa(`${userInfo.name}:${userInfo.pass}`);
        return fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) return res.json();
                throw new Error(res.message);
            })

    },
    //not in use yet.....
    sendProfileImg(cstoken, pass, name, file) {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.IMGUPLOAD
        const token = btoa(`${name}:${pass}`);

        console.log(file)
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${token}`,
                "Content-Type": "application/octet-stream",
                "X-CSRF-Token": cstoken,
                "Content-Disposition": 'file; filename="newFile.png"'
            },
            body: file
        }).then(res => {

            if (res.ok) return res.json();
            throw new Error("Error in response");
        });
    },
    UpdateProfile(pass, name, userId, tokencrf, FName, LName, img) {
        let URL = ApiObject.BASE_URL + `/user/${userId}?_format=json`
        const token = btoa(`${name}:${pass}`);

        return fetch(URL, {
            method: 'PATCH',
            headers: {
                'Authorization': `Basic ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-CSRF-Token": tokencrf
            },
            body: JSON.stringify({
                "field_name": [
                    {
                        "value": FName
                    }
                ],
                "field_surname": [
                    {
                        "value": LName
                    }
                ],
                // "user_picture": [
                //     {
                //         "target_id": img
                //     }
                // ]

            })
        })
            .then(res => {

                if (res.ok) return res.json();
                throw new Error("Error in response");
            });
    }
}

