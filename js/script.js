function validar(){
    let titular = document.getElementById("id_name_card").innerText;
    if(titular===""){
        document.getElementById("id_name_error").style.display="contents";
        document.getElementById("id_error_msg").style.display="contents";
    }

}