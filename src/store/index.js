import { createStore } from 'vuex'

export default createStore({
  state: {
    productList: []
  },
  getters: {
    PRODUCTLIST: (state) => {
      return state.productList
    }
  },
  mutations: {
    addItem (state, payload) {
      state.productList = [...state.productList, payload]
    },
    setItemsFromLocalStorage (state) {
      state.productList = Object.assign(JSON.parse(localStorage.getItem('listProduct') || '[]'))
    },
    removeItem (state, payload) {
      state.productList = state.productList.filter((_, index) => index !== payload)
    },
    minPriceSort (state) {
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
    maxPriceSort (state) {
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
    nameSort (state) {
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
