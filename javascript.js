function actualizarLecturas() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/lecturas', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const datos = JSON.parse(xhr.responseText);
            document.getElementById('humedad').innerText = datos.humedad;
            document.getElementById('temperatura').innerText = datos.temperatura;
        }
    };
    xhr.send();
}
setInterval(actualizarLecturas, 5000);

document.addEventListener('DOMContentLoaded', () => {
    // Simula la obtención del estado de los relés
    const estadosRele = {
        rele1: true,
        rele2: false,
        rele3: true,
        rele4: false,
    };

    actualizarEstadoRele('rele1', estadosRele.rele1);
    actualizarEstadoRele('rele2', estadosRele.rele2);
    actualizarEstadoRele('rele3', estadosRele.rele3);
    actualizarEstadoRele('rele4', estadosRele.rele4);
});

function actualizarEstadoRele(releId, estado) {
    const statusElement = document.getElementById(`${releId}-status`);
    if (estado) {
        statusElement.classList.remove('red');
        statusElement.classList.add('green');
    } else {
        statusElement.classList.remove('green');
        statusElement.classList.add('red');
    }
}