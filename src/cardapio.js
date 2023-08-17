
const cardapio = [
    {
        codigo: 'cafe',
        descricao: 'Café',
        valor: 3.00,
        itemPrincipal: null
    },
    {
        codigo: 'chantily',
        descricao: 'extra do Café',
        valor: 1.50,
        itemPrincipal: 'cafe'
    },
    {
        codigo: 'suco',
        descricao: 'Suco natural',
        valor: 6.20,
        itemPrincipal: null
    },
    {
        codigo: 'sanduiche',
        descricao: 'Sanduíche',
        valor: 6.50,
        itemPrincipal: null
    },
    {
        codigo: 'queijo',
        descricao: 'extra do Sanduíche',
        valor: 2.00,
        itemPrincipal: 'sanduiche'
    },
    {
        codigo: 'salgado',
        descricao: 'salgado',
        valor: 7.25,
        itemPrincipal: null
    },
    {
        codigo: 'combo1',
        descricao: '1 suco e 1 sanduíche',
        valor: 9.50,
        itemPrincipal: null
    },
    {
        codigo: 'combo2',
        descricao: '1 café e 1 sanduíche',
        valor: 7.50,
        itemPrincipal: null
    },
]


export { cardapio };
