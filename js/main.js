var elHeading = document.querySelector('.heading');

alert("Assalomu alaykum!")
alert("Bizning Triwel kompaniyamiz siz uchun quyidagilarni taqdim etadi \n      Borish-kelish samolyot bileti - $500 \n      Mehmonxona to'lovi (to'liq safar davomiyligi uchun) - $250 \n      Muzey va ko'ngilochar joylar uchun - 120 yevro ");
var summa=prompt("Alish aka qancha pulingiz borligini kiriting! \n ( $ da kirita qoling )" , "$00");

console.log("Sizning pulingiz:"+ " -> "+summa+ "$");
summa = summa*9433.34;

alert("Sizning - "+ summa+ "so'm pulingiz bor ekan");
var minSumma=9433.34*750+120*10354.03;

if (summa>minSumma){
    elHeading.textContent="Oq yo'l, Alisher!";
}
   
else{
    elHeading.textContent="Alisher, ozgina sabr qilish kerak bo'lar ekan.";
}
