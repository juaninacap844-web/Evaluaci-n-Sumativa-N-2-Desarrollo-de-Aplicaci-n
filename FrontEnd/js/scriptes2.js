function datos(inferior,superior){
    this.inferior = inferior
    this.superior= superior

    this.getinferior = function(){
        return this.inferior
    }
    this.getsuperior = function(){
        return this.superior
    }
}
function cargarInferior() {

    const numerosInferior = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];


    const select = document.getElementById("inferior");

    numerosInferior.forEach(function(datosinferior){

        const option = document.createElement("option");

        option.value = datosinferior;
        option.textContent = datosinferior;

        select.appendChild(option);
    });
}

function cargarSuperior() {

    const numerosSuperior = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000];

    const select = document.getElementById("superior");

    numerosSuperior.forEach(function(datosSuperior){

        const option = document.createElement("option");

        option.value = datosSuperior;
        option.textContent = datosSuperior;

        select.appendChild(option);
    });
}

function verMiembroVentana(){
    ventana = window.open("","","height=400,width=500")
    content = "<html><head><title>Lista</title></head><body>"
    ventana.document.write(content)
    for (let index = 0; index < listMemb.length; index++) {
        ventana.document.write(listMemb[index].getinferior())
        ventana.document.write(listMemb[index].getsuperior())
        ventana.document.write("<br/>")
        
    }
    content = "</body></html>"
    ventana.document.write(content)
}