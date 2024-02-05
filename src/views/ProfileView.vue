<script lang="ts" setup>
import { ref, reactive } from 'vue'; 
import BaseCard from '@/components/BaseCard.vue'
import BaseModal from '@/components/BaseModal.vue'
import EmptyState from '@/components/EmptyState.vue'
import InputField from '@/components/InputField.vue'
import BaseButton from '@/components/BaseButton.vue'

const addBookModal = ref(false);
const addActivitesModal = ref(false);
const newBook = reactive({ name: '', pages: '', gener: ''})
const newActivity = ref('')

</script>

<template>
    <div class="flex gap-4 py-10 w-full max-w-[1100px] px-4 mx-auto">
        <BaseCard class="w-1/4 flex justify-center">
            <div>
                <img class="rounded-full w-28" src="../assets/avatar.jpg"  />
            </div>
            <div class="pt-2">Alireza Javaheri</div>
        </BaseCard>
        <div class="flex flex-col gap-5 w-3/4">
            <BaseCard @click:action="addBookModal = true" title="My books" action="Add Book">
                <div class="py-3">
                    <EmptyState name="book" text="You don't have book." />
                </div>
            </BaseCard>

            <BaseCard @click:action="addActivitesModal = true" title="My Activities" action="Add Activities">
                <div class="py-3">
                    <EmptyState name="book" text="You don't have book." />
                </div>
            </BaseCard>
        </div>
        <BaseModal v-if="addBookModal" @click:close="addBookModal = false" title="Add New Book">
            <div class="flex flex-col gap-4 p-6">
                <InputField v-model="newBook.name" label="Name"  placeholder="Book Name"  />
                <InputField v-model="newBook.pages" label="Pages" placeholder="Book number of Pages"  />
                <InputField v-model="newBook.gener" label="Gener" placeholder="Gener of Book"  />
            </div>
            <div class="flex justify-center pb-6">
                <BaseButton text="Add New Book" />
            </div>
        </BaseModal>

        <BaseModal v-if="addActivitesModal" @click:close="addActivitesModal = false" title="Add New Activity">
            <div class="flex flex-col gap-4 p-6">
                <InputField v-model="newActivity" label="Descripton" placeholder="Write you activity"  />
            </div>
            <div class="flex justify-center pb-6">
                <BaseButton text="Add New Activity" />
            </div>
        </BaseModal>
    </div>
</template>

