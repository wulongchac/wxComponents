Component({
  properties: {
    content: {
      type: String,
      value: '确定'
    },
      propsData: {
      type: Object,
      value: {}
    },
      paddings: {
      type: Boolean,
          value:true
      },
      types: {
        type: String,
          value:'theme'
      }
  },
  methods: {
    handleTap() {
      this.triggerEvent('pillClick', this.properties.propsData);
    }
  }
});
