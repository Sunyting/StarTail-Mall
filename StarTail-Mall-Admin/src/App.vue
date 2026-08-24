<template>
  <div class="admin-shell">
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
          @click="activeKey = item.key"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </button>
      </nav>
    </aside>

    <main class="workspace">
      <header class="topbar">
        <div>
          <p class="eyebrow">Vue3 Admin</p>
          <h2>{{ activeModule.label }}</h2>
        </div>
        <div class="operator">
          <span class="status-dot"></span>
          <span>本地开发</span>
        </div>
      </header>

      <section class="metrics-grid" aria-label="经营概览">
        <article v-for="metric in activeModule.metrics" :key="metric.label" class="metric-card">
          <span>{{ metric.label }}</span>
          <strong>{{ metric.value }}</strong>
          <small>{{ metric.tip }}</small>
        </article>
      </section>

      <section class="content-panel">
        <div class="panel-head">
          <div>
            <h3>{{ activeModule.tableTitle }}</h3>
            <p>{{ activeModule.tableDesc }}</p>
          </div>
          <button type="button" class="primary-button">{{ activeModule.action }}</button>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th v-for="column in activeModule.columns" :key="column">{{ column }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in activeModule.rows" :key="row.id">
                <td v-for="column in activeModule.columns" :key="column">
                  {{ row[column] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { modules } from './data/modules'
import logo from '../static/logo.png'

const activeKey = ref(modules[0].key)
const activeModule = computed(() => modules.find((item) => item.key === activeKey.value) || modules[0])
</script>
