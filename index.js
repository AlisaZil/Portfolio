let projectData = [
    {
        name: 'Matas Project',
        dates: '2022, 2023',
        description: "",
        imgSrc: '',
        URL: "",
        githubUrl:""
    },
    {
        name: 'Achdut Israel',
        dates: '2023 - Today',
        description: "",
        imgSrc: '',
        URL: "",
        githubUrl:""
    },
    {
        name: 'Angular Component Libary',
        dates: '2023',
        description: "",
        imgSrc: '',
        URL: "",
        githubUrl:""
    },
    {
        name: 'Js Music Player',
        dates: '2022',
        description: "",
        imgSrc: '',
        URL: "",
        githubUrl:""
    },
    {
        name: 'FloralJoy - Landing Page',
        dates: '2023',
        description: "",
        imgSrc: '',
        URL: "",
        githubUrl:""
    },
    {
        name: 'Atendi - landing page',
        dates: '2022',
        description: "",
        imgSrc: '',
        URL: "",
        githubUrl:""
    },
    {
        name: 'IP tracker',
        dates: '2023',
        description: "",
        imgSrc: '',
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
    addFilesToPortfolio();
    getDateDay();
})

function addHeightToPage() {
    const mainPage = document.querySelector('.main-section');
    const protfolioSection = document.querySelector('.portfolio-section');
    protfolioSection.style.height = window.innerHeight;
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

function addFilesToPortfolio() {
    const fileSection = document.querySelector('.file-section');

    projectData.forEach(element => {
        const file = document.createElement('div');
        file.classList.add('file');

        const fileImg = document.createElement('img');
        fileImg.src = './assets/file.svg';

        const fileName = document.createElement('p');
        file.innerText = element.name;
        fileName.classList.add('file-name');

        file.appendChild(fileImg);
        file.appendChild(fileName);
        fileSection.appendChild(file);
    });
}