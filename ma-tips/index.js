Component({
  properties: {
      content: String,
      isShow: {
          type: Boolean,
          value: false
      },
      duration: {
          type: Number,
          value: 3000
      }
  },
  methods: {
      show: function show(obj) {
          let duration =  this.data.duration;
          this._timer && clearTimeout(this._timer);
          this.setData({
              isShow: true,
              content: obj.content
          });

          if (duration > 0 && duration !== Infinity) {
              this._timer = setTimeout(() => {
                  this.hide();
              },duration)
          }
      },
      hide: function hide() {
          this._timer = clearTimeout(this._timer);
          this.setData({
              isShow: false
          });
      }
  }
});
