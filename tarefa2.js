document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button-wrapper');
    let activeButton = null;
    const abaco = document.getElementById("abaco");
    const pascalina = document.getElementById("pascalina");
    const maquinaAnalitica = document.getElementById("maquina-analitica");
    const ada = document.getElementById("ada");
    const imgAda = document.getElementById("imgAda");
    const maquinaDeTuring = document.getElementById("maquina-de-turing");
    const cartõesPerfurados = document.getElementById("cartões-perfurados");
    const projetoManhattan = document.getElementById("projeto-manhattan");
    const ENIAC = document.getElementById("ENIAC");
    const imgBomb = document.getElementById("imgBomb");

    buttons.forEach(buttonWrapper => {
        buttonWrapper.addEventListener('click', function (event) {
            if (activeButton) {
                activeButton.classList.remove('center');
            }
            buttonWrapper.classList.add('center');
            activeButton = buttonWrapper;
            abaco.style.display = ("block");
            pascalina.style.display = ("block");
            maquinaAnalitica.style.display = ("block");
            ada.style.display = ("block");
            imgAda.style.display = ("block");
            maquinaDeTuring.style.display = ("block");
            cartõesPerfurados.style.display = ("block");
            projetoManhattan.style.display = ("block");
            ENIAC.style.display = ("block");
            imgBomb.style.display = ("block");
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function () {
        if (activeButton) {
            activeButton.classList.remove('center');
            activeButton = null;
            abaco.style.display = ("none");
            pascalina.style.display = ("none");
            maquinaAnalitica.style.display = ("none");
            ada.style.display = ("none");
            imgAda.style.display = ("none");
            maquinaDeTuring.style.display = ("none");
            cartõesPerfurados.style.display = ("none");
            projetoManhattan.style.display = ("none");
            ENIAC.style.display = ("none");
            imgBomb.style.display = ("none");
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button-wrapper');
    let activeButton = null;

    buttons.forEach(buttonWrapper => {
        buttonWrapper.addEventListener('click', function (event) {
            if (activeButton && activeButton !== buttonWrapper) {
                activeButton.classList.remove('show-title');
            }
            buttonWrapper.classList.toggle('show-title');
            activeButton = buttonWrapper; 
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function (event) {
        if (activeButton && !activeButton.contains(event.target)) {
            activeButton.classList.remove('show-title');
            activeButton = null;
        }
    });
});

