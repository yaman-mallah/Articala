import { ApiObject } from "./ApiObject";
import React from 'react'

export const blogServices = {
    getCats() {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.CATEGORIES;
        return fetch(`${URL}`)
            .then((res) => {
                if (res.ok)
                    return res.json()
                throw new Error(res.message)
            })

    },
    getLatestArticles() {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.CATEGORIES;
    },
    getUserList() {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.USERLIST;
        return fetch(URL, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res)
            }

            )
    },
    getTestimoials() {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.TESTIMONIALS
        console.log(URL)
        return fetch(URL)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res)
            })
    },
    getFaq() {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.FAQIMPORT
        return fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res)
            })
    },
    getAllArticales(urlInfo = {}) {
        let params = new URLSearchParams(urlInfo).toString()
        let name = 'tamkeen', pass = '123456'
        let URL =
            ApiObject.BASE_URL +
            ApiObject.END_POINTS.ALLBLOGS +
            (params ? `?${params}` : '')
        const token = btoa(`${name}:${pass}`);
        return fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res)
            })

    }
}

