<template>
  <div class="button-tab">
    <a href="#" v-for="tab in tabs" :key="tab.title" @click="changeHandler(tab.id)">{{ tab.title }}</a>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: [
        {
          title: '文字輸入',
          id: 'text'
        },
        {
          title: '選項按鈕',
          id: 'radio'
        },
        {
          title: '下拉',
          id: 'select'
        }
      ]
    }
  },
  methods: {
    changeHandler (value) {
      this.$emit('changes', value)
    }
  }
}
</script>
