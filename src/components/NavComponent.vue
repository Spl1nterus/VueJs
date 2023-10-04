<script setup lang="ts">
import { navItems, ROOT } from '@/shared/lib/constants'
import { UserOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <header class="header">
    <router-link :to="ROOT" class="logo">PI</router-link>
    <nav>
      <ul class="nav">
        <li v-for="item in navItems" :key="item.name" class="nav_item">
          <router-link active-class="active" :to="item.path">{{ item.name }}</router-link>
          <ul class="dropdown" v-if="item.children">
            <li
              v-for="child in item.children"
              :key="child.name"
              class="nav_item dropdown_child_item"
            >
              <router-link active-class="active" :to="child.path">{{ child.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <a-avatar class="avatar">
      <template #icon><UserOutlined /></template>
    </a-avatar>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: sticky;
  border-bottom: solid 1px #e8e9f0;
  background-color: #fff;
  top: 0;
  z-index: 2;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  background-image: linear-gradient(to right bottom, rgb(38, 247, 199), rgb(22, 139, 250));
  font-family: monospace;
  font-weight: bold;
  font-size: 18px;
  border-radius: 4px;
  text-decoration: none;
}
.nav {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav_item {
  position: relative;
  a {
    display: block;
    font-size: 14px;
    color: var(--slate);
    text-decoration: none;
    padding: 16px 12px;
    border-bottom: 2px solid transparent;
  }
  .active {
    color: var(--midnight);
    border-color: var(--runn-blue);
  }
}

.dropdown {
  list-style: none;
  position: absolute;
  display: none;
  padding: 12px 20px;
  min-width: 160px;
  border-radius: 2px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);
  background: #fff;
  right: 0;
  top: 100%;
}
.dropdown_child_item a {
  border-bottom: none;
  padding: 8px 0;
}
.nav_item:hover .dropdown {
  display: block;
}

.avatar {
  margin-left: auto;
}
</style>
