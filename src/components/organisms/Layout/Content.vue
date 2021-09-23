<template>
  <div id="content-wrap" class="content-wrapper">
    <section v-if="$slots.header" class="content-header">
      <slot name="header"></slot>
    </section>

    <section class="content">
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>
