alert('welcom to our web');
var btn = document.querySelector('#more')
var more = document.querySelector('#morer')

btn.onclick = function(e){
    e.preventDefault();
    if(btn.innerHTML == 'read more...'){
        more .style.display = 'inline';
        btn.innerHTML = 'show less...';
    }else{
        more.style.display = 'none'
        btn.innerHTML = 'read more...'
    }
}
var btn1 = document.querySelector('header button');
var mnue = document.querySelector('header nav .text ul');
btn1.onclick = function(){
    mnue.classList.toggle('show');
}
///*******************************///
var to_top = document.querySelector('.back_top')
var dark = document.querySelector('#dark_mode');
window.onscroll = function(){
    if(window.scrollY > 100){
        to_top.classList.add('showt');
        dark.style.display = ('none');
    }else{
        to_top.classList.remove('showt');
        dark.style.display = ('block');
    }
}
to_top.onclick = ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
}
let body = document.querySelector('body');
var h2 = document.querySelector('.Developer h2');
var h3 = document.querySelector('.flavors h2');
const colors = ["white","black"];
let i = 0;
dark.onclick = ()=>{
    body.style.backgroundColor = colors[i];
    i++;
    h2.style.color = ('black');
    h3.style.color = ('black');
    dark.innerHTML = ('Dark Mode');
    if(i >= colors.length){
        i = 0;
        h2.style.color = ('white');
        h3.style.color = ('whitw');
        dark.innerHTML = ('Light Mode');
    }
}

