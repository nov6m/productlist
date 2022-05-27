<template>
 <div class="wrapper">
   <add-product/>
   <list-product/>
 </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'
import ListProduct from '@/components/ListProduct.vue'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    AddProduct,
    ListProduct
  },
  setup () {
    const store = useStore()

    onMounted(() => {
      if (localStorage.getItem('listProduct') !== null || localStorage.getItem('listProduct') !== '[]') {
        store.commit('setItemsFromLocalStorage')
      }
    })
  }
}
</script>
