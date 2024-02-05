<script lang="ts" setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
    <div class="w-full h-12 bg-white border-t border-gray-300 lg:fixed bottom-0">
      <div class="flex justify-center items-center h-full font-normal">
        ©{{year}} Book Club.
      </div>
    </div>
</template>


