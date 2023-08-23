//Execute Bot Search Offers
const startButtonBSO = document.getElementById('executeBSO');
startButtonBSO.addEventListener('click', () => {
    current_Modal = 'botSearchoffer'
    botName = 'BSO'
    progressCount = 250
    openModal('botSearchoffer');
    progress = 0
    createBar();
    // Start progress bar
    startProgressBar();

    // Execute asynchronous function with progress bar
    executeAsyncFunctionWithProgress(listProduct);
});

//Execute Bot Search New Products
const startButtonBNP = document.getElementById('executeBNP');
startButtonBNP.addEventListener('click', () => {
    current_Modal = 'selectItems'
    botName = 'BNP'
    progressCount = 500
    openModal('botSearchoffer');
    progress = 0;
    createBar();
    // Start progress bar
    startProgressBar();

    // Execute asynchronous function with progress bar
    executeAsyncFunctionWithProgress(newProduct);
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
    progressCount = 500;
    openModal('botSearchoffer');
    progress = 0;
    createBar();
    // Start progress bar
    startProgressBar();

    // Execute asynchronous function with progress bar
    executeAsyncFunctionWithProgress(searchJob);
});