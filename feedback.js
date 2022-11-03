var selectedRow=null;


//show results
function showAlert(message,className){
    const div=document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const main=document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000);

}
//clear all fields
function clearFields(){
    
    document.querySelector("#userName").value="";
    document.querySelector("#feedBack").value="";
    document.querySelector("#suggeStion").value="";

}
//add data

document.querySelector("#feedback-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    //get form values
    const userName=document.querySelector("#userName").value;
    const feedBack=document.querySelector("#feedBack").value;
    const suggeStion=document.querySelector("#suggeStion").value;

    //validate

    if(userName == "" || feedBack == "" || suggeStion == ""){
        showAlert("Please fill in all fields","danger");
    }
    else{
        if(selectedRow==null){
            const list=document.querySelector("#feedback-list");
            const row=document.createElement("tr");

            row.innerHTML=`
            <td>${userName}</td>
            <td>${feedBack}</td>
            <td>${suggeStion}</td>
            <td>  
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            
            `;
            list.appendChild(row);
            selectedRow=null;
            showAlert("Details filled succcesfully","success");
        }
        else{
            selectedRow.children[0].textContent=userName;
            selectedRow.children[1].textContent=feedBack;
            selectedRow.children[2].textContent=suggeStion;
            selectedRow=null;
            
            showAlert("User details Edited","info");

        }
        clearFields();
    }
});
//Edit data

document.querySelector("#feedback-list").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("edit")){
        selectedRow=target.parentElement.parentElement;
        document.querySelector("#userName").value=selectedRow.children[0].textContent;
        document.querySelector("#feedBack").value=selectedRow.children[1].textContent;
        document.querySelector("#suggeStion").value=selectedRow.children[2].textContent;

    }
})

//Delete data

document.querySelector("#feedback-list").addEventListener("click",(e)=>{
    target = e.target;
    if (target.classList.contains("delete")){
            target.parentElement.parentElement.remove();
            showAlert("Feedback deleted","danger");
    }
});