document.addEventListener('DOMContentLoaded', () => {
    let registrosVehiculos = JSON.parse(localStorage.getItem("registrosVehiculos")) || [];
    const sectionResult = document.getElementById('detalle');
    
// Función para guardar en localStorage
    const guardarRegistros = () => {
    localStorage.setItem("registrosVehiculos", JSON.stringify(registrosVehiculos));
    };

// Función para agregar un nuevo registro 

    const registro = (data) => {
        registrosVehiculos.push(data);
        guardarRegistros();
        sectionResult.innerHTML = '';
        showData()

        alert('Agregado al registro correctamente');
    };
    
  //Se crea un objeto con los datos ingresados
    document.addEventListener('DOMContentLoaded', () => {
        const formulario = document.getElementById('agregar');
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            const numeroDeOrden = e.target[0].value;
            const fecha = e.target[1].value;
            const marca = e.target[2].value;
            const modelo = e.target[3].value;
            const chofer = e.target[4].value;
            const patente = e.target[5].value;
            const kilometraje = e.target[6].value;
        
            const datos = {
                numeroDeOrden,
                fecha,
                marca,
                modelo, 
                chofer,
                patente,
                kilometraje
            };

        registro(datos);
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        e.target[4].value = '';
        e.target[5].value = '';
        e.target[6].value = '';
        });
    });


//Se crea una función para asignar los títulos de la tabla
    const titulo = () => {
        const table = document.createElement('table');

        const titleRow = document.createElement('tr');

        const titleNumeroDeOrden = document.createElement('th');
        titleNumeroDeOrden.innerText = 'Numero de orden';

        const titleFecha = document.createElement('th');
        titleFecha.innerText = 'Fecha';

        const titleMarca = document.createElement('th')
        titleMarca.innerText = 'Marca';

        const titleModelo = document.createElement('th');
        titleModelo.innerText = 'Modelo';

        const titleChofer = document.createElement('th');
        titleChofer.innerText = 'Chofer';

        const titlePatente = document.createElement('th');
        titlePatente.innerText = 'Patente';

        const titleKilometraje = document.createElement('th');
        titleKilometraje.innerText = 'Kilometraje';

 //Se crean y se añaden los títulos a la tabla
        titleRow.appendChild(titleNumeroDeOrden);
        titleRow.appendChild(titleFecha);
        titleRow.appendChild(titleMarca);
        titleRow.appendChild(titleModelo);
        titleRow.appendChild(titleChofer);
        titleRow.appendChild(titlePatente);
        titleRow.appendChild(titleKilometraje);

        table.appendChild(titleRow);
        const sectionResult = document.getElementById('detalle');
        sectionResult.appendChild(table);
    };

    const crearTabla = (data) => {
        const table = document.createElement('table');
        const dataRow = document.createElement('tr');

        const numeroDeOrden = document.createElement('td');
            numeroDeOrden.innerText = data.numeroDeOrden;

        const fecha = document.createElement('td');
            fecha.innerText = data.fecha;

        const marca = document.createElement('td');
            marca.innerText = data.marca;

        const modelo = document.createElement('td');
            modelo.innerText = data.modelo;

        const chofer = document.createElement('td');
            chofer.innerText = data.chofer;

        const patente = document.createElement('td');
            patente.innerText = data.patente;

        const kilometraje = document.createElement('td');
            kilometraje.innerText = data.kilometraje;

        dataRow.appendChild(numeroDeOrden);
        dataRow.appendChild(fecha);
        dataRow.appendChild(marca);
        dataRow.appendChild(modelo);
        dataRow.appendChild(chofer);
        dataRow.appendChild(patente);
        dataRow.appendChild(kilometraje);

        table.appendChild(dataRow);
        const sectionResult = document.getElementById('detalle');
        sectionResult.appendChild(table);
    }

    const dataList = (registrosVehiculos) => {
//        const sectionResult = document.getElementById('detalle');
        sectionResult.innerHTML = '';
//        const detalist = registrosVehiculos;
        registrosVehiculos.forEach(el => {
            const createTable = crearTabla;
            createTable(el);    
        });
    };

    //Limpiar registro
    const eliminarVehiculo = () => {
        localStorage.removeItem("registrosVehiculos");
        registrosVehiculos =[]
        showData();

        alert('Todos los registros eliminados correctamente')
    }
//botones

const bntEliminar = document.getElementById('eliminarVehiculos');
        bntEliminar.addEventListener('click', eliminarVehiculo);

    const bntMostrarRegistros = document.getElementById('verInventario');
        bntMostrarRegistros.addEventListener('click', showData);

    const bntBuscar = document.getElementById('buscar');
        bntBuscar.addEventListener('click', buscarVehiculo);

//buscar
    function buscarVehiculo() {
        const buscar = document.getElementById('buscar').value;
        const registros = registrosVehiculos.filter(registro => registro.numeroDeOrden.includes(buscar));
        const sectionResult = document.getElementById('detalle');
        sectionResult.innerHTML = '';
        registros.forEach(registro => {     
            const createTable = crearTabla;
            createTable(registro);
        });
        document.gerElementBy('buscar').value='';
    }

    function showData(){
        const sectionResult = document.getElementById('detalle');
        sectionResult.innerHTML = '';
        registrosVehiculos.forEach(registro => {
            const createTable = crearTabla;
            createTable(registro);
        });
    }
});
