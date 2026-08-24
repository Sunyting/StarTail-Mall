<template>
  <section class="content-panel">
    <div class="panel-head">
      <div>
        <h3>{{ module.tableTitle }}</h3>
        <p>{{ module.tableDesc }}</p>
      </div>
      <button type="button" class="primary-button">{{ module.action }}</button>
    </div>

    <div class="toolbar" aria-label="列表筛选">
      <label class="search-field">
        <span>搜索</span>
        <input
          :value="query"
          type="search"
          :placeholder="module.searchPlaceholder"
          @input="$emit('update:query', $event.target.value)"
        />
      </label>

      <label class="select-field">
        <span>状态</span>
        <select :value="status" @change="$emit('update:status', $event.target.value)">
          <option value="all">全部</option>
          <option v-for="item in module.statusOptions" :key="item.value" :value="item.value">
            {{ item.label }}
          </option>
        </select>
      </label>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th v-for="column in module.columns" :key="column.key">{{ column.label }}</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredRows" :key="row.id">
            <td v-for="column in module.columns" :key="column.key">
              <span v-if="column.key === 'status'" class="status-badge" :class="row.status">
                {{ row[column.key] }}
              </span>
              <span v-else>{{ row[column.key] }}</span>
            </td>
            <td>
              <button type="button" class="text-button" @click="$emit('select-row', row)">查看</button>
            </td>
          </tr>
          <tr v-if="!filteredRows.length">
            <td class="empty-cell" :colspan="module.columns.length + 1">暂无匹配数据</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
defineProps({
  module: {
    type: Object,
    required: true
  },
  query: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  filteredRows: {
    type: Array,
    required: true
  }
})

defineEmits(['update:query', 'update:status', 'select-row'])
</script>
