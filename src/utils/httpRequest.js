import * as $ from 'jquery'

function httpRequest(url, callback) {
    $.ajax({
        url,
        success: (res) => {
            callback(res)
        }
    })
}

export {
    httpRequest
}