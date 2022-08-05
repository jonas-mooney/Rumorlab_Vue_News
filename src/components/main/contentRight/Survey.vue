<template>
    <div class="q-pa-md survey">
      <q-form @submit="onSubmit" class="q-gutter-md form">
        <h6>How did you find rumorlab?</h6>
        <q-radio name="shape" v-model="shape" val="wordOfMouth" label="Word of Mouth" />
        <q-radio name="shape" v-model="shape" val="facebook" label="Facebook" />
        <q-radio name="shape" v-model="shape" val="twitter" label="Twitter" />
        <q-radio name="shape" v-model="shape" val="other" label="Other" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>

<!--      <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">-->
<!--        <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>-->
<!--        <q-separator />-->
<!--        <q-card-section class="row q-gutter-sm items-center">-->
<!--          <div-->
<!--              v-for="(item, index) in submitResult"-->
<!--              :key="index"-->
<!--              class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"-->
<!--          >{{ item.name }} = {{ item.value }}</div>-->
<!--        </q-card-section>-->
<!--      </q-card>-->
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Survey',
  setup () {
    const submitResult = ref([])

    return {
      shape: ref('line'),
      submitResult,

      onSubmit (evt) {
        const formData = new FormData(evt.target)
        const data = []

        for (const [ name, value ] of formData.entries()) {
          data.push({
            name,
            value
          })
        }

        submitResult.value = data
      }
    }
  }
}
</script>

<style scoped>
.survey {
  background-color: #eeeeee;
  width: 26vw;
  min-width: 210px;
  margin-top: 2em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h6 {
  margin-bottom: 0;
  text-align: center;
}
.form {
  display: flex;
  width: 15em;
  /*flex-wrap: wrap;*/
  flex-direction: column;
  justify-content: center;
}
@media screen and (max-width: 604px) {
  .survey {
    display: none;
  }
}

</style>