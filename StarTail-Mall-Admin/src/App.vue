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
        :loading="loading"
        :error-message="errorMessage"
        @update:query="query = $event"
        @update:status="status = $event"
        @select-row="selectedRow = $event"
        @retry="loadRows"
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
import { fetchModuleRows } from './services/adminData'

const activeKey = ref(modules[0].key)
const query = ref('')
const status = ref('all')
const selectedRow = ref(null)
const rows = ref([])
const loading = ref(false)
const errorMessage = ref('')
let requestVersion = 0

const activeModule = computed(() => modules.find((item) => item.key === activeKey.value) || modules[0])

const filteredRows = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  return rows.value.filter((row) => {
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

async function loadRows() {
  const currentRequest = ++requestVersion
  loading.value = true
  errorMessage.value = ''

  try {
    const result = await fetchModuleRows(activeKey.value)
    if (currentRequest === requestVersion) {
      rows.value = result
    }
  } catch (error) {
    if (currentRequest === requestVersion) {
      rows.value = []
      errorMessage.value = error instanceof Error ? error.message : '数据加载失败，请稍后重试。'
    }
  } finally {
    if (currentRequest === requestVersion) {
      loading.value = false
    }
  }
}

watch(activeKey, () => {
  query.value = ''
  status.value = 'all'
  selectedRow.value = null
  loadRows()
})

loadRows()
</script>
