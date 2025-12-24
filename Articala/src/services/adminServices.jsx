import { ApiObject } from "./ApiObject"


export const adminServices = {
    getUsers(auth, curPage) {
        // console.log(search)
        let Url = ApiObject.BASE_URL + ApiObject.END_POINTS.USERLIST+'?'
            + (curPage ? `?page=${curPage}&` : `?page=0&`)
            // + (search && `search=${search.search}`)
        console.log(Url)

        return fetch(Url, {
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) return res.json()
                throw new Error(res)
            })
    }
}

