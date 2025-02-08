// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomeAmigo = input.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        input.value = "";
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const buttonRemove = document.createElement("button");
        buttonRemove.textContent = "Remover";
        buttonRemove.onclick = () => removerAmigo(index);

        li.appendChild(buttonRemove);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    // Embaralhar a lista de amigos
    const amigosEmbaralhados = [...amigos].sort(() => 0.5 - Math.random());

    const resultado = amigosEmbaralhados.map((amigo, index) => {
        const proximoIndex = (index + 1) % amigosEmbaralhados.length;
        return `${amigo} tirou ${amigosEmbaralhados[proximoIndex]}`;
    });

    exibirResultado(resultado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultado) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    resultado.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ulResultado.appendChild(li);
    });
}
