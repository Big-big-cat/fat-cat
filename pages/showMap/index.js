const app = getApp()
Page({
    data: {
        routeInfo: {
            startLat: 0.0,    //起点经度 选填
            startLng: 0.0,    //起点纬度 选填
            startName: "未获取到起点",   // 起点名称 选填
            endLat: 23.321555,    // 终点经度必传
            endLng: 114.354442,  //终点纬度 必传
            endName: "这是哪儿",  //终点名称 必传
            mode: "car"  //算路方式 选填
        }
    },

    onLoad: function (options) {
        let latst = app.globalData.lat,
            lngst = app.globalData.lng,
            dizhi = app.globalData.dizhi
        console.log(options)
        let _page = this;
        _page.setData({
            routeInfo: {
                startLat: parseFloat(latst),    //起点经度 选填
                startLng: parseFloat(lngst),    //起点纬度 选填
                startName: dizhi,   // 起点名称 选填
                endLat: parseFloat(23.321555),    // 终点经度必传
                endLng: parseFloat(114.354442),  //终点纬度 必传
                endName: '这是哪儿',  //终点名称 必传
                mode: "car"  //算路方式 选填
            }
        })
    },
    onShow: function () {
        let plugin = requirePlugin("myPlugin");
    },
    onReady: function (e) {

    },

})
