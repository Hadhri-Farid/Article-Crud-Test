<template>
  <v-app>
    <articles></articles>
  </v-app>
</template>

<script>

import Articles from './components/Articles'

export default {
  data () {
    return {
    }
  },
  name: 'App',

  components: {
      Articles
    }
}
</script>
