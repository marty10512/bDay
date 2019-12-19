var result = document.getElementById('result');
var btn = document.getElementById('button');
var input = document.getElementById('input');

var giftSecretEncoding = function(promoCode) {
var chars = promoCode.split('');

chars = chars.reverse();
var new_chars = [];
for(var i=0; i <= chars.length - 1; i++) {
new_chars.push(chars[i].charCodeAt(0));
}

var encodedPromoCode = new_chars.join(',');

result.innerHTML = encodedPromoCode;
}

btn.addEventListener('click', function(e) {
e.preventDefault();
giftSecretEncoding(input.value);
});