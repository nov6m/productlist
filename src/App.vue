<template>
 <div class="wrapper">
   <add-product/>
   <list-product/>
 </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'
import ListProduct from '@/components/ListProduct.vue'

export default {
  name: 'App',
  components: {
    AddProduct,
    ListProduct
  }
}
</script>

<style lang="scss">

</style>
