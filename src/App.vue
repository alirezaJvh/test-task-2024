<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

const value = ref('')
</script>

<template>
  <TheHeader />
  <div class="h-full min-h-[calc(100vh-106px)]">
    <router-view></router-view>
  </div>
  <TheFooter />
</template>