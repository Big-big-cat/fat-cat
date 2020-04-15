// pages/user/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    stime:function(){
        let that = this
        wx.getLocation({
            success: function (res) {
                let lat = res.latitude
                let lng = res.longitude
                app.globalData.lat = lat
                app.globalData.lng = lng
                wx.request({
                    url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + lat + ',' + lng + "&key=VZXBZ-HF3HD-XCU4G-P7BXL-M5AH5-CIFUQ",
                    success: function (result) {
                        // console.log(result)
                        app.globalData.address = result.data.result
                        app.globalData.dizhi = result.data.result.address
                        let date = new Date(result.header.Date)
                        // console.log(date)
                        that.setData({
                            dizhi: result,
                            xq: date.getDay(),
                            year: date.getFullYear(),
                            month: date.getMonth() + 1,
                            day: date.getDate(),
                            hour: date.getHours(),
                            minu: date.getMinutes(),
                            seco: date.getSeconds()
                        })
                    }
                })
            },
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        that.stime()

        that.setData({
            userInfo: app.globalData.userInfo
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var ti = setInterval(()=>{
            this.stime()
        },1000)
        this.setData({
            ti: ti
        }) 
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        clearInterval(this.data.ti)
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})