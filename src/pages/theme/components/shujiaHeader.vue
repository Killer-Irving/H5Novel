<template>
  <div class="shujia-header">
    <span class="title-">XXXX免费小说</span>
    <div v-if="theme.shujia.isEditor">
      <span class="t28" @click="confirmEditor">完成</span>
    </div>
    <div class="f c icon-" v-else>
      <img src="@/assets/imgs/lishi.png" />
      <img src="@/assets/imgs/sousuo.png" />
      <img src="@/assets/imgs/shujiaguanli.png" @click="setIsEditor" />
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "index",
  data() {
    return {};
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
    setIsEditor() {
      this.$store.commit("setIsEditor");
    },
    confirmEditor() {
      this.$store.commit("setIsEditor");
    }
  }
};
</script>
<style lang="scss" scoped>
.shujia-header {
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.title- {
  height: 38px;
  font-size: 40px;
  font-family: DFPLiJinHeiW8-GB;
  font-weight: 400;
  color: rgba(45, 45, 45, 1);
}
.icon- {
  img {
    width: 40px;
    height: 40px;
    margin-left: 50px;
  }
}
</style>