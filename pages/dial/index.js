// pages/test_1/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        disable: false,
        list: [
            '火锅', 'KTV', '电影院', '足浴', '兜风', '运动', '奶茶', '烧烤', '爬山'
        ],
        defaultSize: 'default'
    },

    click: function (e) {
        let that = this
        let time = setInterval(function () {
            let m = Math.floor(Math.random() * 9)
            if(m == 4){
                that.setData({
                    i: 5
                })
            }else {
                that.setData({
                    i: Math.floor(Math.random() * 9)
                })
            }
            
        }, 100)
        that.setData({
            time: time,
            disable: true
        })

    },

    shopSettime() {
        clearInterval(this.data.time)
        this.setData({ disable: false })
        // wx.showToast({
        //     title: this.data.list[this.data.i],
        //     icon: 'none'
        // })
    },

    clickJump (e){
        let i = e.currentTarget.dataset.index
        app.globalData.i = i
        wx.switchTab({
            url: '/pages/anges/index',
        })
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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