<template>
  <div class="chapter">
    <h2 class="chapter__name">Добавление товара</h2>
    <div class="main-form">
      <div class="main-form__name-product">
        <div class="form">
          <div class="form__title">
            Наименование товара
          </div>
          <input type="text" required placeholder="Введите наименование товара" class="form__input" v-model="newItem.name">
        </div>
      </div>
      <div class="main-form__product-description">
        <div class="form">
          <div class="form__title not-necessary">
            Описание товара
          </div>
          <textarea placeholder="Введите описание товара" class="form__input form__text-ar" v-model="newItem.description"></textarea>
        </div>
      </div>
      <div class="main-form__link-image">
        <div class="form">
          <div class="form__title">
            Ссылка на изображение товара
          </div>
          <input type="text" required placeholder="Введите ссылку" class="form__input" v-model="newItem.linkImage">
        </div>
      </div>
      <div class="main-form__prodect-price">
        <div class="form">
          <div class="form__title">
            Цена товара
          </div>
          <input type="number" required placeholder="Введите цену" class="form__input" v-model="newItem.price">
        </div>
      </div>
      <button class="main-form__add-button" :disabled="activeAddButton" @click="addItem(newItem)">Добавить товар</button>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const newItem = reactive({
      name: '',
      description: '',
      linkImage: '',
      price: ''
    })

    const productList = computed(() => store.getters.PRODUCTLIST)
    const activeAddButton = computed(() => {
      if (newItem.name === '' || newItem.linkImage === '' || newItem.price === '') {
        return true
      }
      return false
    })

    const addItem = function (item) {
      store.commit('addItem', Object.assign({}, item))
    }
    return {
      productList,
      newItem,
      activeAddButton,
      addItem
    }
  }
}
</script>
