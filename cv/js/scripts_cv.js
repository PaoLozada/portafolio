/*************mode*****/
const btn = document.getElementById("toggle-theme");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("light");
});

/********************CV*****************/
const cube = document.getElementById("cube");

const clickOnSide = (side) => {
    const activeSide = cube.dataset.side;
    cube.classList.replace(`show-${activeSide}`, `show-${side}`);
    cube.setAttribute("data-side", side);
};

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const sideToTurn = e.target.dataset.side;
        clickOnSide(sideToTurn);
    })
});

