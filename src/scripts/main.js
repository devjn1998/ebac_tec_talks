AOS.init();

const dataDoEvento = new Date("Apr 5, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval( function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoMS = 1000 * 60;


    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs / horaEmMs));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoMS);
    const segundosAteOEvento = Math.floor(( distanciaAteOEvento % minutoMS ) / 1000);
    console.log(diasAteOEvento)
    console.log(horasAteOEvento)
    console.log(minutosAteOEvento)
    console.log(segundosAteOEvento)


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if ( distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `<br>Evento expirado`
        document.getElementById('contador').style.color = '#6b0d06';

    }
}, 1000)