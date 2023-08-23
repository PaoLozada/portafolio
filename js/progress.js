const updateProgress = (progress) => {
    progrBar.style.width = `${progress}%`;
    progressLabel.innerText = `${progress}%`;
    if (progress < 10) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Open Browser";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Open1.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Open Browser";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Open1.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Open Browser";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Open1.png)";
                break;
            default:
                break;
        }
    }
    if (progress >= 10 && progress < 25) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Loading the Katronix page";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Load2.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Loading the Totto page";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/Load.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Loading the Computrabajo page";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/Load.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 25 && progress < 37) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Display tab Celulares";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Cel3.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Click menu search criteria";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/selectCategory.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Insert job to search";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/searchJob.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 37 && progress < 50) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Click on the cell phone link";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Cel4.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Close Notification";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/closeN.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Insert location to search";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/searchLoc.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 50 && progress < 62) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Close cookie notification";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/CloseNot5.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Select Category";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/selectCategory.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Clic in button search";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/clickSearch.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 62 && progress < 75) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Go to dropdown to select order";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Drop6.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Select Price or Color Option";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/selectColorPrice.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Select date filter";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/filterDate.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 75 && progress < 88) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Sort from lowest to highest price";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Order7.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Wait for products";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/waitProduct.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Wait for available vacancies according to applied filters";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/waitVacancies.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 88) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Capturing Name and price of the first three products";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Order7.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Capturing Products";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/captProduct.png)";

                break;
            case 'BSJ':
                labelModal.innerHTML = "Capturing employment, employer data and posting data";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/captJobs.png)";
                break;
            default:
                break;
        }

    }
};


function createBar() {

    progrBar.className = 'progress-bar progress-bar-striped progrBar';
    progressLabel.className = 'progressLabel';
    contenedor_bar.appendChild(progrBar);
    progrBar.appendChild(progressLabel);

}

const startProgressBar = () => {
    // Start interval to update progress every so often
    const intervalId = setInterval(() => {
        // Update progress
        progress += 1;

        // Check if 100% is reached
        if (progress >= 99) {
            clearInterval(intervalId);
        }

        // Update progress bar and label
        updateProgress(progress);

    }, progressCount);
};


//Init Execute Bots whit Buttons Click

const executeAsyncFunctionWithProgress = async(executeApp) => {
    // Update progress bar and label initially
    updateProgress(progress);
    progress = 0
        // Execute asynchronous function
    await executeApp();

    // Async function has finished, set progress to 100%
    progress = 100;

    // Update progress bar and label
    updateProgress(progress);

};