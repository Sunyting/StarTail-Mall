<template>
  <div class="admin-shell">
    <AppSidebar :modules="modules" :active-key="activeKey" @select="selectModule" />

    <main class="workspace">
      <header class="topbar">
        <div>
          <p class="eyebrow">StarTail Mall Admin</p>
          <h2>{{ activeModule.label }}</h2>
        </div>
        <div class="operator">
          <span class="status-dot"></span>
          <span>本地开发</span>
        </div>
      </header>

      <MetricGrid :metrics="activeModule.metrics" />

      <DataPanel
        :module="activeModule"
        :query="query"
        :status="status"
        :filtered-rows="filteredRows"
        @update:query="query = $event"
        @update:status="status = $event"
        @select-row="selectedRow = $event"
      />
    </main>

    <DetailDrawer
      :module="activeModule"
      :row="selectedRow"
      @close="selectedRow = null"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import AppSidebar from './components/AppSidebar.vue'
import DataPanel from './components/DataPanel.vue'
import DetailDrawer from './components/DetailDrawer.vue'
import MetricGrid from './components/MetricGrid.vue'
import { modules } from './data/modules'

const activeKey = ref(modules[0].key)
const query = ref('')
const status = ref('all')
const selectedRow = ref(null)

const activeModule = computed(() => modules.find((item) => item.key === activeKey.value) || modules[0])

const filteredRows = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  return activeModule.value.rows.filter((row) => {
    const matchesKeyword = !keyword || activeModule.value.searchFields.some((field) => {
      return String(row[field] || '').toLowerCase().includes(keyword)
    })
    const matchesStatus = status.value === 'all' || row.status === status.value
    return matchesKeyword && matchesStatus
  })
})

function selectModule(key) {
  activeKey.value = key
}

watch(activeKey, () => {
  query.value = ''
  status.value = 'all'
  selectedRow.value = null
})
</script>
