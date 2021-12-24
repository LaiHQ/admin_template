/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: lai_hq@qq.com
 * @Date: 2021-12-23 20:45:09
 * @LastEditors: lai_hq@qq.com
 * @LastEditTime: 2021-12-23 20:46:49
 */
module.exports = (req, res, next) => {
    if (req.method == 'POST' && req.path == '/login') {
        if (true) {
            return res.status(200).json({
                //返回的json数据，如
                user: {
                    token: '123'
                }
            })
        } else {
            return res.status(400).json({
                //失败返回的数据，如
                message: '用户名或者密码错误'
            })
        }
    }
}
