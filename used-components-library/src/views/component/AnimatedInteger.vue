<template>
  <span>{{ animatedValue }}</span>
</template>

<script>
import { TweenLite } from 'gsap/TweenMax'
export default {
  name: 'AnimatedInteger',
  props: {
    value: {
      type: [Number, String]
    }
  },
  data () {
    return {
      tweeningValue: 0
    }
  },
  computed: {
    animatedValue () {
      TweenLite.to(this.$data, 0.5, { tweeningValue: this.value })
      return this.tweeningValue.toFixed(0)
    }
  }
}
</script>
