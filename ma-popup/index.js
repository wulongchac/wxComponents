Component({
    properties: {
        isShow: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ''
        },
        msg: {
            type: String,
            value: ''
        },
        imgUrl: {
            type: String,
            value: ''
        },
        leftBtn:{
            type: String,
            value: '取消'
        },
        rightBtn:{
            type: String,
            value: '确定'
        },
        propData: {
            type: Object,
            value: {}
        }
    },
    methods: {
        show(opt) {
            let resetData = Object.assign(this.properties, opt)

            this.setData({
                isShow: true,
                title: resetData.title,
                msg: resetData.msg,
                imgUrl: resetData.imgUrl,
                leftBtn: resetData.leftBtn,
                rightBtn: resetData.rightBtn,
                propData: resetData.propData
            });
        },
        hide() {
            this.setData({
                isShow: false
            });
        },
        submit () {
            this.properties.success(this.properties.propData)
        }
    }
});
