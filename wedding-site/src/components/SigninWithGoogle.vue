<template>
   <button class="google-signin-btn" @click="signInWithGoogle">
          <img src="https://i0.wp.com/www.ps78.com/wp-content/uploads/2021/01/google-logo.png?ssl=1" alt="Google logo" />
          <span>Sign in with Google</span>
</button>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '@/firebase'
import { isAdminEmail } from '@/admins'


export default defineComponent({
  name: 'SigninWithGoogle',
  components: {},
  setup(_, { emit }) {
    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider()

      try {
        await signInWithRedirect(auth, provider)

        const user = auth.currentUser
        if (user && isAdminEmail(user.email)) {
          localStorage.setItem('admin', 'true')
        } else {
          localStorage.removeItem('admin')
        }
        
        emit('signed-in')
    } catch (error) {
        console.error(error)
      }
    }
    

    return {
      signInWithGoogle
    }
  }
})
</script>

<style scoped>

.google-signin-btn {
  display: flex;
  align-items: center;
  background-color: #f6f9ff;
  color: rgb(24, 24, 24);
  width: 240px;
  height: 40px;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.25);
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin: 0 auto;
}

.google-signin-btn img {
  width: 18px;
  height: 18px;
  margin: 8px;
}

.google-signin-btn span {
  display: block;
  margin: auto;
}
</style>