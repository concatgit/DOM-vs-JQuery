function Validation(idForm)
{
    let formElement=document.querySelector(idForm);
    if(formElement)
    {
        let elecao=formElement.querySelector('#chieucao');
        let elenang=formElement.querySelector('#cannang');
        formElement.onsubmit=function(event)
        {
            event.preventDefault();
            let bmi=resultBMI(elecao,elenang);
            console.log(bmi);
            let kq=formElement.querySelector('#result');
            kq.innerText=bmi;
        };
    }
}
function checkGender()
{
    let rs;
    let arr1=document.getElementsByName('gender');
        for(let i=0;i<arr1.length;i++)
        {
            if(arr1[i].checked==true)
            {
                rs=arr1[i].value;
                console.log(rs);
                break;
            }
    }
    return rs;
}
function resultBMI(elecao,elenang)
{
    let gender=checkGender();
   let chieucao=elecao.value;
   let cannang=elenang.value;
   let result;
   let bmi=cannang/(Math.pow(chieucao,2));
   if(gender=='nam')
   {
        if(bmi<20.7)
        {
            result='Gầy';
        }else if(bmi<26.4)
        {
            result='Bình thường';
        }else if(bmi<27.8)
        {
            result='Thừa cân nhẹ';
        }else if(bmi<31.1)
        {
            result='Trên lý tưởng';
        }else
        {
            result='Béo phì'
        }
   }else if(gender=='nu')
   {
        if(bmi<19.1)
        {
            result='Gầy';
        }else if(bmi<25.8)
        {
            result='Bình thường';
        }else if(bmi<27.3)
        {
            result='Thừa cân nhẹ';
        }else if(bmi<32.3)
        {
            result='Trên lý tưởng';
        }else
        {
            result='Béo phì';
        }
   }
    return bmi.toFixed(2)+" | "+result;
}
Validation('#form-bmi');
