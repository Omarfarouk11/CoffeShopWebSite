let eat=document.getElementById("eat_btn")
let eat1=document.getElementById("eat_menu")
let drink=document.getElementById("drink_btn")
let drink1=document.getElementById("drink_menu")
eat.addEventListener("click",function(){
if(eat1.style.display=='none')
{
drink1.style.display='none'
eat1.style.display='block'

}
else
{
   drink.addEventListener('click',function(){
    eat1.style.display='none'

    drink1.style.display='block'
   })
}
})
let up=document.getElementById("up")
window.addEventListener("scroll",function(){
if(this.window.pageYOffset>=2121)
{
up.style.display="block"
}
})
up.onclick=function(){
window.scrollTo(0,0)

}