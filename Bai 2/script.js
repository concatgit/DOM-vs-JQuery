let btn=document.querySelector("#but1");
let text=document.querySelector("#text");
btn.addEventListener("contextmenu",(e)=>
{
    e.preventDefault(); 
});
btn.addEventListener("mouseup",(e)=>
{ 
    switch(e.button)
    {
        case 0:
            text.textContent="Left mouse button clicked";
            break;
        case 1:
            text.textContent="Middle mouse button clicked";
        case 2:
            text.textContent="Right mouse button clicked";
        default:
            text.textContent="Unknow button code "+e.button;
    }
});