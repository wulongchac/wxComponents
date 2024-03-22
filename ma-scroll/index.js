/*****************************
 *
  <ma-scroll
    srollHeight='{{srollHeight}}'
    bind:updateListFn="updateList"
    bind:getScrollListFn='getScrollList'
    pageNum='{{0}}'
    pageSize='{{10}}'
    id="ma-scroll"
  >
 * 
 * 
 *
  // 请求滚动列表
  getScrollList(type) {
    this.setData({
      showMoreSort: false,
      showFilter: false
    })
    let params = {
      params: this.getlistQuestParams(),
      url: HTTP_URI.GET_PRODUCTS,
      loadType: type || 'insert'
    }
    this.selectComponent('#ma-scroll').initScroll(params)
  },
  // 更新数据列表
  updateList(opt) {
    let arr = []
    if (opt.detail.pageNum === 0) {
      arr = opt.detail.list
    } else {
      arr = this.data.list.concat(opt.detail.list)
    }
    this.setData({
      list: arr
    })
  },
 * 
 * 
 */

import { Fetch } from '../../src/js/fetch.js'
Component({
  properties: {
    srollHeight: {
      type: Number,
      value: 100
    },
    pageNum: {
      type: Number,
      value: 0
    },
    pageSize: {
      type: Number,
      value: 10
    },
  },
  data: {
    listScrollTop: 0,
    canLoad: true,
    notEnd: true,
    hideHeader: true,

    params: {},
    url: '',
    loadType: 'insert',
  },
  onLoad: function () {
    this.initDOM()
  },
  methods: {
    /************************************
     * 初始化入口,配置参数
     * 
     * params:请求参数
     * url:请求路径
     * loadType: 请求类型
     *
     */
    initScroll(opt) {
      // 如果是插入类型，重置状态
      if (opt.loadType === 'insert') {
        this.setData({
          canLoad: true,
          notEnd: true,
          pageNum: 0,
        })
      }
      // 判断是否为请求中和是否已请求到最后一条
      if (!this.data.canLoad || !this.data.notEnd) {
        return
      }
      let params = opt.params
      params.pageNum = this.data.pageNum
      params.pageSize = this.data.pageSize
      this.setData({
        params: params,
        url: opt.url,
        loadType: opt.loadType,
        canLoad: false
      })
      this.initRequest()
    },
    /************************************
     * 数据请求部分
     */
    // 通过url和参数，初始化请求
    initRequest() {
      wx.showLoading({
        title: '加载中',
      })
      Fetch(this.data.url, this.data.params).then(res => {
        this.triggerEvent('updateListFn', res)
        let notEnd = res.pageSize === res.list.length
        this.setData({
          canLoad: true,
          notEnd: notEnd,
          pageNum: res.pageNum + res.list.length,
          pageSize: res.pageSize,
        })
        if (this.data.loadType === 'insert') {
          this.setData({
            listScrollTop: 0
          })
        }
        wx.hideLoading()
      })
    },
    /************************************
     * 事件触发
     */
    // 向下加载更多
    loadMore() {
      this.triggerEvent('getScrollListFn')
    },
    /**********************************
     * DOM 操作
     */
    // 初始化DOM
    initDOM() {
      this.setData({
        srollHeight: srollHeight,
      })
    },

  }
});
