<template>
  <el-card class="box-card" >
    <div slot="header" class="clearfix">
      <span>{{ card.word }}</span>
    </div>
    <div style="display: flex">
      <div class="text-wp" style="display: inline-block">
        <div class="text item"><strong>Subject : </strong>{{ card.subject }}</div>
        <div class="text item"><strong>Abstract : </strong>{{ card.abstract }}</div>
        <div class="text item"><strong>InterLink : </strong>{{ card.interLink }}</div>
      </div>
      <div class="text-wp" style="display: inline-block">
        <div class="text item"><strong>Subject : </strong>{{ card.subject }}</div>
        <div class="text item"><strong>Abstract : </strong>{{ card.abstract }}</div>
        <div class="text item"><strong>InterLink : </strong>{{ card.interLink }}</div>
      </div>
    </div>
    
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
