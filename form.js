
function check(){

    let val = false;
    if(checkName()&&checkPhone()&&checkpwd()&&checkConfirmpwd()){
        val = true;
    }

    return val;
}

// 监测名称
function checkName(name){
    var name = document.getElementById('name').value;
        if(name.length<=5||name.length>=15){
            alert("输入名称错误！请输入5~15个字符");
            return false;
        }
        
    return true;
}


//验证邮箱
//邮箱的正则表达式

// 手机号码验证
function checkPhone(){ 
    var phone = document.getElementById('phone').value;
    // alert(phone)

    //正则表达式 11  （1 345678  9个数字）
    if(!(/^1[345678]\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");  
        return false; 
    }

    return true;
}

//检查密码
function checkpwd() {
    var pwd = document.getElementById("pwd").value;
    var reg = /^[\d\w]{6,12}$/;
    if (!reg.test(pwd)) {
        alert("请输入6~12以内数字、字母或组合密码");
        return false;
    }

    return true;
}

function checkConfirmpwd() {
    let pwd = document.getElementById("pwd");
    let pwd2 = document.getElementById("pwd2");

    if (pwd.value === pwd2.value) {
        return true;
    } else {
        alert('两次密码不一致');
        return false;
    }

}