
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

    calculateTotal('phone','case');

};

function getInputValue(product){
    const productInput = document.getElementById(product,'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(productId){
    const phoneTotal = document.getElementById('phone-total');
    const phoneTotalAmount = parseInt(phoneTotal.innerText)

    const caseTotal = document.getElementById('case-total');
    const caseTotalAmount = parseInt(caseTotal.innerText);

    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = phoneTotalAmount + caseTotalAmount;
    console.log(subTotal.innerText);
    // const phoneTotal = getInputValue('phone') * 1219;
    // const caseTotal = getInputValue('case') * 59;

    // console.log(phoneTotal);

    // // const subTotal = phoneTotal + caseTotal;
    // // document.getElementById('sub-total').innerText = subTotal;

    
};

function calculateTax(){
    const subTotal = document.getElementById('sub-total');
    const subTotalAmount = parseInt(subTotal.innerText);
    const totalPrice = document.getElementById('total-price');
    // const totalPriceNumber = parseInt(totalPrice.innerText);
    const taxAmount = document.getElementById('tax-amount');
    const taxNumber = parseInt(taxAmount.innerText);
    taxAmount.innerText = subTotalAmount * 0.05;
    totalPrice.innerText = subTotalAmount + parseInt(taxAmount.innerText) * 0.05;
    // totalPrice.innerText = 
};

const phoneIncreaseBtn = document.getElementById('phone-plus');
phoneIncreaseBtn.addEventListener('click',function(){
    updateProductsNumber('phone',1219,true);
    calculateTax()
});

const phoneDecreaseBtn = document.getElementById('phone-minus');
phoneDecreaseBtn.addEventListener('click',function(){
    updateProductsNumber('phone',1219,false);
    calculateTax();
});

const caseIncreaseBtn = document.getElementById('case-plus');
caseIncreaseBtn.addEventListener('click',function(){
    updateProductsNumber('case',59,true);
    calculateTax();
});

const caseDecreaseBtn = document.getElementById('case-minus');
caseDecreaseBtn.addEventListener('click',function(){
    updateProductsNumber('case',59,false);  
    calculateTax();
});