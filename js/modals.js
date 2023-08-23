//Function show modal
function openModal(id) {
    myModal = new bootstrap.Modal(document.getElementById(id), {
        keyboard: false
    })
    myModal.show();
}
//function change color header and footer Modal

function changeHFModal(colorHFModal) {
    headerModal.forEach(function(headMod) {
        headMod.style.background = colorHFModal;
    });
    footerModal.forEach(function(footerMod) {
        footerMod.style.background = colorHFModal;
    });
}

MODAL_ERROR.addEventListener('click', () => {
    if (current_Modal != 'botSearchoffer') {
        openModal(current_Modal)
    } else {
        openModal('botSearchoffer');
        progress = 0
        createBar();
        // Start progress bar
        startProgressBar();

        // Execute asynchronous function with progress bar
        executeAsyncFunctionWithProgress(listProduct);
    }
})

MODAL_ERROR.addEventListener('shown.bs.modal', event => {
    /*resultDiv.style.visibility = 'hidden'
    tableModalBSO.style.visibility = 'hidden'
    labelModal.style.visibility = 'visible'*/
});


MODAL_ERROR.addEventListener('hidden.bs.modal', event => {

});
runapp1.addEventListener('click', () => {
    changeHFModal('linear-gradient(rgba(255, 255, 255, 0.5), rgba(13, 56, 119, 0.5))')
});
runapp2.addEventListener('click', () => {
    changeHFModal('linear-gradient(rgba(252, 206, 1, 0.8), rgba(0, 0, 0, 0.2))')
});
runapp3.addEventListener('click', () => {
    changeHFModal('linear-gradient(rgba(0, 70, 145, 0.9), rgba(230, 48, 39, 0.2))')
});