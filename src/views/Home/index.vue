<template>
<div>
<!--  home-->
  <TypeNav/>
  <ListContainer/>
  <Recommend/>
  <Rank/>
  <Like/>
  <Floor/>
  <Brand/>
</div>
</template>

<script>
// 非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from '@/views/Home/ListContainer/ListContainer'
import Recommend from '@/views/Home/Recommend/Recommend'
import Rank from '@/views/Home/Rank/Rank'
import Like from '@/views/Home/Like/Like'
import Floor from '@/views/Home/Floor/Floor'
import Brand from '@/views/Home/Brand/Brand'
export default {
  name: 'index',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style scoped>

</style>
