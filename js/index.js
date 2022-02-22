const shop = { name: 'dipur Dokan', address: 'mirpur', category: 'clothes shop', about: { constu: 'chiku', isExpensive: false } };
const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(shopStringified);
console.log(shop);