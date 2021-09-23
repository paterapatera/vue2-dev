<template>
  <ul class="sidebar-menu" data-widget="tree">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>
