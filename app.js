
function updateProductsNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber)  + 1;
    }
    else if(productNumber < 1){
        productNumber = 0;
    }
    else{
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

};



const phoneIncreaseBtn = document.getElementById('phone-plus');
phoneIncreaseBtn.addEventListener('click',function(){
    updateProductsNumber('phone',1219,true);
});

const phoneDecreaseBtn = document.getElementById('phone-minus');
phoneDecreaseBtn.addEventListener('click',function(){
    updateProductsNumber('phone',1219,false);
});

const caseIncreaseBtn = document.getElementById('case-plus');
caseIncreaseBtn.addEventListener('click',function(){
    updateProductsNumber('case',59,true);
});

const caseDecreaseBtn = document.getElementById('case-minus');
caseDecreaseBtn.addEventListener('click',function(){
    updateProductsNumber('case',59,false);  
});