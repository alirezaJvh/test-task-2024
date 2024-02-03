<script setup lang="ts">
import { ref } from 'vue';
import InputField from '@/components/InputField.vue'

const email = ref('')
</script>

<template>
    <div class="pt-20 pb-10 flex flex-col justify-center items-center gap-6">
        <InputField v-model="email" label="salam" placeholder="test"  />
    </div>
</template>