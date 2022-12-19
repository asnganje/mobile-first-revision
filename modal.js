const myMultiPost = document.getElementById('modalPortfolio');

const myRecentJobs = [{
    img: '',
    title: 'Multi Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'css', 'bootstrap', 'ruby'],
},
];

const loadRecentJobs = () => {
    let cardrecentJobs = '';
    for(let i=0; i<myRecentJobs.length; i++){
        const card = `
        <div class="multi-post">
            <div class="multi-post-img">
                <img src="./images/imagecard1 - Copy.png" class="multImg" alt="placeholder">
            </div>
            <div class="multi-post-text">
                <h3 class="post-title">${myRecentJobs[i].title}</h3>
                <p class="post-para">${myRecentJobs[i].description}</p>
                <ul class="post-lang">
                    <li class="lang">${myRecentJobs[i].technologies[0]}</li>
                    <li class="lang">${myRecentJobs[i].technologies[1]}</li>
                    <li class="lang">${myRecentJobs[i].technologies[2]}</li>
                    <li class="lang">${myRecentJobs[i].technologies[3]}</li>
                </ul>
                <button class="see" type="button">See Project</button>
                </div>
        </div>
        `;       
        cardrecentJobs += card;
}
    myMultiPost.innerHTML = cardrecentJobs;
}
loadRecentJobs();

const allProjects = document.getElementById('recentprojects');
const myProjects = [
    {
        projectTitle: 'Profesional Art Printing Data',
        projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projectTechnologies: ['html', 'bootstrap', 'ruby'],
    },
    {
        projectTitle: 'Profesional Art Printing Data',
        projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projectTechnologies: ['html', 'bootstrap', 'ruby'],
    },
    {
        projectTitle: 'Profesional Art Printing Data',
        projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projectTechnologies: ['html', 'bootstrap', 'ruby'],
    },
    {
        projectTitle: 'Profesional Art Printing Data',
        projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projectTechnologies: ['html', 'bootstrap', 'ruby'],
    },
    {
        projectTitle: 'Profesional Art Printing Data',
        projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projectTechnologies: ['html', 'bootstrap', 'ruby'],
    },
    {
        projectTitle: 'Profesional Art Printing Data',
        projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projectTechnologies: ['html', 'bootstrap', 'ruby'],
    },
];

const loadProjects = () => {
    let cardProjects = '';
    for(let i=0; i<myProjects.length; i++){
        const card1 = 
        `
        <div class="cards">
                <h4 class="hdata">${myProjects[i].projectTitle}</h4>
                <p class="paraInfo">
                ${myProjects[i].projectDescription}
                </p>
                <ul class="proj-list">
                    <li>${myProjects[i].projectTechnologies[0]}</li>
                    <li>${myProjects[i].projectTechnologies[1]}</li>
                    <li>${myProjects[i].projectTechnologies[2]}</li>
                </ul>
                <button type="button" class="see">See Project</button>
                </div>
        `;
        cardProjects += card1;
        
}
    allProjects.innerHTML = cardProjects;

}
loadProjects();

const popingUp = document.getElementById('popUPage');

const myPopUp = [
    {
        popTitle: 'Keeping track of hundreds of components website',
        popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        popImage: './images/desktopverson.png',
        popTechnologies: ['html', 'bootstrap', 'ruby'],
    },
];

const loadPopUp = (id) => {
    id = 0;
    const ourPopUp = `
    <div class="portfolio-modal">
      <div class="p-modal-header">
        <div class="modal-title"><h3>${myPopUp[id].popTitle}</h3></div>
        <div class="modal-title1"><h3>${myPopUp[id].popDescription}</h3></div>
        <button data-close-btn1 class="modal-close-btn" type="button">&times;</button>
      </div>

      <div class="p-modal-body">
        <div class="p-modal-icons">
          <ul class = "modal-listed">
            <li>${myPopUp[id].popTechnologies[0]}</li>
            <li>${myPopUp[id].popTechnologies[1]}</li>
            <li>${myPopUp[id].popTechnologies[2]}</li>
          </ul>
        </div>
        <div class="p-modal-img"><img src="${myPopUp[id].popImage}" class = "mobl-img" alt="snapshot portfolio"></div>
        </div>`;
    popingUp.innerHTML = ourPopUp;
}
loadPopUp();

const popUPmain = document.querySelector('.parentPopUp');
const trigger = document.querySelectorAll('.see');
const closePopup = document.querySelector('.modal-close-btn');

function togglePopUp() {
    popUPmain.classList.toggle('active');
}

function winOnClick(e) {
    if (e.target === popUPmain) {
        togglePopUp();
    }
}

trigger.forEach((element) => {
    element.addEventListener('click', togglePopUp);
  });
closePopup.addEventListener('click', togglePopUp);

window.addEventListener('click', winOnClick);