const form=document.querySelector("#signup");
const NAME_REQUIRED="Please enter your name";
const EMAIL_REQUIRED="Please enter your email";
const EMAIL_INVALID="Please enter a correct email address format";

form.addEventListener("submit",function(event)
{
    event.preventDefault();
let nameValid=hasValue(document.getElementById("name"),NAME_REQUIRED);
let emailValid=validateEmail(document.getElementById("email"),EMAIL_REQUIRED,EMAIL_INVALID);
if(nameValid&&emailValid)
{
    alert("Subscribe Successfully");
}
});

function hasValue(input,message)
{
    if(input.value.trim()==="")
    {
        return showEror(input,message);
    }
    return showSuccess(input);
}

function showMessage(input,message,type)
{
    const msg=input.parentNode.querySelector("small");
    msg.innerText=message;
    input.className=type? "success":"error";
    return type;
}

function showEror(input,message)
{
    return showMessage(input,message,false);
}
function showSuccess(input)
{
    return showMessage(input,"",true);
}
function validateEmail(input,requiredMsg,invalidMsg)
{
    if(!hasValue(input,requiredMsg))
    {
        return false;
    }
    const emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
    const email=input.value.trim();
    if(!emailRegex.test(email))
    {
        return showEror(input,invalidMsg);
    }
    return true;
}