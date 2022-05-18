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

    const month=["Januari","Febuary","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

let dataCard=[];


function addProject(){

    let checkbox = document.querySelectorAll("input[type=checkbox]:checked")
    let output = [];
    let  title = document.getElementById("input-name").value;
    let  image = document.getElementById("input-image").files[0];
    let  author= "Kholish Nurfajri";
    let  content= document.getElementById("description").value;
    let  start=new Date(document.getElementById("project-start").value);
    let  end=new Date(document.getElementById("project-end").value);
    let  duration = difference(start, end);
    let  date = `${start.getDate()} ${month[start.getMonth()]} ${start.getFullYear()} - ${end.getDate()} ${month[end.getMonth()]} ${end.getFullYear()}`;
   image =URL.createObjectURL(image)
    

   checkbox.forEach((checkbox) => {output.push(checkbox.value)});


    let project = {
        title : title,
        image : image,
        author : author,
        duration:duration<30 ? duration+" hari" : parseInt(duration/30)+" bulan",
        date : date,
        checkbox: output,
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
        </a>
        <p class="card-durasi">${data.duration} </p>
        <p class="card-description">${data.content}</p>
        <div class="card-technologies">${data.checkbox.toString().replaceAll(',',' ')}
        </div>
        <div style=" display: flex;">
        <button onclick="edit(${index})" class="butom-action" style="margin-right: 10px;">Edit</button>
        <button onclick="hapus(${index})" class="butom-action">Hapus</button>
        </div>
        `
    })
}

function edit(index){
    console.log(index);
}

    function hapus(index){
        console.log(index);
    }

    function difference(date1, date2) {  
        const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
          day = 1000*60*60*24;
        return(date2utc - date1utc)/day
    }