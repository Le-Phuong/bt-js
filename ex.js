var product = [
    {id: 1, name: 'CPU', price: 750, quantity:10, category:1},
    {id: 2, name: 'RAM', price:50, quantity:2, category:2},
    {id: 3, name: 'HDD', price: 70, quantity:1, category:3},
    {id: 4, name: 'Main', price: 400, quantity:3, category:4},
    {id: 5, name: 'keyboard', price: 30, quantity:8, category:5},
];

//viết function trả về array{id,tên} có quantity >4 sử dụng es6


var newProduct1 = product.filter(function(couse1){
    return couse1.quantity>4
});
function listProduct(couse2){
    return{
        id: couse2.id,
        name: couse2.name,
    }
}
var newProduct2 = newProduct1.map(listProduct);
console.log(newProduct2);

