

const products = [
    {
        id:1,
        name:'Iphone 12',
        price:1000,
        category:'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp',
        stock:25,
        description:'Decripcion de un iphone'
    },
    {
        id:2,
        name:'Iphone 14 Pro Max',
        price:1400,
        category:'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_651710-MLM51559386433_092022-F.webp',
        stock:24,
        description:'Decripcion de un iphone 14 Pro Max'
    },
    {
        id:3,
        name:'Iphone 13',
        price:1200,
        category:'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_821416-MLA47781962896_102021-O.webp',
        stock:23,
        description:'Decripcion de un iphone 14 Pro Max'
    },
    {
        id:4,
        name:'IPad Apple Pro 6th generation',
        price:2250,
        category:'tablets',
        img:'https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp',
        stock:22,
        description:'Decripcion de un IPad Apple Pro 6th generation'
    },
    {
        id:5,
        name:'Iphone 13',
        price:1200,
        category:'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_821416-MLA47781962896_102021-O.webp',
        stock:21,
        description:'Decripcion de un iphone 14 Pro Max'
    },
    {
        id:6,
        name:'Iphone 13',
        price:1200,
        category:'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_821416-MLA47781962896_102021-O.webp',
        stock:20,
        description:'Decripcion de un iphone 14 Pro Max'
    },
    {
        id:7,
        name:'Iphone 13',
        price:1200,
        category:'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_821416-MLA47781962896_102021-O.webp',
        stock:19,
        description:'Decripcion de un iphone 14 Pro Max'
    },
    {
        id:8,
        name:'Iphone 13',
        price:1200,
        category:'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_821416-MLA47781962896_102021-O.webp',
        stock:18,
        description:'Decripcion de un iphone 14 Pro Max'
    }
]

export const getProducts = ()  => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductsById = (ProductId)  => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod =>prod.id == ProductId))
        },500)
    })
}

export const getProductsByCategory = (ProductCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === ProductCategory))
        }, 500)
    })
}
