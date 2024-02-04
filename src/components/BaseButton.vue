<script lang="ts" setup>

type ButtonProps = {
    text: string;
    disabled?: boolean
}

defineProps<ButtonProps>();

const emit = defineEmits(['click']);

function onClickHandler() {
    emit('click')
}
</script>

<template>
    <button 
        @click="onClickHandler" 
        :disabled="disabled" 
        class="h-[30px] px-4 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-300 text-sm rounded text-white" 
        type="button">
        {{ text }}
    </button>
</template>