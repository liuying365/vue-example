<template>
  <div class="count">
    <h1>Current count is {{ counter }}</h1>
    <button @click="increment"> +1 </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    'counter': 'counter'
  }),
  methods: mapActions([
    'increment'
  ])
}
</script>

<style scoped>

</style>
