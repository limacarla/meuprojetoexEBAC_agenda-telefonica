const form = document.getElementById('form-contato');
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('seu-nome');
    const inputContato = document.getElementById('contato');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputContato.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputContato.value = '';
});

