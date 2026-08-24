<template>
  <div v-if="row" class="drawer-mask" @click.self="$emit('close')">
    <aside class="detail-drawer" aria-label="详情">
      <header class="drawer-head">
        <div>
          <p>{{ module.label }}</p>
          <h3>{{ row[module.primaryField] }}</h3>
        </div>
        <button type="button" class="icon-button" aria-label="关闭详情" @click="$emit('close')">x</button>
      </header>

      <dl class="detail-list">
        <template v-for="field in module.detailFields" :key="field.key">
          <dt>{{ field.label }}</dt>
          <dd>{{ row[field.key] }}</dd>
        </template>
      </dl>
    </aside>
  </div>
</template>

<script setup>
defineProps({
  module: {
    type: Object,
    required: true
  },
  row: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
</script>
