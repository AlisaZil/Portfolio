let projectData = [
    {
        name: 'Matas',
        description: "",
        imgSrc: './assets/projects/matas.svg',
        URL: "",
        githubUrl: "",
        disable: true
    },
    {
        name: 'Achdut Israel',
        description: "",
        imgSrc: './assets/projects/meshektech.svg',
        URL: "",
        githubUrl: "",
        videoUrl:"./video/achdut.mp4"
    },
    {
        name: 'Component Libary',
        description: "",
        imgSrc: './assets/projects/storybook.svg',
        URL: "",
        githubUrl: "",
        disable: true
    },
    {
        name: 'FloralJoy',
        description: "",
        imgSrc: './assets/projects/floral-joy.svg',
        URL: "https://alisazil.github.io/floralJoy.github.io",
        githubUrl: ""
    },
    {
        name: 'Atendi',
        description: "",
        imgSrc: './assets/projects/atendi.svg',
        URL: "",
        githubUrl: "",
        videoUrl:"./video/athendi.mp4"
    },
    {
        name: 'Music Player',
        description: "",
        imgSrc: './assets/projects/spotify.svg',
        URL: "https://alisazil.github.io/my-audio-player/",
        githubUrl: ""
    }
];

let buttons = [
    {
        value: "AlisaZilberman@gmail.com",
        url: 'email'
    },
    {
        value: "Github",
        url: 'https://github.com/AlisaZil'
    },
    {
        value: "linkedin",
        url: 'https://www.linkedin.com/in/alisa-zilberman-4408a7242/'
    },
    {
        value: "Xplace",
        url: 'https://www.xplace.com/il/u/alisazilberman'
    }
]

const upperRowDecor = document.querySelector('.upper-row-decor')
const bottomRowDecor = document.querySelector('.bottom-row-decor')

window.addEventListener("load", (event) => { 
    JOS.init({
        duration: 1
    });
    addHeightToPage();
    addDecorRows(upperRowDecor);
    addDecorRows(bottomRowDecor);
    addProjectsToPortfolio();
    getDateDay();
    addButtonToConnect();
})

function addHeightToPage() {
    const mainPage = document.querySelector('.main-section');
    const contactMe = document.querySelector('.contact-me-section');
    contactMe.style.height = window.innerHeight * 0.95;
    mainPage.style.height = window.innerHeight;
}

function addDecorRows(row) {
    for (let i = 0; i < 4; i++) {
        let decorRow = document.createElement('div');
        decorRow.classList.add('decor-row');
        row.appendChild(decorRow);
    }
}

function getDateDay() {

    const day = document.querySelector('.day');
    const month = document.querySelector('.month');

    let date = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    day.innerText = date.getDate();
    month.innerText = monthNames[date.getMonth()];
}

function dateAnimation() {
    
}

const dateSection = document.querySelector('.date-section');
const dateSectionAvailability = document.querySelector('.date-section .availability');

const dimBackground = document.querySelector('.dim-background');

dateSection.addEventListener("mouseover", (event) => {

    dateSection.style.backgroundColor = '#FC354C';
    dateSection.style.width = '25%';
    dateSectionAvailability.style.width = 'fit-content';
    dateSectionAvailability.innerText = 'this is a fake availability :( contact me to check my actual status';
    dateSectionAvailability.style.animationName = "changeColor";


    dimBackground.style.opacity = 1;
    dimBackground.style.zIndex = 2;
});

dateSection.addEventListener("mouseleave", (event) => {
    dateSection.style.width = '0%';
    dateSection.style.backgroundColor = 'transparent';
    dateSectionAvailability.style.width = '100px';
    dateSectionAvailability.innerText = 'Available for work';
    dateSectionAvailability.style.animationName = "";
    


    dimBackground.style.opacity = 0;
    dimBackground.style.zIndex = 0;
});

function redirectePage(location) {
    window.location.href = location;
}

const infoLopp = document.querySelector('.more-info-loop p');

infoLopp.addEventListener('mouseenter', (e) => {
    console.log(e.currentTarget);
})

function addProjectsToPortfolio() {

    const projectSections = document.querySelector('.project-sections');

    projectData.forEach(element => {
        
        const projectSection = document.createElement('div');
        const projectBlock = document.createElement('div');
        const projectImg = document.createElement('img');
        const projectName = document.createElement('p');

        projectSection.classList.add('project-section');
        projectBlock.classList.add('project-block');

        if (element.disable) {
            projectBlock.classList.add('disable');
        }

        projectBlock.classList.add('project-block');
        projectImg.classList.add('project-img');
        projectImg.classList.add(element.name.split(' ').join('_'));

        projectName.classList.add('project-name');

        projectImg.src = element.imgSrc;
        projectName.innerText = element.name;

        projectBlock.appendChild(projectImg);
        projectSections.appendChild(projectBlock);
        projectSection.appendChild(projectName);
        projectSection.appendChild(projectBlock);

        projectBlock.addEventListener('click', () => {
            if (element.URL) {
                window.open(element.URL);
            }
            if (element.videoUrl) {
                
                document.querySelector('.source').src = element.videoUrl;
                document.querySelector('.video').load();
                document.querySelector('.video-section').style.display = 'block';
                document.querySelector('.dim-background').style.opacity = '1';
            }

            else {
                
            }
        })

        projectSections.appendChild(projectSection);
    });
}

function addButtonToConnect() {
    
    const buttonSection = document.querySelector('.button-section');

    buttons.forEach((button) => {
        const buttonWrap = document.createElement('div');
        const link = document.createElement('a');
        const span = document.createElement('span');

        buttonWrap.classList.add('contact-button');
        span.innerText = button.value;
        link.appendChild(span);
        buttonWrap.appendChild(link);

        buttonSection.appendChild(buttonWrap);

        if (button.url === 'email') {
            buttonWrap.addEventListener('click', () => {
              window.location.href = 'mailto:' + button.value;
            })
            
        } else {
            buttonWrap.addEventListener('click', () => {
              window.open(button.url);
            })
        }
    })
}
