// pages/add/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        aggregateValue: '累计：'
    },

    bindinputSmall: function(e){
        this.setData({
            small: e.detail.value
        })
    },
    bindinputBig: function(e){
        this.setData({
            big: e.detail.value
        })
    },

    click: function(){
        let small = Number(this.data.small)
        let big = Number(this.data.big)
        let s = 0
       
        for(let i = small ;i<=big;i++){
            s+=i
        }
        
        this.setData({
            aggregateValue: s
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