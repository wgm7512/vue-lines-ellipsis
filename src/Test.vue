<template>
  <div class="test">
    <lineEllipsis :text="text" :maxLine="3" />
    <div style="height: 40px"></div>
    <lineEllipsis :text="text" />
  </div>
</template>

<script>
import lineEllipsis from './VueLinesEllipsis.vue'
export default {
  data() {
    return {
      text: '唧唧复唧唧，木兰当户织，不闻机杼声，惟闻女叹息。女亦无所思，女亦无所忆。昨夜见军帖，可汗大点兵。军书十二卷，卷卷有爷名。阿爷无大儿，木兰无长兄。愿为市鞍马，从此替爷征。东市买骏马，西市买鞍鞯。南市买辔头，北市买长鞭。不闻爷娘唤女声，只闻黄河之水鸣溅溅。'
    }
  },
  components: {
    lineEllipsis
  }
}
</script>

<style scoped>
.test {
  width: 480px;
  font-size: 16px;
  line-height: 24px;
  height: 74px;
  padding: 4px;
  box-sizing: border-box;
}
</style>