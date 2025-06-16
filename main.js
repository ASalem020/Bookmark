var siteName=document.getElementById('name' )
var url=document.getElementById('url' )
var submit = document.getElementById('submit')
var tbody= document.getElementById('tbody')
var fady=''
var cartona =''
var index =1
var sites=[]
if(localStorage.getItem("sites")){
     sites=JSON.parse(localStorage.getItem('sites'))
     displaySites()
}

function validate() {
    const nameVal = siteName.value;
    const urlVal = url.value;

    const nameIsValid = nameVal.length >= 4;
    const urlRegex = /^(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}$/;
    const urlIsValid = urlRegex.test(urlVal);

    if (!nameIsValid || !urlIsValid) {
        alert("❌ Please enter:\n- A site name with at least 4 characters\n- A valid URL like example.com or www.example.com");
        return false;
    }

    return true;
}

function validateInputs() {
    const nameVal = siteName.value;
    const urlVal = url.value;

    const nameIsValid = nameVal.length >= 4;
    const urlRegex = /^(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}$/;
    const urlIsValid = urlRegex.test(urlVal);

    
    if (nameVal === '') {
        siteName.classList.remove('is-valid', 'is-invalid');
    } else if (nameIsValid) {
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
    } else {
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
    }

    
    if (urlVal === '') {
        url.classList.remove('is-valid', 'is-invalid');
    } else if (urlIsValid) {
        url.classList.add('is-valid');
        url.classList.remove('is-invalid');
    } else {
        url.classList.add('is-invalid');
        url.classList.remove('is-valid');
    }
}



function deleteSite(id){
   sites.splice(id,1)
    localStorage.setItem("sites",JSON.stringify(sites))
index=index-2

console.log(index);
console.log(sites);

displaySites()
}
function addSites(){
      if (!validate()) return;
        var site= {id:index,name:siteName.value,url:url.value}
    sites.push(site)
    localStorage.setItem("sites",JSON.stringify(sites))
    
    displaySites()
    console.log(sites);
    
}

function displaySites() {
    cartona=''
    for (var i =0 ; i<sites.length;i++){
        cartona+=`   <tr>
            <td>${i+1}</td>
            <td> ${sites[i].name}</td>
            <td><a  href="https:/${sites[i].url}" target="_blank" class="btn btn-success">
                  <i class="fas fa-eye"></i> visit
                </a>
            </td>
            <td><a onclick="deleteSite(${i})" class="btn btn-danger">
                  <i class="fas fa-dumpster "></i> delete
                </a>
            </td>
          </tr>`

    }
      tbody.innerHTML=cartona
      siteName.value=''
      url.value=''
    index++
    siteName.classList.remove('is-valid', 'is-invalid');
    url.classList.remove('is-valid', 'is-invalid');

}
