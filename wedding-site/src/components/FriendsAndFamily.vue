<script lang="ts">
import { defineComponent } from 'vue'
import PersonCard from './PersonCard.vue'
export default defineComponent({
  name: 'FriendsAndFamily',
  components: { PersonCard }
})
</script>

<template>
  <div class="family-details">
    <div class="left-section">
      <div class="second-head">
        <PersonCard
          :name="'Hamish'"
          :title="'Best Bleh'"
          :blurb="'Hi i\'m hamish'"
          :pictureURL="'Poop.webp'"
        />
      </div>
      <div class="parents">
        <div class="parent">
          <PersonCard
            :name="'Wendy'"
            :title="'Best lady'"
            :blurb="'Hi i\'m Wendy'"
            :pictureURL="'../assets/logo.svg'"
          />
        </div>
        <div class="parent">
          <PersonCard
            :name="'Bryon'"
            :title="'Best lady'"
            :blurb="'Hi i\'m Bryon'"
            :pictureURL="'../assets/logo.svg'"
          />
        </div>
      </div>
    </div>
    <div class="right-section">
      <div class="second-head">
        <PersonCard
          :name="'Jamie'"
          :title="'Best lady'"
          :blurb="'Hi i\'m JAmie'"
          :pictureURL="'../assets/logo.svg'"
        />
      </div>
      <div class="parents">
        <div class="parent">
          <PersonCard
            :name="'Lani mum'"
            :title="'Best lady'"
            :blurb="'Hi i\'m Lanimum'"
            :pictureURL="'../assets/logo.svg'"
          />
        </div>
        <div class="parent">
          <PersonCard
            :name="'Steve'"
            :title="'Best lady'"
            :blurb="'Hi i\'m steve'"
            :pictureURL="'../assets/logo.svg'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.family-details {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
}

.left-section,
.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.second-head,
.parents {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.second-head {
  max-width: 25%;
  align-self: center;
}

.parent {
  margin: 10px;
  flex: 0 0 auto;
  max-width: 25%;
}

.parents {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
