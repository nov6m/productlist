<template>
 <div class="product" v-show="productList.length">
   <select class="product__filter" @change="changeFilter">
     <option selected disabled>По умолчанию</option>
     <option value="1">Минимальная цена</option>
     <option value="2">Максимаьлная цена</option>
     <option value="3">По наименованию</option>
   </select>
   <div class="product__list ">
      <item-product v-for="({name, description, linkImage, price}, index) of productList"
      :key="index"
      :name="name"
      :description="description"
      :linkImage="linkImage"
      :price="price"
      :index="index"></item-product>
   </div>
 </div>
</template>

<script>
import { computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import ItemProduct from '@/components/ItemProduct.vue'

export default {
  components: {
    ItemProduct
  },
  setup () {
    const store = useStore()

    const productList = computed(() => store.getters.getProductList)

    const changeFilter = function (event) {
      const filterType = event.target.value
      switch (filterType) {
        case '1':
          store.commit('MIN_PRICE_SORT')
          break
        case '2':
          store.commit('MAX_PRICE_SORT')
          break
        case '3':
          store.commit('NAME_SORT')
          break
      }
    }

    watch(productList, (newValue, oldValue) => {
      store.commit('SAVE_LIST_LOCAL_STORAGE')
    })

    return {
      productList,
      changeFilter
    }
  }
}
</script>
