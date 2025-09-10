//criar uma lista de usuários. os [] indica lista e as aspas simples indica texto
const usuarios = [
    {
        Nome:'Matheus',
        email: 'matheus@gmail.com'
    },

    { 
        Nome:'Marcos',
        email: 'marcos@gmail.com'
    },
    
    { 
        Nome:'Lucas',
        email: 'lucas@gmail.com'
    },
                    
    { 
        Nome:'João',
        email: 'joao@gmail.com'
    }
];

function retornarUsuarios() {
    return usuarios;
};

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario   
};