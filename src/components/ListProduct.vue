<template>
 <div class="product" v-show="productList.length">
   <select class="product__filter" @change="changeFilter">
     <option selected disabled>По умолчанию</option>
     <option value="1">Минимальная цена</option>
     <option value="2">Максимаьлная цена</option>
     <option value="3">По наименованию</option>
   </select>
   <div class="product__list ">
     <div class="item" v-for="({name, description, linkImage, price}, index) of productList" :key="index">
       <div class="item__info">
        <div class="item__image">
          <img :src=linkImage class="image" alt="Product photo" width="330" height="200">
        </div>
        <h2 class="item__name">{{name}}</h2>
        <div class="item__description">
          {{description}}
        </div>
        <div class="item__price">
          {{new Intl.NumberFormat('ru-RU').format(price)}}
        </div>
       </div>
       <div class="item__delete-button" @click="removeItem(index)">
         <img src="../assets/image/icon/Bucket.png" alt="bucket">
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()

    const productList = computed(() => store.getters.PRODUCTLIST)

    const removeItem = function (index) {
      store.commit('removeItem', index)
    }
    const changeFilter = function (event) {
      const filterType = event.target.value
      switch (filterType) {
        case '1':
          store.commit('minPriceSort')
          break
        case '2':
          store.commit('maxPriceSort')
          break
        case '3':
          store.commit('nameSort')
          break
      }
    }
    return {
      productList,
      changeFilter,
      removeItem
    }
  }
}
</script>
