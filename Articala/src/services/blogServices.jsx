import { ApiObject } from "./ApiObject";
import React from 'react'

export const blogServices = {
    getCats() {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.CATEGORIES;
        // console.log(URL)
        return fetch(`${URL}`)
            .then((res) => {
                console.log(res)
                if (res.ok)
                    return res.json()
                throw new Error(res.message)
            })

    },
    getLatestArticles() {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.CATEGORIES;
    },
}

