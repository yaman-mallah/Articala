import { ApiObject } from "./ApiObject"
export const CRUDServices = {
    uploadArticaleImg(token, auth, img) {
        const URL = 'https://tamkeen-dev.com/api/file/upload/node/blog/field_image?_format=json';

        return fetch(URL, {
            method: 'POST',
            headers: {
                'X-CSRF-Token': token,
                'Authorization': `${auth}`,
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': `file; filename="${img.name}"`
            },
            body: img
        })
            .then(async res => {
                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status}: ${text}`);
                }
                return res.json();
            });
    },
    uploadArticaleGallery(token, file, auth) {
        let URL = 'https://tamkeen-dev.com/api/file/upload/node/blog/field_gallery?_format=json'
        return fetch(URL, {
            method: 'POST',
            headers: {
                'X-CSRF-Token': token,
                'Authorization': `${auth}`,
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'file; filename="FILENAM.jpg"'
            },
            body: file
        })
            .then(async res => {
                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status}: ${text}`);
                }
                return res.json();
            });
    },

    createArticle(token, blogInfo, auth, gallery) {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.POSTABLOG

        // console.log('URL:', URL);
        // console.log(blogInfo.mainImgId)

        // Create the request body object
        const requestBody = {
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
                "target_id": blogInfo.mainImgId.id
                // "target_id": 213
            }],
            "field_gallery": gallery || [],
            "field_tags": blogInfo.tags || [],
            "field_category": [{
                "target_id": blogInfo.cat
            }]
        };

        console.log('Request Body:', requestBody);

        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token,
                'Authorization': `${auth}`,
            },
            body: JSON.stringify(requestBody) // Convert to JSON string
        })
            .then(res => {
                console.log('Response Status:', res.status);
                console.log('Response Headers:', [...res.headers.entries()]);

                if (!res.ok) {
                    // Try to get error details from response
                    return res.text().then(text => {
                        console.error('Error Response:', text);
                        throw new Error(`HTTP ${res.status}: ${text || "Unknown error"}`);
                    });
                }
                return res.json();
            });
    },
    delete(token, id, auth) {
        let URL = ApiObject.BASE_URL + `/node/${id}?_format=json`

        return fetch(URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token,
                'Authorization': `${auth}`,
            }
        })
            .then(res => {
                console.log('Response Status:', res.status);
                console.log('Response Headers:', [...res.headers.entries()]);

                if (!res.ok) {
                    // Try to get error details from response
                    return res.text().then(text => {
                        console.error('Error Response:', text);
                        throw new Error(`HTTP ${res.status}: ${text || "Unknown error"}`);
                    });
                }
                return res;
            });

    },
    updateArticale(token, id, auth, blogInfo) {
        let URL = ApiObject.BASE_URL + `/node/${id}?_format=json`
        console.log(URL)
        const requestBody = {
            "type": [{
                "target_id": "blog"
            }],
            "title": [{
                "value": blogInfo.title
            }],
            "body": [{
                "value": blogInfo.blog,
                "format": "basic_html"
            }],
            "field_image": [{
                "target_id": blogInfo.mainImg
                // "target_id": 213
            }],
            "field_gallery": blogInfo.gallery || [], // Added fallback
            "field_tags": blogInfo.tags || [],
            "field_category": [{
                "target_id": blogInfo.cat
            }]
        };


        return fetch(URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token,
                'Authorization': auth,
            },
            body: JSON.stringify(requestBody)

        })
            .then(res => {
                console.log('Response Status:', res.status);
                console.log('Response Headers:', [...res.headers.entries()]);

                if (!res.ok) {
                    // Try to get error details from response
                    return res.text().then(text => {
                        console.error('Error Response:', text);
                        throw new Error(`HTTP ${res.status}: ${text || "Unknown error"}`);
                    });
                }
                return res;
            });

    },
    promisedFiles(token, selectedFiles, name, pass) {
        let URL = ApiObject.BASE_URL + ApiObject.END_POINTS.GALLERYUPLOAD
        const tk = btoa(`${name}:${pass}`);

        selectedFiles.map((file) => {
            return fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'X-CSRF-Token': token,
                    'Authorization': tk,
                    'Content-Disposition': `file; filename="${file.name}"`
                },
                body: file

            })
                .then(res => res.json())
        })
    },
    deleteUser(token, id, auth) {
        let URL = `https://tamkeen-dev.com/api/user/${id}?_format=json`
        return fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token,
                'Authorization': auth,


            }
        })
            .then(res => {
                if (res.ok) return res.json()
                throw new Error(res)
            })
    },
  
};

