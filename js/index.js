
let total = 0
document.getElementById('card-one').addEventListener('click',function(){
    const cardOne = document.getElementById('card-style-one');
    const cardStyleOne = cardOne.childNodes[3].innerText;
    const h1 = document.createElement('h1');
    h1.innerText = cardStyleOne;
    const h3 = document.getElementById('total-title');
    const addedElement = document.getElementById('added-element');
    addedElement.insertBefore(h1,h3);
    const cardStyleOnePrice = cardOne.childNodes[4];
     const totalOne = total + cardStyleOnePrice;
     document.getElementById('total-price').innerText= totalOne
})




// let priceThreeTotal = 0
// document.getElementById('btn-three').addEventListener('click',function(){
//     const priceElementThree = elementField('price-three')
//     priceThreeTotal = priceThreeTotal + priceElementThree;
//      const totalPriceThree = document.getElementById('total').innerText = priceOneTotal + priceTwoTotal + priceThreeTotal;
//      const discountElementText = elementField('discount')
//     document.getElementById('grand-total').innerText = totalPriceThree *discountElementText / 100
// }); 
// modal part done
document.getElementById('go-home').addEventListener('click',function(){
    window.location.href ='index.html';
})
