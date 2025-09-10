const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function() {
        //1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario({
        Nome:'Maria',
        email: 'maria@gmail.com'
    });

        //2. Retorna a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários
        //expect(listaDeUsuarios.at(-1).Nome).to.equal('Maria');
        //expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com');
        //to.equal para comparar um item do objeto
        //to.eql para comparar o objeto todo
        expect(listaDeUsuarios.at(-1)).to.eql({
            Nome:'Maria',
            email: 'maria@gmail.com'
        });
    });
});