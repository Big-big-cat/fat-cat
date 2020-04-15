// pages/test/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index: 0,
        array:['吃','喝','玩'],
        disable: false,
        arrayList: [
            [   { name: '火锅' },
                { name: '川菜' },
                { name: '粤菜' },
                { name: '烧烤' },
                { name: '西餐' },
                { name: '面食' },
                { name: '寿司' },
                { name: '汉堡' },
                { name: '湘菜' }],
            [
                { name: '奶茶' },
                { name: 'KTV' },
                { name: '酒吧' },
                { name: '清吧' },
            ],
            [
                { name: '电影院' },
                { name: '游乐园' },
                { name: '电玩城' },
                { name: '兜风' },
                { name: '爬山' },
                { name: '游泳' },
                { name: '运动' },
            ],
        ]
    },

    
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value,
            list: this.data.arrayList[e.detail.value],
            i: 111
        })
    },

    click: function (e) {
        let that = this
        let s = this.data.arrayList[this.data.index].length
        let time = setInterval(function () {
            let m = Math.floor(Math.random() * s)
                that.setData({
                    i: Math.floor(Math.random() * s)
                })
        }, 100)
        that.setData({
            time: time,
            disable: true
        })

    },

    shopSettime() {
        clearInterval(this.data.time)
        this.setData({ disable: false })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({list:this.data.arrayList[this.data.index]})
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