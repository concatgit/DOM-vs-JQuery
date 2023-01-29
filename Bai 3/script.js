
let con=document.querySelector("#control");
con.addEventListener("click",function(e)
{
    let sdemo=document.getElementById('scrollDemo');
    let target=e.target;
    switch(target.id)
    {
        case "left":
            sdemo.scrollLeft+=20;
            break;
        case "top":
            sdemo.scrollTop+=20;
            break;
    }
});