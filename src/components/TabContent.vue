<template>
  <div class="content">
    <div v-show="hover === 'text'">
      <label for="name">姓名</label>
      <input type="text" id="name" placeholder="請輸入姓名">
    </div>
    <div v-show="hover === 'radio'" >
      <div>
        <input type="radio" value="option1" id="defaultRadio1">
        <label for="defaultRadio1">
          Default radio 1
        </label>
      </div>
      <div>
        <input type="radio" value="option2" id="defaultRadio2">
        <label for="defaultRadio2">
          Default radio 2
        </label>
      </div>
      <div>
        <input type="radio" value="option3" id="defaultRadio3">
        <label for="defaultRadio3">
          Default radio 3
        </label>
      </div>
    </div>
    <div v-show="hover === 'select'">
      <select class="form-select" aria-label="Default select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: ['hover']
}
</script>
