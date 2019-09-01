// import console = require("console");


export function totalDespesas(dados_desp){ 
    let obj_desp={}
    var saldo = 0
    var despesas = 0

    dados_desp.forEach(dado=>{
        if(dado.saldo == 1)
            saldo = saldo + dado.valor
        else
            despesas  = despesas + dado.valor
    })
    obj_desp={
        saldo,
        despesas
    }
    return obj_desp
}

export function createVetorByData(dados_desp){
    let dados_anterior = {
        data:null
    }
    let vetor=[]
    var valor = 0
    var id_dados = 0

    dados_desp.forEach(dado=>{
 
        if(dados_anterior.data==dado.data || dados_anterior.data==null){
            dados_anterior=dado
            if(dado.saldo == 1)
                valor = valor+dado.valor
            else
                valor = valor-dado.valor
        }else{ 
            vetor.push(
                {
                    id:id_dados,
                    valor,
                    data:dados_anterior.data
                }
            )
            if(dado.saldo == 1)
                valor = valor+dado.valor
            else
                valor = valor-dado.valor
            // valor=0
            id_dados++
            dados_anterior=dado
        }
    })

    if(dados_anterior != null){
        vetor.push(
            {
                id:id_dados,
                valor,
                data:dados_anterior.data
            }
        )
    }

    return vetor
}

export function returnDay(data){ 
    const nova_data = data.split("-") 
    return nova_data[2]
}

export default dados = [
    {
        id: 1,
        saldo:1,
        valor: 2000,
        label: "Venda Guitarra",
        data:"2019-09-01"
    },
    {
        id: 2,
        saldo:0,
        valor: 500,
        label: "Mercado",
        data:"2019-09-01"
    },
    {
        id: 3,
        saldo:1,
        valor: 1000,
        label: "Salário",
        data:"2019-08-31"
    },
    {
        id: 4,
        saldo:0,
        valor: 1300,
        label: "Casa",
        data:"2019-08-31"
    },
    {
        id: 5,
        saldo:1,
        valor: 400,
        label: "Comida",
        data:"2019-08-30"
    },
    {
        id: 6,
        saldo:0,
        valor: 500,
        label: "Ensaio",
        data:"2019-08-30"
    },
    {
        id: 7,
        saldo:1,
        valor: 500,
        label: "Venda sorvete",
        data:"2019-08-29"
    },
    {
        id: 8,
        saldo:0,
        valor: 800,
        label: "Baile",
        data:"2019-08-29"
    },
    {
        id: 9,
        saldo:1,
        valor: 700,
        label: "Aluguel casa",
        data:"2019-08-28"
    },
    {
        id: 10,
        saldo:0,
        valor: 1000,
        label: "Churrasco Família",
        data:"2019-08-28"
    },
    {
        id: 11,
        saldo:1,
        valor: 700,
        label: "Aluguel casa",
        data:"2019-08-27"
    },
    {
        id: 12,
        saldo:0,
        valor: 1000,
        label: "Churrasco Família",
        data:"2019-08-27"
    },
    {
        id: 13,
        saldo:1,
        valor: 700,
        label: "Aluguel casa",
        data:"2019-08-26"
    },
    {
        id: 14,
        saldo:0,
        valor: 200,
        label: "Churrasco Família",
        data:"2019-08-26"
    },
    {
        id: 15,
        saldo:1,
        valor: 900,
        label: "Aluguel casa",
        data:"2019-08-25"
    },
    {
        id: 16,
        saldo:0,
        valor: 120,
        label: "cervejada da semana",
        data:"2019-08-25"
    }
]