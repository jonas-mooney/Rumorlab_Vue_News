<template>
  <div class="content">
    <div class="q-pa-md formWrapper" style="max-width: 400px">

      <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
      >
        <h4 class="formHeader">Sign Up</h4>
        <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="First and last name"
            hide-hint
            color="#2c90e0"
            label-color="black"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
            filled
            v-model="name"
            label="Your email *"
            hint="Your email goes here"
            hide-hint
            color="#2c90e0"
            label-color="black"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
            filled
            type="number"
            v-model="age"
            label="Your age *"
            color="#2c90e0"
            label-color="black"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

        <q-toggle
            class="terms"
            v-model="accept"
            color="primary"
            keep-color
            label="I accept the license and terms"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
    <p class="signInPrompt">Already have an account? <router-link class="signIn" to="/">Sign in</router-link></p>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  beforeMount() {
      this.$store.commit('selectCategoryPage', true)
  },
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>

<style scoped>
  .content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*position: fixed;*/
  }
  .formWrapper {
    background-color: #2c90e0;
    background-color: white;
    width: 80vw;
    border-radius: 5px;
  }
  .formHeader {
    text-align: center;
    margin: .5em;
  }
  .signInPrompt {
    color: white;
    font-size: 1.2em;
  }
  .signIn {
    color: #2c90e0;
    cursor: pointer;
    text-decoration: none;
  }


</style>