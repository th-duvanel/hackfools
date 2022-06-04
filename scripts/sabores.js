sabores = { 
    bases: [
        "trigo", 
        "queijo", 
        "chocolate",
        "borracha", 
        "papelao",
        "abacaxi"
    ],
    recheios: [
        "calabresa", 
        "pepperoni", 
        "margherita",
        "presunto e queijo", 
        "portuguesa", 
        "chocolate", 
        "doce de leite", 
        "abacaxi", 
        "galinha"
    ],
    molhos: [
        "ketchup",
        "tomate",
        "shoyu",
        "branco", 
        "tartaro", 
        "caesar", 
        "abacaxi"
    ],
    adicionais: [
        "milho", 
        "oregano",
        "ovo",
        "batata frita", 
        "ralo", 
        "abacaxi",
        "clipe de papel",
        "sim"
    ]
}

precos = {
        bases: {
            trigo: 5, 
            queijo: 0, 
            chocolate: 0,
            borracha: 0, 
            papelao: 0,
            abacaxi: 0
        },
        recheios: {
            galinha: 2,
            calabresa: 0, 
            pepperoni: 0, 
            margherita: 0,
            presuntoequeijo: 0, 
            portuguesa: 0, 
            chocolate: 0, 
            docedeleite: 0, 
            abacaxi: 0, 
            chocolate: 0
        },
        molhos: {
            ketchup: 0,
            tomate: 0,
            shoyu: 0,
            branco: 0, 
            tartaro: 0, 
            caesar: 0, 
            abacaxi: 0
        },
        adicionais: {
            milho: 0, 
            oregano: 0,
            ovo: 0,
            batatafrita: 0, 
            ralo: 0, 
            abacaxi: 0,
            clipedepapel: 0,
            sim: 0
        }
    }
listaopcoes = [
    "grau", "coerente", "assada", "queimada", "cabelo", "saliva"
]
opcoes = {
    grau: [
        "Motoboy pode dar grau?", 
        {
            sim: 2, 
            não: 4
        }
    ],
    coerente: [
        "Deseja receber a pizza parecida com o que solicitou?", {
            sim: 2,
            não: 4
        }
    ],
    assada: [
        "Deseja que sua pizza seja assada?", {
            sim: 0,
            não: 0
        }
    ],
    queimada: [
        "Deseja que sua pizza esteja queimada?", {
            sim: 0,
            não: 0
        }
    ],
    cabelo: [
        "Deseja que sua pizza venha com cabelo?", {
            sim: 0,
            não: 0
        }
    ],
    saliva: [
        "Deseja saliva na sua pizza?", {
            sim: 0,
            não: 0
        }
    ]
}