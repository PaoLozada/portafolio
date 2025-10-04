const updateProgress = (progress) => {
    progrBar.style.width = `${progress}%`;
    progressLabel.innerText = `${progress}%`;
    if (progress < 10) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Abriendo navegador...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Open1.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Abriendo navegador...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Open1.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Abriendo navegador...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Open1.png)";
                break;
            case 'BSV':
                labelModal.innerHTML = "Abriendo navegador...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Open1.png)";
                break;
            default:
                break;
        }
    }
    if (progress >= 10 && progress < 25) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Cargando la página de Katronix...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Load2.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Cargando la página de Totto...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/Load.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Cargando la página de Computrabajo...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/Load.png)";
                break;
            case 'BSV':
                labelModal.innerHTML = "Cargando la página de YouTube...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/You/Load.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 25 && progress < 37) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Desplegando tabla celulares...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Cel3.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Desplegando menu de busqueda...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/selectCategory.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Insertando trabajo de busqueda...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/searchJob.png)";
                break;
            case 'BSV':
                labelModal.innerHTML = "Ingresando criterio de busqueda...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/You/Search.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 37 && progress < 50) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Accediendo a enlace de teléfono celular...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Cel4.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Cerrando notificación...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/closeN.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Insertando lugar de busqueda...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/searchLoc.png)";
                break;
            case 'BSV':
                labelModal.innerHTML = "Listando los primeros vídeos que coinciden con la busqueda...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/You/List.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 50 && progress < 62) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Cerrando notificación Cookies...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/CloseNot5.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Seleccionando categoria...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/selectCategory.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Haciendo clic en boton de busqueda...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/clickSearch.png)";
                break;
            case 'BSV':
                labelModal.innerHTML = "Comparando los nombres de los vídeos listados con el criterio de busqueda...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/You/Compare.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 62 && progress < 75) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Haciendo clic en menu desplegable para ordenar...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Drop6.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Seleccionando del precio o color...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/selectColorPrice.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Seleccionando filtro de fecha...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/filterDate.png)";
                break;
            case 'BSV':
                labelModal.innerHTML = "Seleccionando el primer vídeo de la lista que coincide con el criterio de busqueda...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/You/Compare.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 75 && progress < 88) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Organizando los precios de menor a mayor...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Order7.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Esperaando por los productos...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/waitProduct.png)";
                break;
            case 'BSJ':
                labelModal.innerHTML = "Esperando vacantes que cumplen con los filtros aplicados...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/waitVacancies.png)";
                break;
            case 'BSV':
                labelModal.innerHTML = "Asignando a la variable el valor de las vistas del vídeo capturado o en caso de no encontrar coincidencias asignando el valor de null...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/You/Select.png)";
                break;
            default:
                break;
        }

    }
    if (progress >= 88) {
        switch (botName) {
            case 'BSO':
                labelModal.innerHTML = "Capturando el nombre y el valor de los tres primeros productos...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Ktronix/Order7.png)";
                break;

            case 'BNP':
                labelModal.innerHTML = "Capturando productos...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Totto/captProduct.png)";

                break;
            case 'BSJ':
                labelModal.innerHTML = "Capturando empleo, empleador y fecha de publicación...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/Comput/captJobs.png)";
                break;
            case 'BSV':
                labelModal.innerHTML = "Capturando el valor de la variable a la cual se aginaron las vistas...";
                bodyModal.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.7)), url(/img/Bots/You/Captu.png)";
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

const executeAsyncFunctionWithProgress = async (executeApp) => {
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