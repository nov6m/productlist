import { createStore } from 'vuex'

export default createStore({
  state: {
    productList: []
  },
  getters: {
    getProductList: (state) => {
      return state.productList
    }
  },
  mutations: {
    ADD_ITEM (state, payload) {
      state.productList = [...state.productList, payload]
    },
    SET_ITEMS_FROM_LOCAL_STORAGE (state) {
      state.productList = [...JSON.parse(localStorage.getItem('listProduct'))]
    },
    SAVE_LIST_LOCAL_STORAGE (state) {
      localStorage.setItem('listProduct', JSON.stringify(state.productList))
    },
    REMOVE_ITEM (state, id) {
      state.productList = state.productList.filter((_, index) => index !== id)
    },
    MIN_PRICE_SORT (state) {
      state.productList = state.productList.sort(function (el1, el2) {
        if (el1.price > el2.price) {
          return 1
        }
        if (el1.price < el2.price) {
          return -1
        }
        return 0
      })
    },
    MAX_PRICE_SORT (state) {
      state.productList = state.productList.sort(function (el1, el2) {
        if (el1.price > el2.price) {
          return -1
        }
        if (el1.price < el2.price) {
          return 1
        }
        return 0
      })
    },
    NAME_SORT (state) {
      state.productList = state.productList.sort(function (el1, el2) {
        if (el1.name > el2.name) {
          return 1
        }
        if (el1.name < el2.name) {
          return -1
        }
        return 0
      })
    }
  }
})
