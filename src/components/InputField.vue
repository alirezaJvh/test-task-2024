<script lang="ts" setup>

type InputFieldProps = {
    label: string;
    modelValue: string;
    placeholder: string;
}

defineProps<InputFieldProps>();

const emit = defineEmits(['update:modelValue'])

function onChangeInput(event: Event) {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
}

</script>

<template>
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 ">{{ label }}</label>
        <input 
            :value="modelValue"
            :placeholder="placeholder" 
            @change="onChangeInput($event)"
            type="text" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-offset-orange-400 focus:border-orange-400 outline-none block w-full p-2.5" 
        />
    </div>
</template>