<template>
  <div class="title">
    {{msg}}
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ["msg"]
};
</script>


<style lang="less" scoped>

@color: red;

.title {
  color: @color;
}

</style>