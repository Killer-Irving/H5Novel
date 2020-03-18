<template>
  <div class="index-page">
    <Shujia v-show="theme.tabIndex===0" />


    <Bottom />
  </div>
</template>


<script>
import { mapState } from "vuex";
import Bottom from "./components/bottom.vue";
import Shujia from "./shujia.vue";

export default {
  name: "index",
  data() {
    return {};
  },
  props: {},
  components: {
    Shujia,
    Bottom
  },
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
.index-page {
  padding-bottom: 128px;
}
</style>