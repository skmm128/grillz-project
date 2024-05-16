const product = [
    {
        id: 0,
        image: 'vampire.webp',
        title: 'vampire',
        price: 80,
    },
    {
        id: 1,
        image: 'uu.webp',
        title: 'the duke dennis',
        price: 45,
    },
    {
        id: 2,
        image: 'DragonGapGrillz-min.webp',
        title: 'dragon',
        price: 60,
    },
    {
        id: 3,
        image: 'pack.jpeg',
        title: 'packman',
        price: 30,
    },
    {
        id: 4,
        image: 'gold.webp',
        title: 'goldizz',
        price: 65,
    },
    {
        id: 5,
        image: 'mg.jpeg',
        title: 'dark metal',
        price: 312,
    },
    {
        id: 6,
        image: 'green.jpg',
        title: 'flip green',
        price: 117,
    },
    {
        id: 7,
        image: 'rr.jpg',
        title: 'ice box',
        price: 40,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
