//Init
const spans = document.querySelectorAll('.word span');
let now = document.querySelector('.now');
let finish = true;

//Type about
let speed = 75;
let hOne = document.querySelector('.aboutTitle');
let par = document.querySelector('.aboutDes');
let delay = hOne.innerHTML.length * speed + speed;

//Modals
let myModal
const bodyModal = document.getElementById('bodyModal');
let headerModal = document.querySelectorAll('.modal-header');
let footerModal = document.querySelectorAll('.modal-footer');
let modalError = document.getElementById('modalError')
let resultDiv = document.getElementById("resultBSO");
let labelModal = document.getElementById("labelModal");
let tableModalBSO = document.getElementById("tableModalBSO");
let botSearchoffer = document.getElementById('botSearchoffer');
let current_Modal
    //Configurate Error_Modal
const MODAL_ERROR = document.getElementById('modalAgain')

//Accordion Run
let runapp1 = document.querySelector('.runapp1')
let runapp2 = document.querySelector('.runapp2')
let runapp3 = document.querySelector('.runapp3')

//Inputs
let input_job = "QA";
let input_location = "Cundinamarca";

//checkbox
let option_time = "4";
let resultBSJ = document.getElementById("resultBSJ");
let resultBNP = document.getElementById('resultBNP');
let selectItem = "4";
let categorys = "Color";
let checbox_var
let checkboxItem = document.querySelectorAll('input[name="itemCheck"]');
let checkboxItemBSJ = document.querySelectorAll('input[name="itemCheckBSJ"]');
let checkboxPrice = document.getElementById("checkPrice");
let checkColor = document.getElementById("checkColor")

//Selects
let options = "Gris";
let intemTot = document.getElementById('seletTot')

//Vars updates selects Tottos
let prices = ["50.000 - 100.000", "100.001 - 150.000", "150.001 - 200.000", "More that 200.000"]
let pricesS = ["50.000 - 100.000", "100.001 - 150.000", "150.001 - 200.000", "Más de 200.000"]
let colors = ["Blue", "Gray", "Black", "Purple"]
let colorsS = ["Azul", "Gris", "Negro", "Morado"]
let countItem = 1
let listoptions = ''


let botName = ''

//Progress bar
let progress = 0;
const progrBar = document.createElement('div');
const progressLabel = document.createElement('div');
const progressCont = document.getElementById('contenedor_bar');
let progressCount = 0