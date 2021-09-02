<template>
  <div
    class="lines-ellipsis"
    :title="isShowTitle ? text : undefined"
    ref="lineEllipsisRef"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'vue-lines-ellipsis',
  props: {
    text: {
      type: String,
      require: true
    },

    isShowTitle: {
      type: Boolean,
      require: false,
      default: true,
    },

    // 
    maxLine: {
      type: Number,
      require: false
    }
  },

  mounted() {
    this.initData()
  },

  methods: {
    initData() {
      if (!this.$props.text) return
      const ele = this.$refs.lineEllipsisRef
      const words = this.$props.text.split('');

      // 设置 maxLine， 根据当前的 line-height 计算要展示的行高
      if (this.$props.maxLine) {
        const styles = window.getComputedStyle(ele);
        const lineHeight = parseInt(styles.lineHeight);

        // 必须父级存在 line-height 属性
        if (lineHeight) {
          while (ele.offsetHeight > this.$props.maxLine * lineHeight) {
            words.pop()
            this.$refs.lineEllipsisRef.innerHTML = words.join('') + '...'
          }
        }
      } else {

        // 如果没有设置  maxLine， 则根据父级元素的 height, 能展示多少展示多少。
        while (ele.clientHeight > ele.parentNode.clientHeight) {
          words.pop()
          this.$refs.lineEllipsisRef.innerHTML = words.join('') + '...'
        }
      }
    }
  }
}
</script>
