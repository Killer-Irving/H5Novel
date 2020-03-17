<template>
  <div>{{theme.tabIndex}}</div>
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
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>