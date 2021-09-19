<template>
  <Loading :active="isLoading" />
  <div class="about bg-primary">
    <div class="container text-white">
      <h2 class="l-title">About our teams</h2>
      <ul class="about-card wrap">
        <li v-for="item in temp" :key="item.name">
          <img :src="item.imageUrl" :alt="item.name">
          <h4 class="about-card-txt">{{ item.name }}</h4>
          <p class="about-card-txt">{{ item.city }}</p>
          <p class="about-card-txt">{{ item.phone }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      temp: {},
      isLoading: false
    }
  },
  methods: {
    getData () {
      const url = 'https://mocki.io/v1/497557a8-a2a1-4e5a-8b34-4025e9558793'
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.temp = res.data
          this.isLoading = false
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
