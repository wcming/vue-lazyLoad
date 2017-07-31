/** Created by lixiangyang on 2017/7/31...*/
const router = require('express').Router();
router.post('/getList', (res, req) => {
  req.json({
    status: 0,
    lists: [
      {name: '列表000001', img: 'http://img2.niutuku.com/1312/0800/0800-niutuku.com-14339.jpg'},
      {name: '列表000002', img: 'http://pic.962.net/up/2014-4/2014043015462944035.jpg'},
      {name: '列表000003', img: 'http://www.33lc.com/article/UploadPic/2012-9/201292116551657975.jpg'},
      {name: '列表000004', img: 'http://img2.niutuku.com/desk/1212/2236/2236-ntk35334.jpg'},
      {name: '列表000005', img: 'http://bizhi.zhuoku.com/2011/08/29/jingxuan/jingxuan165.jpg'},
      {name: '列表000006', img: 'http://img2.niutuku.com/desk/1207/1005/ntk122731.jpg'},
      {name: '列表000007', img: 'http://static.bbs.nubia.cn/forum/201302/24/002551xhcxd8o7f6ic3xqg.jpg'},
      {name: '列表000008', img: 'http://img2.niutuku.com/desk/130220/37/37-niutuku.com-927.jpg'},
    ]
  })
})

module.exports = router;
