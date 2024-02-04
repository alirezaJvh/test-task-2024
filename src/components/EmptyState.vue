<script lang="ts" setup>
import { computed } from 'vue';

type EmptyStateProps = {
    name: string;
    text?: string;
}

defineProps<EmptyStateProps>();

// const imageAddress = computed(() => {
//     switch (name) {
//         case 'book':
//             return '../assets/empty-state/book.svg'
//         default:
//             break;
//     }
//     return ''
// })

</script>

<template>
    <div class="w-full flex flex-col items-center gap-2">
        <div>
            <img src="../assets/empty-state/book.svg" />
        </div>
        <div v-if="text" class="text-sm text-gray-500"> {{ text }}</div>
    </div>
</template>