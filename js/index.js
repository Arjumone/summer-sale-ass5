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
    if(totalPrice>0){
        makeBtn.removeAttribute('disabled');
    }
    else{
        makeBtn.setAttribute('disabled',true)
    };
    const applyBtn = document.getElementById('apply');
    if(totalPrice>199){
        applyBtn.removeAttribute('disabled');
    }
    else{
        applyBtn.setAttribute('disabled',true)
    }
        
        document.getElementById('input-btn').addEventListener('keyup',function(event){
            const inputText = event.target.value;
            if(inputText === 'SELL200'){
                applyBtn.removeAttribute('disabled')
                document.getElementById('apply').addEventListener('click',function(){
                    const discount = document.getElementById('discount-price').innerText=totalPrice *20 /100;
                    const discountElement = document.getElementById('discount-price');
                    discountElement.innerText = discount.toFixed(2)
                    const total = document.getElementById('total').innerText=totalPrice-discount;
                    const totalElement = document.getElementById('total');
                    totalElement.innerText=total.toFixed(2);
                });   
            }
            else{
                applyBtn.setAttribute('disabled',true)
            }
        }) 
}
document.getElementById('go-home').addEventListener('click',function(){
    window.location.href ='index.html'; 
})
