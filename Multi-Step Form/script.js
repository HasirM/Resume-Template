tab = 1;

var tabs = document.getElementsByClassName('tab');
var newTabs = document.getElementsByClassName('new');

function backShow(){
    if (tab == 1){
        document.getElementById('back').style.display = 'none';
    }else{
        document.getElementById('back').style.display = 'inline';
    }
}

function submitShow(){
    if (tab == tabs.length){
        document.getElementById('next').style.display = 'none';
        document.getElementById('submit').style.display = 'inline';
    }
}

function submitHide(){
    if (tab < tabs.length){
        document.getElementById('next').style.display = 'inline';
        document.getElementById('submit').style.display = 'none';
    }
}

function addShow(){
    if (tab < 3){
        document.getElementById('add').style.display = 'none';
    }else{
        document.getElementById('add').style.display = 'inline';
    }
}

function removeShow(){
    if (tab < 3){
        document.getElementById('remove').style.display = 'none';
    }else{
        if( newTabs.length == 0){
            document.getElementById("remove").style.display = 'none';
        }else{
            document.getElementById("remove").style.display = 'inline';
        }
    }
}

// function removeHide(){
//     if (tab < tabs.length){
//         document.getElementById('next').style.display = 'inline';
//         document.getElementById('submit').style.display = 'none';
//     }
// }


function Next(){
    if (tab < tabs.length){
    document.getElementById(tab).style.marginLeft = '-280px';
    document.getElementById(++tab).style.marginLeft = '40px';
    removeShow()
    submitShow()
    addShow()
    backShow()
    }
}

function Back(){
    document.getElementById(tab).style.marginLeft = '280px';
    document.getElementById(--tab).style.marginLeft = '40px';
    addShow()
    backShow()
    submitHide()
    removeShow()
}

count = 3;

function Add(){
    var new_row = document.createElement("div");
    new_row.setAttribute('id', count+1)
    new_row.setAttribute('class', 'tab edu new')
    new_row.innerHTML = document.getElementById("3").innerHTML;
    document.getElementById("main").append(new_row);
    count++;
    submitHide()
    removeShow()
}

// function remove(){
//     var arr = [...newTabs];
//     var last = document.getElementById(count);
//     last.parentElement.removeChild(last);
//     console.log(arr.length,arr,arr[arr.length-1])
// }

function remove(){
    if(count > 3 ){
    const element = document.getElementById(count);
    element.remove();
    count--;
    }
}

function Remove(){
    var arr = [...newTabs];
    if(newTabs.length > 0){
        if (tab == tabs.length){
            Back()
            remove()
            submitShow()
        }else{
            remove()
            submitShow()
        }
    }if(newTabs.length == 0){
        document.getElementById('remove').style.display = 'none';
    }
    
    
}

//SUBMIT

var x = 0;
var arrPersonal = new Array();
var arrContact = new Array();
var arrEducation = new Array();
var arrMajor = new Array();
var arrInstitution = new Array();
var arrJyear = new Array();
var arrPyear = new Array();

function handleSubmit(){

    arrPersonal[0] = document.getElementById('fname').value;
    arrPersonal[1] = document.getElementById('lname').value;
    arrPersonal[2] = document.getElementById('aboutme').value;

    arrContact[0] = document.getElementById('phone').value;
    arrContact[1] = document.getElementById('email').value;
    arrContact[2] = document.getElementById('website').value;

    var edu = document.getElementsByClassName('edu');
    var x = 3;
    
    for (var i = 0; i<edu.length; i++){
         arrMajor[i] = document.getElementById(i+3).querySelector('#major').value;
         arrInstitution[i] = document.getElementById(i+3).querySelector('#institution').value;
         arrJyear[i] = document.getElementById(i+3).querySelector('#jyear').value;
         arrPyear[i] = document.getElementById(i+3).querySelector('#pyear').value;
    }
    
    arrEducation[0] = arrMajor;
    arrEducation[1] = arrInstitution;
    arrEducation[2] = arrJyear;
    arrEducation[3] = arrPyear;

    console.log('arrMajor',arrMajor)
    console.log('insti',arrInstitution)
    console.log('jyear',arrJyear)
    console.log('pyear',arrPyear)

    console.log("arrayPersonal :",arrPersonal)
    console.log("arrayContact :",arrContact)
    console.log('arrEduction',arrEducation)

    // const major = document.getElementById('major').value;
    // const institution = document.getElementById('institution').value;
    // const jyear = document.getElementById('jyear').value;
    // const pyear = document.getElementById('pyear').value;
    
    sessionStorage.setItem("Personal", arrPersonal);
    sessionStorage.setItem("Contact", arrContact);
    // sessionStorage.setItem("ABOUTME", aboutme);
    // sessionStorage.setItem("PHONE", phone);
    // sessionStorage.setItem("EMAIL", email);
    // sessionStorage.setItem("WEBSITE", website);
    // sessionStorage.setItem("MAJOR", major);
    // sessionStorage.setItem("INSTITUTION", institution);
    // sessionStorage.setItem("JYEAR", jyear);
    // sessionStorage.setItem("PYEAR", pyear);
    
}

