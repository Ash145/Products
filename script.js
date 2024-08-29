        
    // function addline(){
    
    

    function addDiv(product){
        $('.container').append(`
            <div class='card'>
                <img src='${product.images[0]}'</img>
                <h2 class='title'>${product.title}</h2>
                <p>${product.description}</p>
                <div class="brand">
                    <h4>${product.brand}</h4>
                    <h4>${product.price}</h4>
                </div>
            </div>
            `)
    }
    let reqProduct

    function addProductDiv(heading){
        $.get('https://dummyjson.com/products',(data)=>{
            let products = data.products;
            reqProduct = products.filter((product)=>{
                return product.title.toLowerCase() == heading.toLowerCase()
            })
            $('.product-container').append(`
                <div class='product-header'>
                    <h1>${reqProduct[0].title}</h1>
                </div>
                <div class='product-image'>
                    <div><img src='${reqProduct[0].images[0]}' /></div>
                </div>
                <div class='product-categories'>
                    <p class='product-brand'>${reqProduct[0].brand}</p>
                    <p class='product-category'>${reqProduct[0].category}</p>
                </div>
                <div class='product-description'>
                    <p>${reqProduct[0].description}</p>
                </div>
                `)
        })
        
    }

    function showAll(){
        $.get('https://dummyjson.com/products', (data)=>{

            let products = data.products;
            console.log(products)
            products.forEach((product)=>{
                    addDiv(product)
                    console.log(product)
            })
        })
    }

    showAll()

    $(document).ready(()=>{
        $(document).on('click', '.title', (e)=>{
            localStorage.setItem('selectedTitle', e.target.innerText)
            window.location.href = './products.html';
        })
    })

    $(document).ready(() => {
    const selectedTitle = localStorage.getItem('selectedTitle');
    if (selectedTitle) {
        addProductDiv(selectedTitle);
    }
});


    $('.links a').on('click', (e)=>{
        $('.container .card').hide()
        console.log('1 click')
        console.log(e.target)
        $.get('https://dummyjson.com/products', (data)=>{
            let products = data.products;
            console.log(products)
            one = products.filter((product)=>{
                return product.category === $(e.target).text().toLowerCase()

            })
            // console.log(one)
            one.forEach((on)=>{
                addDiv(on)
                    console.log(on)
            })
            
        })    
    })

    // let searchedProduct='';
    
    // $(".search-bar").on('keyup', (e)=>{
    //     $('.container .card').hide()
    //     searchedProduct = searchedProduct + e.key
    //     $.get('https://dummyjson.com/products', (data)=>{
    //         products = data.products;
    //         search = products.filter((product)=>{
    //             return product.title.toLowerCase().includes(searchedProduct.toLowerCase())
    //         })
    //         search.forEach((prod)=>{
    //             addDiv(prod)
    //         })
    //     })
    // })

    


    

    


    // let index = 0;

    // function add(){
    //     $.get('https://dummyjson.com/products', (data)=>{
    //         let products = data.products;
    //             if(index == products.length){
    //                 return
    //             }
    //             $('ul').append(`<li>${products[index].title}</li>`)
    //             index++;
    //     })
    // }

    // function remove(){
    //     $('ul li:last').remove()
    //     index--
    // }

    

    
    // function removeline(){
    //     $('div .card:last').remove()
    //     index--;
    // }



// $('.one').click(function(event){
//     $('.one').text('Finstein')
// })

// $('.one').on('click', function(){

// })

// let city = ''

// $('input').keydown(function(event){
//    city = city + event.key
// })


// let url = 'https://dummyjson.com/products'

// $.get(url, function(data){
//     let products = data.products
//    // products.forEach(function(product){
//         console.log(products[0].title)
//    // })
// })


// //event