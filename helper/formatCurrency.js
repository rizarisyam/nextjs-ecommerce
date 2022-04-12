export const formatCurrency = (number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
    }).format(number)
}