<template>
  <el-card class="box-card" >
    <div slot="header" class="clearfix">
      <span>{{ card.word }}</span>
    </div>
    <div class="text item"><strong>Infobox : </strong>{{ card.Infobox }}</div>
    <div class="text item"><strong>Abstract : </strong>{{ card.abstract }}</div>
    <div class="text item"><strong>Direcoty_Context : </strong>{{ card.Direcoty_Context }}</div>    
  </el-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      card: state => state.knowledge.card
    })
  }
}
</script>

<style>
.box-card {
  margin: 30px;
  max-width: 900px;
}
.box-card .item {
  margin: 30px;
}
</style>
