<template>
  <aside class="sidebar">
    <div class="brand">
      <img :src="logo" alt="" class="brand-logo" />
      <div>
        <h1>星轨商城</h1>
        <p>后台管理</p>
      </div>
    </div>

    <nav class="nav-list" aria-label="后台模块">
      <button
        v-for="item in modules"
        :key="item.key"
        class="nav-item"
        :class="{ active: activeKey === item.key }"
        type="button"
        @click="$emit('select', item.key)"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </aside>
</template>

<script setup>
import logo from '../../static/logo.png'

defineProps({
  modules: {
    type: Array,
    required: true
  },
  activeKey: {
    type: String,
    required: true
  }
})

defineEmits(['select'])
</script>
