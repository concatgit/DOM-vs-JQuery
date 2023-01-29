function thanhToan(idForm)
{
    let formElement=document.querySelector(idForm);
    let formElement2=document.querySelector('#form-2');
            let t1=formElement2.querySelector('#tht');
            let t2=formElement2.querySelector('#tt');
            let t3=formElement2.querySelector('#tlt');
    if(formElement)
    {
        let soTien=formElement.querySelector('#sotien');
        let laiSuatNam=formElement.querySelector('#laisuat');
        let tgTra=formElement.querySelector('#tgtra');
        formElement.onsubmit=function(event)
        {
            let st=parseFloat(soTien.value),lsn=parseFloat(laiSuatNam.value),tgt=parseInt(tgTra.value);
            event.preventDefault();
            let tht=tienHangThang(st,lsn,tgt);
            let tpt=tienPhaiTra(st,lsn,tgt);
            let tlt=tienLaiTra(st,lsn,tgt);
            t1.value=tht;
            t2.value=tpt;
            t3.value=tlt;
        };
        console.log(true);
    }
}
function tienHangThang(sotien,laiSuatNam,tgTra)
{
    let laiThang=0.01*(laiSuatNam/12);
    let x=Math.pow(1+laiThang,sotien);
    let kq1=(sotien*x*laiThang)/(x-1);
    console.log(kq1);
    return kq1.toFixed(2);
}
function tienPhaiTra(sotien,laiSuatNam,tgTra)
{
    let kq=tienHangThang(sotien,laiSuatNam,tgTra)*(tgTra*12);
    return kq.toFixed(2);
}
function tienLaiTra(sotien,laiSuatNam,tgTra)
{
    let kq=tienPhaiTra(sotien,laiSuatNam,tgTra)-sotien;
    return kq.toFixed(2);
}
