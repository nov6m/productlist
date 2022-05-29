<template>
  <div class="item">
    <div class="item__info">
      <div class="item__image">
        <img :src=linkImage class="image" alt="Product photo" width="330" height="200">
      </div>
      <h2 class="item__name">{{name}}</h2>
      <div class="item__description">
        {{description}}
      </div>
      <div class="item__price">
        {{priceFormater(price)}}
      </div>
    </div>
    <div class="item__delete-button" @click="removeItem(index)">
      <img src="../assets/image/icon/Bucket.png" alt="bucket">
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import priceFormater from '@/services/priceFormat'

export default {
  props: ['name', 'description', 'linkImage', 'price', 'index'],
  setup (props) {
    const store = useStore()

    const removeItem = function (index) {
      store.commit('removeItem', index)
    }

    return {
      removeItem,
      priceFormater
    }
  }
}
</script>
