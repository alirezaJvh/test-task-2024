<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import InputField from '@/components/InputField.vue'
import BaseButton from '@/components/BaseButton.vue'
const rouer = useRouter()
const email = ref('')


function test() {
    console.log('click on test');
    rouer.push({ name: 'profile' })
}
</script>

<template>
    <div class="pt-20 pb-10 flex flex-col justify-center items-center gap-6">
        <InputField v-model="email" label="Email" placeholder="Enter your Email" />
        <BaseButton  text="login" @click="test()" />
    </div>
</template>