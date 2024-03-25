
for(let a1 = 1; a1 < 51; a1++)
{
if((a1%4)==0){
  let four = "4で割れる数です。"+"["+a1+"]";
  console.log(four);
}
if((a1%10)==0){
  let ten = "今10回ループしました。";
  console.log(ten);
}
}
alert('50回カウントが終わりました');
