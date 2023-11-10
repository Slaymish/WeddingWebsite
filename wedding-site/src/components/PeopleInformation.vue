<template>
    <div class="person-information">
        <h2>People</h2>
        <div class="flex-container">
            <PersonInfo
                v-for="person in people"
                :key="person.id"
                :name="person.name"
                :blurb="person.blurb"
                :pictureURL="person.pictureURL"
            />
        </div>
    </div>
</template>
  
<script lang="ts">
    import PersonInfo from "../components/PersonInfo.vue"
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: 'PeopleInformation',
    props: {
        people: {
            type: Array,
            required: true
        }
    },
    components: { PersonInfo },
    setup(){}
  })
</script>

<style scoped>
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

@media (min-width: 600px) {
    .flex-container {
        justify-content: start;
    }
}

.person-information .PersonInfo {
    flex: 1 1 200px;
}
</style>