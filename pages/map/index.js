const app = getApp()
Page({
    data: {
    },
    
    onLoad:function(options){
        let latst = app.globalData.lat,
            lngst = app.globalData.lng,
            dizhi = app.globalData.dizhi
        console.log(options)

        let plugin = requirePlugin('routePlan');
        let key = 'VZXBZ-HF3HD-XCU4G-P7BXL-M5AH5-CIFUQ';  //使用在腾讯位置服务申请的key
        let referer = '迷路的anges';   //调用插件的app的名称
        let endPoint = JSON.stringify({  //终点
            'name': '北京西站',
            'latitude': 39.894806,
            'longitude': 116.321592
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        });


    },
    onShow: function(){
        
    },
    onReady: function (e) {
        
    },

})
