function valie()
{
    var tk= document.getElementById('exampleInputEmail1').value;
    var mk=document.getElementById('exampleInputPassword1').value;

    if(tk==""|mk=="")
    {         
         alert('Bạn chưa nhập đầy đủ thông tin!');
    }

}

function checkpassvalie()
{
    var tk= document.getElementById('exampleInputEmail1').value;
    var mk=document.getElementById('exampleInputPassword1').value;
    var remk=document.getElementById('exampleInputPassword2').value;
    var name = document.getElementById('fullname').value;
    var sdt= document.getElementById('phonenumber').value;

    if(tk==""|mk==""|remk==""|name==""|sdt=="")
    {
        alert('Bạn chưa nhập đầy đủ thông tin!');
    }
    if(mk!=remk)
    {
        alert('Nhập lại mật khẩu không đúng!');
    }
    else{
        alert('Đăng ký thành công!');
    }

}