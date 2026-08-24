<template>
  <section class="metrics-grid" aria-label="经营概览">
    <article v-for="metric in metrics" :key="metric.label" class="metric-card">
      <span>{{ metric.label }}</span>
      <strong>{{ metric.value }}</strong>
      <small>{{ metric.tip }}</small>
    </article>
  </section>
</template>

<script setup>
defineProps({
  metrics: {
    type: Array,
    required: true
  }
})
</script>
