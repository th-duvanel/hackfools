var PRECO, BASE, RECHEIO, MOLHO, ADICIONAIS;

function obter() {
    let preco = 0.0;
    let eBases = document.getElementById("base");
    let eRecheios = document.getElementById("recheio");
    let eMolhos = document.getElementById("molho");

    let base = eBases.value;
    let recheio = eRecheios.value;
    let molho = eMolhos.value;
    let listaAdcs = [];

    preco += precos.bases[base.replace(' ', '')] + precos.recheios[recheio.replace(' ', '')] + precos.molhos[molho.replace(' ', '')];

    sabores.adicionais.forEach(adc => {
        let chkBox = document.getElementById(adc);
        if (chkBox.checked) {
            listaAdcs.push(adc);
            preco += precos.adicionais[adc.replace(' ', '')];
        }
    });

    console.log(base, recheio, molho, listaAdcs, preco);
    PRECO = preco;
    BASE = base;
    RECHEIO = recheio;
    MOLHO = molho;
    ADICIONAIS = adicionais;
}

function visualizar() {
    obter();
    let preview = document.getElementById("preview");

    preview.innerHTML += '<img id="base" src="pizzas/bases/' + BASE + '.PNG" width="400px" height="400px">'
    preview.innerHTML += '<img id="recheio" src="pizzas/recheios/' + RECHEIO + '.PNG" width="400px" height="400px">'
}

function confirmar() {
    visualizar()

}