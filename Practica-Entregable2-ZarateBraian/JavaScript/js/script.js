// Registro de unidades de traslados

let Inventario = [];

// Funcion para agregar un vehiculo al inventario
function agregarNuevoVehiculo () {
    let Marca = prompt("Ingrese la marca del vehiculo");
    let Modelo = prompt("Ingrese el modelo del vehiculo");   
    let Velocidad = prompt("Ingrese la velocidad del vehiculo");
    let Patente = prompt("Ingrese la patente del vehiculo");

// Funcion para agregar un vehiculo al inventario
Inventario.push({ Marca, Modelo, Velocidad, Patente });
    alert(`El vehiculo ha sido agregado correctamente al inventario: - ${Marca} - ${Modelo} - ${Velocidad} - ${Patente}`);
return;
}


// Funcion para mostrar el inventario de vehiculos
function mostrarInventario() {
    if (Inventario.length === 0){
        alert("El inventario est    a vacio");
        return;         
    }
        let mensaje = "Inventario de vehiculos:\n";
        for(let i = 0 ; i < Inventario.length; i++){
            mensaje += `Vehiculo ${i+1}. - Marca: ${Inventario[i].Marca} - Modelo: ${Inventario[i].Modelo} - Velocidad: ${Inventario[i].Velocidad } - Patente: ${Inventario[i].Patente}\n`;
        }
        alert(mensaje);
}

// Funcion para eliminar un vehiculo del inventario
function eliminarVehiculo (){
    let patente = (prompt("Ingrese la patente del vehiculo a elimnar"))
    for(let i = 0; i < Inventario.length; i++){
        if(Inventario[i].Patente == patente){
            Inventario.splice(i, 1);
            alert(`El vehiculo con patente ${patente} Marca: ${Marca} - Modelo ${Modelo} -ha sido eliminado del inventario`)
        }
    }
        alert(`El vehiculo con patente ${patente} no existe en el inventario`)
        return;
    }

    //Mostrar Vehiculos con infracciones mayor 60KM

function mostrarVehiculosConInfracciones() {
    let mensaje = "Vehiculos con infracciones mayor a 60KM:\n";
    for (let i = 0; i < Inventario.length; i++) {
        if (Inventario[i].Velocidad > 60) {
            mensaje += `Vehiculo ${i + 1}. - Marca: ${Inventario
                [i].Marca} - Modelo: ${Inventario[i].Modelo} - Velocidad : ${Inventario[i].Velocidad} - Patente: ${Inventario[i].Patente}\n`;
                }
            }
            alert(mensaje);
            return;
        }    

//menu de opciones

function MenuOpciones() {
    let opcion;
    do {
        opcion = prompt("Ingrese una opcion del registro: \n 1. Agregar un vehiculo al inventario \n 2. Mostrar el inventario \n 3. Eliminar un vehiculo del inventario \n 4. Mostrar vehiculos con infraccion mayor a 60Km \n 5. Salir");
        switch (opcion) {
            case "1": agregarNuevoVehiculo();
            break;
            case "2": mostrarInventario();
            break;
            case "3": eliminarVehiculo();   
            break;
            case "4": mostrarVehiculosConInfracciones()
            break;
            case "5": alert("Gracias por utilizar el sistema");
            break;  
            default: alert("Opcion invalida, intente nuevamente");
            }
    }while (opcion !== "5");
}

MenuOpciones()