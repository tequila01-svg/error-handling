try{
    addalert("welcome guest");
}
catch(err){
    document.getElementById("error_message").innerHTML=err.message;
}