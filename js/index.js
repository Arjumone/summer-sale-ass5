let totalOne = 0;  
function handleClickCard(target){
    const addedContainer = document.getElementById('element-added');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const count = addedContainer.childElementCount
    const h1 = document.createElement('h1');
    h1.innerHTML=`${count+1}. ${itemName}`
    addedContainer.appendChild(h1);
    const prices = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    totalOne = totalOne + parseFloat(prices);
     const totalPrice = document.getElementById('total-price').innerText= totalOne;  

     const makeBtn = document.getElementById('make-purchase');
     console.log(makeBtn);
    if(totalPrice>199){
        makeBtn.removeAttribute('disabled');
    }
    else{
        makeBtn.setAttribute('disabled',true)
    }
}
    



document.getElementById('go-home').addEventListener('click',function(){
    window.location.href ='index.html'; 
})
