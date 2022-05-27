export default function priceFormater (price) {
  return new Intl.NumberFormat('ru-RU').format(price)
}
