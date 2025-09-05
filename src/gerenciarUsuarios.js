//criar uma lista de usuários. os [] indica lista e as aspas simples indica texto
const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

function retornarUsuarios() {
    return usuarios;
};

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario   
};