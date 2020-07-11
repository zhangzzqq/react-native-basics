class HttpUtils {

    /**
     * GET请求
     * @param url
     * @returns {Promise<any> | Promise<*>}
     */
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }


    /**
     * POST请求
     * @param url
     * @param data
     * @returns {Promise<any> | Promise<*>}
     */
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .then(err => reject(err))
        })
    }


    /**
     * PUT请求修改数据
     * @param url
     * @param data
     * @returns {Promise<any> | Promise<*>}
     */
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .then(err => reject(err))
        })
    }

    /**
     * DELETE请求删除数据
     * @param url
     * @param data
     * @returns {Promise<any> | Promise<*>}
     */
    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            })
                .then(res => res.json())
                .then(data => '删除数据成功。。。')
                .then(err => reject(err))
        })
    }

}
