require('./style.css')

/**
 * Estructure sus datos de la forma que considere
 */
const data = {
    name: "Jhon Rafael",
    last_name: "Pereira Delgado",
    address: "Colemenar Viejo, Spain",
    sex: "yes pls.. I mean male",
    photo:"https://i.pinimg.com/564x/d6/53/78/d6537837a5f328ce4ba497ce869cd307.jpg",
    courses:[
        {
            name: "cooking like a God, part I",
            year: "2015",
            certificated: false,
        },
        {
            name: "Lion Tamer",
            year: "2016",
            certificated: "by a lion´s bite"
        },
        {
            name:"bootstrap 4Geeks Academy",
            year:"2020",
            cerificated:"hell yeah"
        }
    ],
    work_experince:[
        {
            job_name:"Lion Tamer",
            year:"2015",
            dependets:"6 and a half lions"
        },
        {
            job_name:"administrator",
            year:"2019",
            dependets:"none"
        }
    ]
}

window.onload = function() {
  /* Modifique el código en este bloque */
    let cv = document.querySelector('#cv');
    
    //Header
    let header = document.createElement('div');
    header.className ='container'

    let photo_profile = document.createElement('img')
    photo_profile.className = 'mr-3'
    photo_profile.src = data.photo

    header.appendChild(photo_profile);

    let mediaContent = document.createElement('div');
    mediaContent.className ='media-body'

    let description = document.createElement('h5');
    description.className = 'mt-0'
    description.innerHTML = data.name + data.last_name

    mediaContent.appendChild(description);
    header.appendChild(mediaContent);
    cv.appendChild(header);





  /* Fin del bloque*/
}