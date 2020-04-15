// pages/anges/index.js
var utils = require("../../utils/util.js");
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        one: ['海底捞', '小郡肝', '自助'],
        two: ['南联', '双龙']
    },

    click() {
        wx.navigateTo({
            url: '/pages/test/index',
        })
    },
    sclick() {
        wx.navigateTo({
            url: '/pages/dices/idnex',
        })
    },
    bclick() {
        wx.navigateTo({
            url: '/pages/randomNum/index',
        })
    },
    zclick() {
        wx.navigateTo({
            url: '/pages/custom/index',
        })
    },
    tclick(){
        let plugin = requirePlugin('routePlan');
        let key = 'VZXBZ-HF3HD-XCU4G-P7BXL-M5AH5-CIFUQ';  //使用在腾讯位置服务申请的key
        let referer = '迷路的anges';   //调用插件的app的名称
        let endPoint = JSON.stringify({  //终点
            'name': '北京市公安局（北京欢迎你）',
            'latitude': 39.9010130000,
            'longitude': 116.4047810000
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        }); 
    },
    yclick(){
        wx.showToast({
            title: '你已被击毙',
        })
    },
    qclick(){
        wx.navigateTo({
            url: '/pages/destiny/index',
        })
    },
    aclick(){
        wx.navigateTo({
            url: '/pages/add/index',
        })
    },

    getsdress() {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            i: app.globalData.i
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})