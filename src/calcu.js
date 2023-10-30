
const calculateDiscountInThePrice = function (valuePrice, valueDiscount) {
    const porcentageDiscountPrice = 100 - valueDiscount;
    const priceWithDiscount = (valuePrice * porcentageDiscountPrice) / 100;
    
    return priceWithDiscount
};

const valueOfDiscount = function (valuePrice, valueDiscount) {
    const porcentageDiscountPrice = 100 - valueDiscount;
    const priceWithDiscount = (valuePrice * porcentageDiscountPrice) / 100;
    
    let finalValueDiscount = valuePrice - priceWithDiscount;
    return finalValueDiscount
};

const verificationCoupon = function () {
    const coupons = [10, 15, 20];
    const coupon = document.getElementById ("coupons");
    const valueCoupon = parseInt (coupon.value);
    if (valueCoupon === coupons[0]) {
        return coupons[0];
    } else if (valueCoupon === coupons[1]) {
        return coupons[1];
    } else if (valueCoupon === coupons[2]) {
        return coupons[2];
    } else {
        return 0
    }
}

const onClickButtonPriceDiscount = function () {
    const inputPrice = document.getElementById("InputPrice")
    const inputDiscount = document.getElementById("InputDiscount")
    const valuePrice = parseInt(inputPrice.value);
    const valueDiscount = parseInt(inputDiscount.value);
    const verificationCoupons = verificationCoupon();
    const discountCoupon = valueDiscount + verificationCoupons;

    const priceWithDiscount = calculateDiscountInThePrice (valuePrice, discountCoupon);
    const finalValueDiscount = valueOfDiscount (valuePrice, discountCoupon);

    const displeyPrice = document.getElementById("displeyPrice");
    const price = valuePrice;
    displeyPrice.innerText = "El precio sin descuento es: $" + price; 

    const displeyDiscount = document.getElementById("displeyDiscount");
    displeyDiscount.innerText = `El precio con descuento total es: $${priceWithDiscount}`;
    
    const displeyValueDiscount = document.getElementById("displeyValueDiscount");
    displeyValueDiscount.innerText = `Te ahorraste: $${finalValueDiscount}`;
}
