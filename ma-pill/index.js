Component({
  properties: {
    iconName: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    subTitle: {
      type: String,
      value: ''
    },
    pillType: {
      type: String,
      value: '0'  // 0-> 图标/标题; // 1 图标/标题/右侧顶格副标题
    },
    value: {
      type: String,
      value: ''
    },
    valueObj: {
      type: Object,
      value: {}
    },
    imgSrc: {
      type: String,
      value: ''
    },
    rightIcon: {
      type: Boolean,
      value: true
    },
    noBorder: {
      type: Boolean,
      value: false
    },
    titleFull: {
      type: Boolean,
      value: false
    },
    cite: {
      type: String,
      value: ''
    },
    heightAuto: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    handleTap: function handleTap() {
      let rt = this.data.value ? this.data.value : this.data.valueObj
        
      this.triggerEvent('pillClick', rt);
    }
  }
});
