const names=document.querySelector("#names");
const email=document.querySelector("#email");
const message=document.querySelector("#message");
const submit=document.querySelector("#submit");
console.log("workibng")

try{
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("workibng")
    console.log(names);
    if(names.value!="" && email.value!="" && message.value!="")
    {
        if(email.value.split("").includes("@"))
        {
        var txtData = `name = ${names.value} \nemail = ${email.value} \nmessage= ${message.value}`
        const textToBLOB = new Blob([txtData], { type: 'text/plain' });
        const sFileName = 'formData.txt';
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
        newLink.click(); 
        }
        else{
            alert("email wrong");
        }
    }
    else
    {
        alert("information incomplete")
    }
})
}
catch(e){
    console.log(e)
}