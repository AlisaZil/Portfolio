let projectData = [
    {
        name: 'Matas',
        description: "",
        imgSrc: './assets/projects/matas.svg',
        URL: "",
        githubUrl:""
    },
    {
        name: 'Achdut Israel',
        description: "",
        imgSrc: './assets/projects/meshektech.svg',
        URL: "",
        githubUrl:""
    },
    {
        name: 'Component Libary',
        description: "",
        imgSrc: './assets/projects/storybook.svg',
        URL: "",
        githubUrl:""
    },
    {
        name: 'Music Player',
        description: "",
        imgSrc: './assets/projects/spotify.svg',
        URL: "",
        githubUrl:""
    },
    {
        name: 'FloralJoy - Landing Page',
        description: "",
        imgSrc: './assets/projects/floral-joy.svg',
        URL: "",
        githubUrl:""
    },
    {
        name: 'Atendi - landing page',
        description: "",
        imgSrc: './assets/projects/atendi.svg',
        URL: "",
        githubUrl:""
    }
]


const upperRowDecor = document.querySelector('.upper-row-decor')
const bottomRowDecor = document.querySelector('.bottom-row-decor')

window.addEventListener("load", (event) => { 
    addHeightToPage();
    addDecorRows(upperRowDecor);
    addDecorRows(bottomRowDecor);
    addProjectsToPortfolio();
    getDateDay();
})

function addHeightToPage() {
    const mainPage = document.querySelector('.main-section');
    const protfolioSection = document.querySelector('.portfolio-section');
    protfolioSection.style.height = window.innerHeight * 1;
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

    const projectBlocks = document.querySelector('.project-blocks');

    projectData.forEach(element => {
        const projectSection = document.createElement('div');
        const projectBlock = document.createElement('div');
        const projectImg = document.createElement('img');
        const projectName = document.createElement('p');

        projectSection.classList.add('.project-section');
        projectBlock.classList.add('project-block');
        projectImg.classList.add('project-img');
        projectName.classList.add('project-name');

        projectImg.src = element.imgSrc;
        projectName.innerText = element.name;

        projectBlock.appendChild(projectImg);
        projectBlocks.appendChild(projectBlock);
        projectSection.appendChild(projectName);
        projectSection.appendChild(projectBlock);

        projectBlocks.appendChild(projectBlock);
    });
}