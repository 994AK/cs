
/*
*   box全局盒子
*   input[0] 支付编号
*   input[1] 支付金额
*   button 提交
* */

let [box,input,btn,p] = [
    document.querySelector('.global-box'),
    document.querySelectorAll('.theme label input'),
    document.querySelector('.theme label button'),
    document.querySelectorAll('.cs-text')
]

let payment = ()=> input.forEach((item,index)=>{
    p[index].innerHTML = item.value;
})
btn.onclick = payment;

