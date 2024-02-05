<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue'

type CardProps = {
    image?: string;
    title?: string;
    action?: string;
}

defineProps<CardProps>()

const emit = defineEmits('click:action')

function onClickButton() {
    emit('click:action')
}

</script>

<template>


<div class="bg-white border border-gray-200 rounded-lg">
    <div v-if="image">
        <img class="rounded-t-lg" :src="image"  />
    </div>
    <div class="p-5">
        <div v-if="title" class="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h5>
            <BaseButton v-if="action" @click="onClickButton()" :text="action"  />
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</div>


</template>