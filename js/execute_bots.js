//Execute Bot Search Offers
const startButtonBSO = document.getElementsByClassName("executeBSO")[0];
startButtonBSO.addEventListener('click', () => {
    current_Modal = 'botSearchoffer'
    botName = 'BSO'
    progressCount = 270
    openModal('botSearchoffer');
    progress = 0
    createBar();
    // Start progress bar
    startProgressBar();

    // Execute asynchronous function with progress bar
    executeAsyncFunctionWithProgress(listProduct);
});


//Execute Bot Search Jobs
const startButtonBSJ = document.getElementById('executeBSJ');
let inputLocation = document.getElementById('location');
let inputJob = document.getElementById('job');

startButtonBSJ.addEventListener('click', () => {
    current_Modal = 'selectItemsJobs'
    if (inputLocation.value == '') {
        input_location = 'Cundi'
    } else {
        input_location = inputLocation.value;
    }
    if (inputJob.value == '') {
        input_job = 'QA'
    } else {
        input_job = inputJob.value;
    }

    console.log(input_location + ' El valor capturado es: ' + input_job + ' en tiempo ' + selectItem);
    botName = 'BSJ'
    progressCount = 300;
    inputLocation.value = ''
    inputJob.value = ''
    openModal('botSearchoffer');
    progress = 0;
    createBar();
    // Start progress bar
    startProgressBar();

    // Execute asynchronous function with progress bar
    executeAsyncFunctionWithProgress(searchJob);
});

//Execute Bot Search Views
const startButtonBSV = document.getElementById('executeBSV');
let inputViews = document.getElementById('name_video');

startButtonBSV.addEventListener('click', () => {
    current_Modal = 'selectItemsViews'
    if (inputViews.value == '') {
        input_name_video = 'QA Automation'
    } else {
        input_name_video = inputViews.value;
    }
    console.log('El valor capturado es: ' + input_name_video);
    botName = 'BSV'
    progressCount = 250;
    inputViews.value = ''
    openModal('botSearchoffer');
    progress = 0;
    createBar();
    // Start progress bar
    startProgressBar();

    // Execute asynchronous function with progress bar
    executeAsyncFunctionWithProgress(searchViews);
});