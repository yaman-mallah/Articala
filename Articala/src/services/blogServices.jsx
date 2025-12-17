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
        console.log(urlInfo.currentPage)
        let URL =
            ApiObject.BASE_URL +
            ApiObject.END_POINTS.ALLBLOGS +
            (urlInfo ? '?' : '') +
            (urlInfo.category ? `category=${urlInfo.category}&` : '')
            + (urlInfo.currentPage != null ? `page=${urlInfo.currentPage}&` : '')
        //+ '&items_per_page=21'
        // (params ? `?${params}` : '')
        console.log(URL)
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

    },
    getSinglePage(id) {
        let URL = ApiObject.BASE_URL + `/node/${id}?_format=json`
        return fetch(URL, {
            'method': 'GET',
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
    getMyArticales(userInfo) {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.ARTICALSINFO
        let name = 'tamkeen', pass = '123456'
        // const token = btoa(`${userInfo.name}:${userInfo.pass}`);
        const token = btoa(`${name}:${pass}`);
        return fetch(URL, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res)
            })

    },
}

