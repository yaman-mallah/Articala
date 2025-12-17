import { ApiObject } from "./ApiObject"

export const CRUDServices = {
    createAritcale(token, blogInfo) {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.POSTABLOG
        console.log(URL)
        return fetch(URL, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token
            },
            'body': {
                "type": [{
                    "target_id": "blog"
                }],
                "title": [{
                    "value": blogInfo.title
                }],
                "body": [{
                    "value": blogInfo.body,
                    "format": "basic_html"
                }],
                "field_image": [{
                    "target_id": blogInfo.mainImgId
                }],
                "field_gallery":blogInfo.gallery,
                "field_tags": [{
                    "target_id": 3
                }, {
                    "target_id": 2
                }],
                "field_category": [{
                    "target_id": blogInfo.cat
                }]
            }
        })
            .then(res => {

                if (res.ok) return res.json();
                throw new Error("Error in response");
            });

    }
}

