<template>
  <router-link tag="li" :to="router">
    <a href="#">
      <i :class="icon"></i>
      <span><slot /></span>
    </a>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ default: '' }) router!: string
  @Prop({ default: '' }) icon!: string
}
</script>
