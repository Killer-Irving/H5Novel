<template>
  <div class="f c h108 botope5 bottom-">
    <div 
    class="fsb w-full"
    v-if="theme.shujia.isEditor">
      <div class="w5005 c2121 t28 fc h108">全选</div>
      <div class="line-clo"></div>
      <div class="w5005 c2121 t28 fc h108">删除（0）</div>
    </div>
    <div
      v-else
      class="f-c c w2505"
      v-for="(item,index) in entry"
      :key="index"
      @click="setTableIndex(index)"
    >
      <img class="w40h40" :src="theme.tabIndex===index?item.img_active:item.img" />
      <span
        class="t20 mt8"
        :style="{color:theme.tabIndex===index?'#DF7446':'#979797'}"
      >{{item.title}}</span>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
const shujia = require("@/assets/imgs/shujia.png");
const shujia_active = require("@/assets/imgs/shujia_active.png");
const shucheng = require("@/assets/imgs/shucheng.png");
const shucheng_active = require("@/assets/imgs/shucheng_active.png");
const fuli = require("@/assets/imgs/fuli.png");
const fuli_active = require("@/assets/imgs/fuli_active.png");
const wode = require("@/assets/imgs/wode.png");
const wode_active = require("@/assets/imgs/wode_active.png");

export default {
  name: "bottom",
  data() {
    return {
      entry: [
        { img: shujia, img_active: shujia_active, title: "书架" },
        { img: shucheng, img_active: shucheng_active, title: "书城" },
        { img: fuli, img_active: fuli_active, title: "福利" },
        { img: wode, img_active: wode_active, title: "我的" }
      ]
    };
  },
  props: {},
  components: {},
  mounted() {},
  created() {},
  computed: {
    ...mapState({
      theme: state => state.theme
    })
  },
  watch: {},
  methods: {
    setTableIndex(index) {
      this.$store.commit("setTabIndex", index);
    }
  }
};
</script>
<style lang="scss" scoped>
.bottom- {
  position: fixed;
  background-color: white;
  width: 100%;
  left: 0;
  bottom: 0;
}
.line-clo{
  width: 1px;
  height: 63px;
  background-color: #E4E6E5;
}
</style>