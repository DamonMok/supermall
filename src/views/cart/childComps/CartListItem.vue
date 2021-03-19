<template>
  <div class="cart-list-item">
    {{ product }}
  </div>
</template>

<script>
export default {
  name: 'cartListItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>