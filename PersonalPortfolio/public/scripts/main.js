var dash = dash || {};

dash.AboutMePageController = class{

    constructor()
    {
        document.querySelector("#githubBtn").onclick = (event) => {
        
            window.location.href = 'https://github.com/rhit-webbma';
    
        }
    
        document.querySelector("#linkedInBtn").onclick = (event) => {
            
            window.location.href = 'https://www.linkedin.com/in/michael-webb-/';
    
        }
    
        document.querySelector("#emailBtn").onclick = (event) => {
            
            window.location.href = 'mailto:thedasherx@gmail.com';
    
        }
    
        document.querySelector("#resumeBtn").onclick = (event) => {
            
            window.location.href = 'file:///C:/Users/theda/Documents/PersonalPortfolio/public/resume.html';
    
        }
    }

}

dash.ResumePageController = class{

    constructor()
    {
        document.querySelector("#backBtn").onclick = (event) => {
        
            console.log("hello");
            window.location.href = 'file:///C:/Users/theda/Documents/PersonalPortfolio/public/index.html';
    
        }
    }

}



dash.main = function () {

    if(document.querySelector("#resumeContainer"))
    {
        new dash.ResumePageController();
    }
    else
    {
        new dash.AboutMePageController();
    }

};

dash.main();