var mockData = fetch('https://api.allorigins.win/raw?url=http://fakestoreapi.com/products')
.then(res=> {
    return res.json()
})
.then(data => {
    console.log(data)
    // init products
    var products = document.querySelector('.products');
    products.innerHTML = ''
    data.forEach(item => {
        var newProduct = document.createElement('div')
        newProduct.classList.add('product')
        newProduct.innerHTML = `
            <img src="${item.image}">
            <div class="info">
                <div class="name">${item.title}</div>
                <div class="price">${item.price}</div>
            </div>
        `
        products.appendChild(newProduct)
    })

})

var searchInput = document.querySelector('.search input');
searchInput.addEventListener('input', function(e) {
    let txtSearch = e.target.value.trim().toLowerCase();
    let listProductDOM = document.querySelectorAll('.product');

    // Loop through each product item
    listProductDOM.forEach(function(item) {
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
});

