<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <slot></slot>
    </section>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>
