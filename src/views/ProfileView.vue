<script lang="ts" setup>
import { ref } from 'vue'; 
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
import EmptyState from '@/components/EmptyState.vue'
import InputField from '@/components/InputField.vue'
import BaseButton from '@/components/BaseButton.vue'

const addBookModal = ref(false);
const addActivitesModal = ref(false);
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
            <Card @click:action="addBookModal = true" title="My books" action="Add Book">
                <div class="py-3">
                    <EmptyState name="book" text="You don't have book." />
                </div>
            </Card>

            <Card @click:action="addActivitesModal = true" title="My Activities" action="Add Activities">
                <div class="py-3">
                    <EmptyState name="book" text="You don't have book." />
                </div>
            </Card>
        </div>
        <Modal v-if="addBookModal" @click:close="addBookModal = false" title="Add New Book">
            <div class="flex flex-col gap-4 p-6">
                <InputField label="Name"  />
                <InputField label="Pages"  />
                <InputField label="Gener"  />
            </div>
            <div class="flex justify-center pb-6">
                <BaseButton text="Add New Book" />
            </div>
        </Modal>

        <Modal v-if="addActivitesModal" @click:close="addActivitesModal = false" title="Add New Activity">
            <div class="flex flex-col gap-4 p-6">
                <InputField label="Descripton"  />
            </div>
            <div class="flex justify-center pb-6">
                <BaseButton text="Add New Activity" />
            </div>
        </Modal>
    </div>
</template>

