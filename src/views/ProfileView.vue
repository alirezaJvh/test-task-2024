<script lang="ts" setup>
import Card from '@/components/Card.vue'
import EmptyState from '@/components/EmptyState.vue'
</script>

<template>
    <div class="flex gap-4 py-10 w-full max-w-[1100px] px-4 mx-auto">
        <Card class="w-1/4 flex justify-center">
            <div>
                <img class="rounded-full w-28" src="../assets/avatar.jpg"  />
            </div>
            <div class="pt-2">Alireza Javaheri</div>
        </Card>
        <div class="flex flex-col gap-5 w-3/4">
            <Card title="My books" description="hell">
                <div class="py-3">
                    <EmptyState name="book" text="You don't have book." />
                </div>
            </Card>

            <Card title="My Activities" description="hell">
                <div class="py-3">
                    <EmptyState name="book" text="You don't have book." />
                </div>
            </Card>
        </div>
    </div>
</template>

