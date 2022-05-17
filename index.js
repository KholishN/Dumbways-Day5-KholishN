function submitForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let emailReceiver = "kholisnurfajri1@gmail.com";
    
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(subject);
    console.log(message);
    
    
    if (!isNaN(name)){
        alert("Nama Tidak Boleh Angka")
    } else(name == ""); {
        alert("Isi Nama Anda!!!")
    };
    
    if (email == ""){
        alert("Isi Email Anda!!!")
    };
    
    if (number == ""){
        alert("Isi Nomor Handphone Anda!!!")
    };
    
    let a = document.createElement ("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hi my name is ${name}, ${number}, ${message}`;
    a.click();
    
    }


let dataCard=[];
function addProject(){
    let  title = document.getElementById("input-name").value;
    let  image = document.getElementById("input-image").files[0];
    let  author= "Kholish Nurfajri";
    let  date =new Date();
    let  content= document.getElementById("description").value;

   image =URL.createObjectURL(image)
    
    let project = {
        title : title,
        image : image,
        author : author,
        date : date,
        content: content
    }

    dataCard.push(project);
    console.log(dataCard)

    renderPage()
}

function renderPage(){

    let cardProject = document.getElementById("card");


    
    cardProject.innerHTML = "";
    
    dataCard.forEach((data,index)=>{
        cardProject.innerHTML =`<a href="detail-project.html" class="card-grid">,
        <img src="${data.image}"</a>
        <p class="card-title">${data.title}</p>
        <p class="card-durasi">Durasi : 3 Bulan </p>
        <p class="card-description">${data.content}</p>
        <div class="card-technologies">
        <i class="fa-brands fa-google-play"></i>
        <i class="fa-brands fa-android"></i>
        <i class="fa-brands fa-java"></i>
        </div>
        <div style=" display: flex;">
        <button onclick="edit(${index})" class="butom-action" style="margin-right: 10px;">Edit</button>
        <button onclick="hapus(${index})" class="butom-action">Hapus</button>
        </div>
        </a>`
    })
}

function edit(index){
    console.log(index);
}

    function hapus(index){
        console.log(index);
    }

