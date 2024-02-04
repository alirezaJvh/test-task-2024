<script lang="ts" setup>
import Card from '@/components/Card.vue'
</script>

<template>
    <div class="flex gap-4 py-10 w-full max-w-[1100px] px-4 mx-auto">
        
        <Card class="w-1/4 flex justify-center">
            <div>
                <img class="rounded-full w-28" src="../assets/avatar.jpg"  />
            </div>
            <div class="pt-2">Alireza Javaheri</div>
        </Card>
        <div class="w-3/4">
            <Card title="My books" description="hell"></Card>
        </div>
    </div>
</template>

