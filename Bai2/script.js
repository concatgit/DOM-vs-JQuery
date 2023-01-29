let pass=document.querySelector('input[type="password"');
pass.addEventListener("focus",(e)=>
{
    e.target.style.backgroundColor="yellow";
});
pass.addEventListener("blur",(e)=>
{
    e.target.style.backgroundColor="white";
});