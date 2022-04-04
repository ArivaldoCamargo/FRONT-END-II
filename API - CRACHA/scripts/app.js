

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    
    .then(data => {
        //manipulamos a resposta
        console.log(data)
        renderizarDadosUsuario(data);

    });

function renderizarDadosUsuario(dados) {
        
    let card = document.querySelector('.card');
     
    let foto = dados.results[0].picture.large;
    let tratamento = dados.results[0].name.title;
    let nome = dados.results[0].name.first;
    let sobrenome = dados.results[0].name.last;

    let nomeCompleto = `${tratamento} ${nome} ${sobrenome}`;
    let email = dados.results[0].email;
    
    
    card.innerHTML = `<div id="conteudo";> 
                      <img src="${foto}">
                       <h2 class="nome">${nomeCompleto}</h2> 
                       <p class="email">${email}</p>
                       </div>`;

                       
                    
    let botão = document.getElementById('random');
   
    botão.addEventListener('click', () => {fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
       
        renderizarDadosUsuario(data);

    });
        
    })
    document.getElementById('impr').onclick = function() {
    
    var conteudo = document.getElementById('card').innerHTML,
    tela_impressao = window.open(); 
    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
    }

  }


