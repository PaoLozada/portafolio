AOS.init();

spans.forEach((span, idx) => {
    span.addEventListener('mousemove', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx + 1))
});

//Show Now

document.addEventListener("DOMContentLoaded", function() {
    now.style.visibility = 'hidden';
    setTimeout(() => {
        now.style.visibility = 'visible';
    }, 7000)
});

//Animation about
function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
    finish = false;
    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            finish = false;
            element.append(text.charAt(i));
            i++;
        } else {
            finish = true;
            clearInterval(timer);

        }
    }, speed);

}
//Popup menu 
(function() {
    class Menu {
        constructor(settings) {
            this.menuRootNode = settings.menuRootNode;
            this.isOpened = false;
        }

        changeMenuState(menuState) {
            return this.isOpened = !menuState;
        }

        changeToggleHint(toggleHint, toggleNode) {
            toggleNode.textContent = toggleHint;
            return toggleHint;
        }
    }



    const jsMenuNode = document.querySelector('.menu');
    const demoMenu = new Menu({
        menuRootNode: jsMenuNode
    });

    function getCurrentToggleHint(currentMenuState) {
        return (currentMenuState !== true) ? 'Open menu' : 'Close menu';
    }

    function toggleMenu(event) {
        let currentMenuState = demoMenu.changeMenuState(demoMenu.isOpened);
        let toggleHint = getCurrentToggleHint(currentMenuState);

        demoMenu.changeToggleHint(
            toggleHint,
            demoMenu.menuRootNode.querySelector('.menu__toggle-hint')
        );
        demoMenu.menuRootNode.classList.toggle('menu_activated');

        return currentMenuState;
    }

    jsMenuNode.querySelector('.menu__toggle').addEventListener('click', toggleMenu);
    let home = document.querySelectorAll('.r-link');
    home.forEach(function(ele) {
        ele.addEventListener('click', toggleMenu);
    });
})();

// Start to write aboutme
function typeAbout() {
    let scrollT = document.documentElement.scrollTop;
    let hei = hOne.offsetTop;
    if (hei - 500 <= scrollT && finish == true && hei - 190 > scrollT) {
        // type affect to header
        typeEffect(hOne, speed);


        // type affect to body
        setTimeout(function() {
            par.style.display = "inline-block";
            typeEffect(par, speed);
        }, delay);
    }


}
window.addEventListener('scroll', typeAbout);



function captureCheckbox(checkboxes) {
    // Recorrer todos los checkboxes
    checkboxes.forEach(function(checkbox) {

        // Agregar un evento 'change' a cada radio button
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectItem = this.value
                console.log("value: " + selectItem);
            }
        });

    });
}
captureCheckbox(checkboxItem);
captureCheckbox(checkboxItemBSJ)

//Functions update select
function updateSelectColor() {
    options = colorsS[1]
    listoptions = colorsS
    if (checkColor.checked) {
        countItem = 1
        for (n of colors) {
            let optionToModify = intemTot.options[countItem];
            optionToModify.text = n;
            countItem++
        }
        categorys = checkColor.value
    }
}

function updateSelectPrice() {
    options = pricesS[1]
    listoptions = pricesS
    if (checkboxPrice.checked) {
        countItem = 1
        for (n of prices) {
            let optionToModify = intemTot.options[countItem];
            optionToModify.text = n;
            countItem++
        }
        categorys = checkboxPrice.value
    }
}
intemTot.addEventListener('change', function() {
    let selectedValue = intemTot.options[intemTot.selectedIndex].value;
    options = listoptions[(parseInt(selectedValue)) - 1]
    console.log(options)
});