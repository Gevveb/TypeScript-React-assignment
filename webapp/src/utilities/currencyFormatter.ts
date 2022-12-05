const currencyFormat = new Intl.NumberFormat('en-US', {currency: 'USD', style: 'currency'})

export const currencyFormatter = (value: number | bigint) => {
    return currencyFormat.format(value)
}