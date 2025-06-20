let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("add");
let main = document.getElementById("areaLista");

function addTarefa(){
    // Pegar o valor digitado no input
    let valorInput = input.value;
    // Se não for vazio, nem nulo, nem indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        ++ contador
        let novoItem = ` <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone"><img id="icone_${contador}" width="30px" src="icon/circle-outline.svg" alt=""></div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
            <div class="item-botao">
                <button onclick="deletar(${contador});" class="delete"><img id="icone_${contador}" src="icon/delete-alert-outline.svg" alt="">Deletar</button>
            </div>
        </div>`;
        // Adicionar o novo item na main
        main.innerHTML += novoItem;
        // Limpar os campos
        input.value = "";
        input.focus();
}
}
    function deletar(id){
        var tarefa = document.getElementById(id);
        tarefa.remove();
    }
    function marcarTarefa(id){
        var item = document.getElementById(id);
        var classe = item.getAttribute('class');
        console.log(classe);
        
        if(classe =="item"){
            item.classList.add('clicado');

            var icone = document.getElementById('icone_'+id);
            icone.classList.remove('circle-outline');
            icone.classList.add('delete-alert-outline');
        }else {
            item.classList.remove('clicado');

            var icone = document.getElementById('icone_'+id);
            icone.classList.remove('delete-alert-outline');
            icone.classList.add('circle-outline');

        }
    }
    input.addEventListener("keyup", function(event){
    // Verifica se a tecla pressionada é Enter
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();

    }
});