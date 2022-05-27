export default function saveListLocalStorage (list) {
  localStorage.setItem('listProduct', JSON.stringify(list))
}
