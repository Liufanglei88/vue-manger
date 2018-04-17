const jwt = require('jsonwebtoken')
const fs = require('fs')
const http = require('http')
const queryString = require('querystring')
const mock = require('mockjs')
const multer = require('multer');

let stroage = multer.diskStorage({
    //保存的文件夹
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    //文件名称
    filename: function (req,file,cb) {
        let filename = file.originalname.split('.')
        cb(null, filename[0] + '-' + Date.now() + '.' + filename[1])
    }
})

let upload = multer({ storage : stroage})

const queryApi = (url, methods, params) => {
    return new Promise((resolve, reject) => {
        let data = ""
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        }
        let requset = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;

            })
            response.on('end', () => {
                resolve((JSON.stringify(data)))
            })
        })
        if (methods.toLowerCase() == 'post') {
            requset.write(queryString.stringify(params))
        }
        requset.end()
    })

}

module.exports = function(app) {
    //注册接口
    app.post('dsp-admin/user/login', (req, res) => {
        let user = fs.readFileSync('./user.json', { encoding: "utf-8" })
        user = JSON.parse(user)
        user.push(req.body)
        fs.writeFile('user.json', JSON.stringify(user), function() {
            res.end(JSON.stringify({
                "success": "1",
                "info": "register success"
            }))
        })

    })

    //login接口
    app.post('/dsp-admin/user/login', (req, res) => {
        let user = fs.readFileSync('./user.json', { encoding: "utf-8" })
        user = JSON.parse(user)
        let login = req.body
        let resInfo = {}

        user.forEach(item => {
            if (item.userName === login.username && item.password === login.password) {
                resInfo.success = 1
                resInfo.info = 'login success',
                resInfo.user = {
                    name:item.userName,
                    time:new Date().toLocaleDateString(),
                    nickName:"Lynne"
                }
            } else {
                resInfo.success = 0
                resInfo.info = '用户名或密码错误'
            }
        })
            //加密
        if (resInfo.success == 1) {
            resInfo.token = jwt.sign(login, "1511", {
                expiresIn: 60 * 60 //超时时长
            })
        }

        res.end(JSON.stringify(resInfo))
    })


    //获取echarts数据
    app.post('/dsp-report/index',(req,res) => {
        let data = mock.mock({
            "status ": 0,
            "data": {
                exposeNum: 10000, //曝光量
                clickNum: 1000, // 点击量
                clickRate: 100,  // 点击率
                clickPrice: 10000, // 点击均价
                cpmPrice: 200000, // 千次展示均价
                consumed: 1000, // 时间段消耗(单位分)
                'dataY1|5': [() => mock.Random.natural(1000,2000)],
                dataY2: [1100, 1382, 1325, 1600, 1600]
            }
        })
        res.send(data)
    })

    app.post('/dsp-creative/creative/upload',upload.single('file'),(req,res) => {
        res.send({
            "data":{
                "size":req.file.size,
                "value":req.file.path,
                "key":"2A36B67C6"
            },
            "status":0
        })
    })
}