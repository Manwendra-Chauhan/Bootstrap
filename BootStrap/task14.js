const submit= ()=>{
    if(document.getElementById("Finput").value==""){
        document.getElementById("Fname").classList.remove("error");
        document.getElementById("Fname").classList.add("error-show");
    }else{
        document.getElementById("Fname").classList.remove("error-show");
        document.getElementById("Fname").classList.add("error");
    }
    if(document.getElementById("Linput").value==""){
        document.getElementById("Lname").classList.remove("error");
        document.getElementById("Lname").classList.add("error-show");
    }else{
        document.getElementById("Lname").classList.remove("error-show");
        document.getElementById("Lname").classList.add("error");
    }


    if(document.getElementById("Einput").value==""){
        document.getElementById("email").classList.remove("error");
        document.getElementById("email").classList.add("error-show");
    }else{
        document.getElementById("email").classList.remove("error-show");
        document.getElementById("email").classList.add("error");
    }


    if(document.getElementById("Pinput").value==""){
        document.getElementById("password").classList.remove("error");
        document.getElementById("password").classList.add("error-show");
    }else{
        document.getElementById("password").classList.remove("error-show");
        document.getElementById("password").classList.add("error");
    }


    if(document.getElementById("Rinput").value===document.getElementById("Pinput").value || document.getElementById("Rinput").value=="" ){
        document.getElementById("rePassword").classList.remove("error");
        document.getElementById("rePassword").classList.add("error-mismatch");
    }else{
        document.getElementById("rePassword").classList.remove("error-mismatch");
        document.getElementById("rePassword").classList.add("error");
    }


    if(document.getElementById("Ainput").value==""){
        document.getElementById("age").classList.remove("error");
        document.getElementById("age").classList.add("error-show");
    }else{
        document.getElementById("age").classList.remove("error-show");
        document.getElementById("age").classList.add("error");
    }


    if(document.getElementById("pInput").value==""){
        document.getElementById("phoneNumber").classList.remove("error");
        document.getElementById("phoneNumber").classList.add("error-show");
    }else{
        document.getElementById("phoneNumber").classList.remove("error-show");
        document.getElementById("phoneNumber").classList.add("error");
    }


    if(document.getElementById("addInput").value==""){
        document.getElementById("address").classList.remove("error");
        document.getElementById("address").classList.add("error-show");
    }else{
        document.getElementById("address").classList.remove("error-show");
        document.getElementById("address").classList.add("error");
    }


    if(document.getElementById("sInput").value==""){
        document.getElementById("state").classList.remove("error");
        document.getElementById("state").classList.add("error-show");
    }else{
        document.getElementById("state").classList.remove("error-show");
        document.getElementById("state").classList.add("error");
    }
}