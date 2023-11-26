<template>
    <div class="form-container">
      <transition name="fade" mode="out-in">
        <div :key="step">
        <!-- Step 1 -->
        <div v-if="step === 1">
          <input 
          type="text" 
          id="firstName" 
          ref="firstNameInput" 
          name="firstname" 
          v-model="firstName" 
          @input="clearError" 
          @keyup.enter="nextStep"
          placeholder="First Name"
          >
          <p v-if="errors.firstName" class="error">{{ errors.firstName }}</p>
          <button @click="nextStep">Next</button>
        </div>

        <!-- Step 2 -->
        <div v-if="step === 2">
          <input 
          type="email" 
          id="email" 
          ref="emailInput" name="email" v-model="email" @input="clearError" @keyup.enter="nextStep"
          placeholder="Email">
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
          <button @click="prevStep">Previous</button>
          <button @click="nextStep">Next</button>
        </div>

  
          <!-- Step 3 -->
          <div v-if="step === 3">
            <label>Can you attend?</label>
            <button @click="setAttendance(true)">Yes</button>
            <button @click="setAttendance(false)">No</button>
          </div>
  
          <!-- Step 4 -->
          <div v-if="step === 4 && attending">
            <label>Do you have specific dietary requirements?</label>
            <button @click="setDietaryRequirements(true)">Yes</button>
            <button @click="setDietaryRequirements(false)">No</button>
          </div>
  
          <!-- Step 5 -->
          <div v-if="step === 5 && hasDietaryRequirements 
          || step === 5 && !hasDietaryRequirements">
            <!-- Additional inputs for dietary requirements -->
            <label for="dietaryRequirements">Dietary Requirements</label>
            <textarea type="text" id="dietaryRequirements" ref="dietaryRequirementsInput" v-model="dietaryRequirements" @input="clearError" @keyup.enter="nextStep"></textarea>
            <button @click="prevStep">Previous</button>
            <button @click="nextStep">Next</button>
          </div>

          <!-- Confirmation Step -->
        <div v-if="step === 6">
          <h2>Confirm Your RSVP</h2>
          <div class="rsvp-confirmation">
          <p><strong>First Name:</strong> {{ firstName }}</p>
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Attending:</strong> {{ attending ? 'Yes' : 'No' }}</p>
        <p v-if="hasDietaryRequirements"><strong>Dietary Requirements:</strong> {{ dietaryRequirements }}</p>
        <p v-if="!hasDietaryRequirements"><strong>Dietary Requirements:</strong> None</p>

            </div>
          <button @click="prevStep">Edit</button>
          <button @click="submitRSVP">Confirm RSVP</button>
        </div>

        <div v-if="step === 7">
          <h2>Thank you for your RSVP!</h2>
            <p>We have received your RSVP and will be in touch if we have any questions.</p>
          <p>We look forward to seeing you on the day!</p>
        </div>
        </div>
      </transition>
    </div>
  </template>
  

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'MultiStepRSVPForm',
  data() {
    return {
      step: 1,
      firstName: '',
      email: '',
      attending: false,
      hasDietaryRequirements: false,
    dietaryRequirements: '',
      errors: {
        firstName: null,
        email: null
      }
    }
  },
  methods: {
    nextStep() {
    // Before incrementing the step, check if we should skip the dietary requirements step
    if (this.step === 4 && !this.attending) {
      this.step = 6;
    } else if (this.step === 4 && !this.hasDietaryRequirements) {
      this.step = 5; // Go directly to confirmation if no dietary requirements
    } else {
      // Proceed as normal
      this.step++;
    }
    this.focusOnNextInput();
  },
  focusOnNextInput() {
    this.$nextTick(() => {
      if (this.step === 1) {
        this.$refs.firstNameInput.focus();
      } else if (this.step === 2) {
        this.$refs.emailInput.focus();
      } else if (this.step === 5 && this.hasDietaryRequirements) {
        this.$refs.dietaryRequirementsInput.focus();
      }
    });
  },
  prevStep() {
      // If on the confirmation step and the user is not attending, go back to the attendance question
      if (this.step === 6) {
        if (!this.attending) {
          this.step = 3;
        } else if (!this.hasDietaryRequirements) {
          this.step = 4;
        } else {
          this.step--;
        }
      } else {
        this.step--;
      }
    },
    setAttendance(attending) {
    this.attending = attending;
    // Skip to confirmation step if not attending
    if (!attending) {
      this.step = 6;
    } else {
      this.nextStep();
    }
  },
  setDietaryRequirements(requirements) {
    this.hasDietaryRequirements = requirements;
    // If the user has no dietary requirements, skip to the confirmation step
    if (!requirements) {
      this.step = 6; // Assuming step 6 is your confirmation step
    } else {
      this.nextStep();
    }
  },
    validate() {
      let isValid = true
      if (this.step === 1 && !this.firstName) {
        this.errors.firstName = 'Please enter your first name'
        isValid = false
      } else if (this.step === 2 && !this.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        this.errors.email = 'Please enter a valid email'
        isValid = false
      }
      return isValid
    },
    clearError() {
      this.errors.firstName = null
      this.errors.email = null
    },
    submitRSVP() {
      // Here you can handle the final submission, e.g., sending data to a server or Firebase
      console.log("Submitting RSVP:", this.firstName, this.email, this.attending, this.dietaryRequirements);
      // You might want to redirect the user or show a success message after this
      this.nextStep()
    },
  }
})
</script>

<style scoped>
.form-container {
    /* Styling for the form container */

    width: 450px;
    height: auto;
    margin: auto;
    padding: 50px;
    border-radius: 15px;
    background-color: var(--white-mute);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: auto;
    transition: all 0.3s ease-in-out;
}


.form-container div {
    /* Styling for the form steps */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
}

.form-container label {
  /* Styling for labels */
  font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
}

.form-container input,
.form-container select,
.form-container textarea,
.form-container button {
  /* Styling for input fields */
  width: 100%;
    border: 1px solid var(--color-border);
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    font-size: 16px;
    color: var(--color-text);
    background-color: transparent; /* Transparent background */
}


.rsvp-confirmation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 400px;
  width: 100%;
  margin: 0 auto 20px; /* Centering the box with a bottom margin */
  padding: 20px;
  background-color: var(--white-mute);
  border: 2px solid var(--color-border); /* Increased border thickness */
  border-radius: 8px;
  box-sizing: border-box; /* Includes padding and border in the width */
}

.rsvp-confirmation p {
  text-align: left; /* Align text to the left */
  word-wrap: break-word; /* Ensures text wraps to avoid overflow */
  margin: 0 0 10px; /* Adds a bottom margin to paragraphs */
}

.rsvp-confirmation button {
  padding: 10px 20px; /* Adds padding for better touch area */
  background-color: var(--color-accent); /* Adjust this variable as needed */
  color: var(--color-text); /* Ensure contrast for readability */
  border: none;
  border-radius: 4px;
  margin-top: 10px; /* Space between buttons and the text */
  cursor: pointer; /* Indicates an actionable button */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.form-container button:hover {
  background-color: var(--button-hover-color); /* Slightly lighter or darker on hover */
  transition: all 0.3s ease;
}


.form-container button:hover {
  /* Styling for button hover state */
  background-color: var(--color-primary);
    color: var(--white-mute);
    font-weight: bold;
    transform: translateY(-0.1rem) scale(1.05); /* Slight scale for interaction */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.form-container textarea {
  /* Styling for textareas */
  height: 150px;
    font-size: smaller;
}

input {
  /* Styling for input fields */
}

button {
  /* Styling for buttons */
}

.error {
  color: red;
  font-size: 0.8em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
