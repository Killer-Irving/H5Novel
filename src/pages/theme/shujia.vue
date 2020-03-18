<template>
  <div class="shujia-">
    <ShujiaHeader />

    <div class="top- f c">
      <img src="@/assets/imgs/shujia.png" class="w90h120 mr24" style="border:1px solid red" />
      <div class="f-c jsb h120">
        <span class="t28 f-B c2d2d vertical-1">万古仙穹</span>
        <span class="c9797 t24 vertical-2">
          天地为棋盘，众生为棋子！不愿做棋子，当为
          下棋人！棋败，身死道消！棋胜，万寿无疆...
        </span>
      </div>
    </div>

    <div v-for="item in 10" class="f c jsb padl40 mt48">
      <div class="f c">
        <img src="@/assets/imgs/shujia.png" class="w100h135 mr30" style="border:1px solid red" />
        <div class="f-c jsb h90">
          <span class="t32 f-B c2d2d vertical-1">神医毒妃</span>
          <span class="c9797 t24 vertical-1">杨十六</span>
        </div>
      </div>
      <img src="@/assets/imgs/xuanzhong.png" class="w34h34 mr30" v-if="theme.shujia.isEditor" />
    </div>

    <div class="f c mt48 padl40">
      <div class="w100h135 boe6e5 fc mr30">
        <span class="add-">+</span>
      </div>
      <span class="t26 cecd">添加你喜欢的小说</span>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import ShujiaHeader from "./components/shujiaHeader.vue";
export default {
  name: "index",
  data() {
    return {};
  },
  props: {},
  components: { ShujiaHeader },
  mounted() {},
  created() {},
  computed: {
    ...mapState({
      theme: state => state.theme
    })
  },
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.shujia- {
}
.top- {
  width: 671px;
  height: 168px;
  border-radius: 10px;
  padding: 24px;
  margin-left: 40px;
}
.add- {
  color: #d9dbda;
  font-size: 60px;
}
.boe6e5 {
  border: 2px solid #e4e6e5;
}
</style>