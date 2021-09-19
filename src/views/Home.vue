<template>
  <div class="home">
    <div class="container">
      <Tabs @changes="changes" />
      <TabContent :hover="hover" />
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import TabContent from '@/components/TabContent.vue'

export default {
  name: 'Home',
  components: {
    Tabs,
    TabContent
  },
  data () {
    return {
      hover: 'text'
    }
  },
  methods: {
    changes (item) {
      this.hover = item
    }
  }
}
</script>
