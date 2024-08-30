export const formatCurrency = price => `$ ${Intl.NumberFormat('DE').format(price?.amount || 0)}`;
export const formatDecimals = decimals => ((decimals || 0) + '').padEnd(2, '0');
