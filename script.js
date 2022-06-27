// Crie um objeto que receba ao menos três propriedades sobre você.
let about = {
    nome:"Vanessa",
    estado:"DF",
    idade:25,
  }
  console.log(about)
  
  // Adicione uma nova propriedade sem alterar seu objeto inicial.
  about.signo="gêmeos"
  
  // Remova uma propriedade desse objeto.
  delete about.idade
  console.log(about)
  
  //Mostre no console todas as propriedades desse objeto.
  console.log(about)
  
  // Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
  //Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
  //Na propriedade amigos, adicione ao menos 4 itens.
  let cadastro = [
    { nome: "Thais",
     idade: 34,
     telefone:888888,
     amigos: {
       amg1:"lais",
       amg2:"edu",
       amg3:"lucas",
       amg4:"felipe"
     }
      
    },{
      nome: "Pedro",
     idade: 40,
     telefone:888888,
     amigos: {
       amg1:"thais",
       amg2:"lais",
       amg3:"lucas",
        amg4:"felipe"
     }
    },{
      nome: "Lucas",
     idade: 34,
     telefone:888888,
     amigos: {
       amg1:"lais",
       amg2:"edu",
       amg3:"pedro",
       amg4:"felipe"
     }
    },{
      nome: "Carlos",
     idade: 60,
     telefone:888888,
     amigos: {
       amg1:"lais",
       amg2:"edu",
       amg3:"pedro",
       amg4:"felipe"
     }
    },{
      nome: "Maria",
     idade: 50,
     telefone:888888,
     amigos: {
       amg1:"henrique",
       amg2:"manu",
       amg3:"pedro",
       amg4:"felipe"
     }
    }]
  
  
  // Mostre no console o nome de um amigo de cada lista.
  console.log(cadastro[0].amigos.amg2)
  console.log(cadastro[1].amigos.amg1)
  console.log(cadastro[2].amigos.amg3)
  console.log(cadastro[3].amigos.amg4)
  console.log(cadastro[4].amigos.amg1)