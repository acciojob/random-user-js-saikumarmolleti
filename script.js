// console.log("Random User")


let user = {}

const imgElement = document.getElementById("img"),
 nameElement = document.getElementById("name"),
 additionalInfo = document.getElementById("add-info"),
 infoBtn = Array.from(document.querySelectorAll("[data-attr]"))
 fetchingUser = document.getElementById("getUser");

const renderUsersBasicDetails = (user) =>{
        nameElement.innerHTML = ""    ;
        imgElement.innerHTML = "";
        const nameSpan = document.createElement("span");
        const img = document.createElement('img');

        nameSpan.textContent = user.name.first + " " + user.name.last;
        
        img.src = user.picture.large;
        img.classList.add('img');

        nameElement.appendChild(nameSpan);
        imgElement.appendChild(img);
    
}


const fetchUser = async () =>{
    const resp = await fetch("https://randomuser.me/api/");
    const data = await resp.json();
    // console.log("Data", data.results[0]);
    user = data.results[0];
    // console.log("User",user) 
    renderUsersBasicDetails(user);    
    createInfoElement(data);
}


// const getUser = document.getElementById("getUser");

const  createInfoElement = (info) =>{
        while(additionalInfo.firstChild){
            additionalInfo.removeChild(additionalInfo.firstChild);
        }
    // const label = document.createElement("span");
    const infoData = document.createElement("span");

    
    // label.textContent = info.label;
    infoData.textContent = info.data;
    
    // additionalInfo.appendChild(label);
    additionalInfo.appendChild(infoData);
}

const handelInfoButton = (event) =>  {
    const info = [
         {
            id:"age",
            // label : "Age",
            data: user.dob.age,
        },
        {
            id:"phone",
            // label : "Phone",
            data: user.phone,
        },
        {
            id:"email",
            // label : "Email",
            data: user.email,
        },
    ]
    const id = event.target.dataset.attr;
    const data = info.find((item) => item.id === id);
    // console.log("info",data)
    createInfoElement(data);
}

infoBtn.map((btn) => btn.addEventListener("click", handelInfoButton));
fetchingUser.addEventListener('click',fetchUser)
document.addEventListener("DOMContentLoaded", fetchUser);
