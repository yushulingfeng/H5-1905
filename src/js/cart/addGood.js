import {
    setCookie,
    getCookie
} from '../../lib/common'

function addGood(userId, gid, gcount) {
    const user = getCookie(userId)
    if (user) {
        let goods = JSON.parse(user)
        let exist = false
        for (let good of goods) {
            if (good.gid == gid) {
                good.gcount += gcount
                exist = true
                break
            }
        }
        if (!exist) {
            goods.push({
                gid,
                gcount
            })
        }
        setCookie(userId, JSON.stringify(goods))
    } else {
        setCookie(userId, JSON.stringify([{
            gid,
            gcount
        }]))
    }
}

export {
    addGood
}