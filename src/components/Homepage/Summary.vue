<template>
   <div>
       <h2>Summary Div</h2>
       <v-row>
            <v-col cols="4" sm="3" md="4">
              <v-app>
                  <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>Word of the Day</div>
        <p class="display-1 text--primary">
          el·ee·mos·y·nar·y
        </p>
        <p>adjective</p>
        <div class="text--primary">
          relating to or dependent on charity; charitable.<br>
          "an eleemosynary educational institution."
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="teal accent-4"
          @click="reveal = true"
        >
          Learn More
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <v-card style="height: 100%;">
          <v-card-text class="pb-0">
            <p class="display-1 text--primary">
              Origin
            </p>
            <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              text
              color="teal accent-4"
              @click="reveal = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-app>
            </v-col>
            <v-col cols="4" sm="3" md="4">
            
            </v-col>
            <v-col cols="4" sm="3" md="4">test  

            </v-col>

        </v-row>

       
  </div>
</template>

<script>
export default {
  name: 'InforCard',
  components: {}
}
</script>



<style>

</style>