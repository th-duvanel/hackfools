function sabores_load() {
    let eBases = document.getElementById("base");
    let eRecheios = document.getElementById("recheio");
    let eMolhos = document.getElementById("molho");
    let eAdicionais = document.getElementById("adicionais");
    let eOpcionais = document.getElementById("opcionais");

    sabores.bases.forEach(base => {
        eBases.innerHTML += '<option value="' + base + '">' + base + '</option>';
    });

    sabores.recheios.forEach(recheio => {
        eRecheios.innerHTML += '<option value="' + recheio + '">' + recheio + '</option>';
    });

    sabores.molhos.forEach(molho => {
        eMolhos.innerHTML += '<option value="' + molho + '">' + molho + '</option>';
    });

    sabores.adicionais.forEach(adc => {
        eAdicionais.innerHTML += '<input type="checkbox" id="' + adc + '" name="' + adc + '" value="' + adc +'"><label for=' + adc + '> ' + adc + '</label><br>'
    });

    listaopcoes.forEach(op => {
    });
}