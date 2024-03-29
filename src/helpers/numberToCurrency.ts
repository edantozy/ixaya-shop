export const numberToCurrency = (num: number | string) => {
    num = Number(num)
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}