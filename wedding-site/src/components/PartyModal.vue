<template>
    <div class="modal" v-if="isVisible">
        <button @click="closeModal">Close</button>
        <h1>Modal</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const isVisible = ref(false)


export default defineComponent({
    name: 'PartyModal',
    props: {
        honoredGuests: {
            type: Array,
            required: true
        },
        familyPairs: {
            type: Array,
            required: true
        },
        modalOpen: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            combinedArray: [],
            isVisible
        }
    },
    watch: {
        modalOpen() {
            console.log('modalOpen changed')
            isVisible.value = true
        }
    },
    methods: {
        closeModal() {
            isVisible.value = false
        }
    }
})
</script>

<style scoped>
.modal {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: var(--color-primary);
    border-radius: 10px;
    z-index: 100;
    margin: 0 auto;
}
</style>