import { cardapio } from "./cardapio.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        const opcoesDePagamento = ["debito", "credito", "dinheiro"];

        const listaItens = [];
        const qntItens = [];

        for (const elem of itens) {

            let index = elem.indexOf(",")
            listaItens.push(elem.slice(0, index));
            qntItens.push(parseInt(elem.slice(index + 1)));
            
        }

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        } else if (itens.includes(0)) {
            return "Quantidade inválida!"
        } else if (qntItens.includes(0)) {
            return "Quantidade inválida!"
        }

        if (!this.pagamentoEValido(opcoesDePagamento, metodoDePagamento)){
            return 'Forma de pagamento inválida!';
        } 

        if (!this.itensExistemNoCardapio(listaItens)) {
            return "Item inválido!"
        }

        const itensExtras = listaItens.filter((elem) => {
            if (elem.includes("queijo") || elem.includes("chantily")) {
                return elem;
            }
        })

        const itensPrincipais = listaItens.filter((elem) => {
            if (!elem.includes("queijo") && !elem.includes("chantily") && !elem.includes("combo")) {
                return elem;
            }
        })

        if (!this.temItemPrincipalDoItemExtra(itensExtras, itensPrincipais)) {
            return "Item extra não pode ser pedido sem o principal"
        }

        let valorTotal = this.valorListaDeItens(listaItens, qntItens);

        if (metodoDePagamento === 'debito') {  

            valorTotal = valorTotal.toFixed(2)
            const valorFinal = valorTotal.toString().replace('.', ',')
            return `R$ ${valorFinal}`

        }else if (metodoDePagamento === 'credito') {

            valorTotal = (valorTotal + (valorTotal * 0.03)).toFixed(2)
            const valorFinal = valorTotal.toString().replace('.', ',')
            return `R$ ${valorFinal}`;

        }else if (metodoDePagamento === 'dinheiro') {

            valorTotal = (valorTotal - (valorTotal * 0.05)).toFixed(2)
            const valorFinal = valorTotal.toString().replace('.', ',')
            return `R$ ${valorFinal}`;
            
        }
    }

    pagamentoEValido(opcoesDePagamento, metodoDePagamento) {
        return opcoesDePagamento.some((opcao) => {

            return opcao === metodoDePagamento;

        })
    }

    itensExistemNoCardapio(listaItens) {
        return listaItens.every((itemLista) => {
            return cardapio.some((itemCardapio) => {

                return itemCardapio.codigo === itemLista;
                
            });
        })
    }

    temItemPrincipalDoItemExtra(arrayItensExtras, arrayItensPrincipais) { 
       
        for (const element of arrayItensExtras) {
            
            const itemCardapio = cardapio.find((itemcardapio) => {
                return itemcardapio.codigo === element
            });

            const contemItemPrincipalNaLista = arrayItensPrincipais.some((item) => {
                return item === itemCardapio.itemPrincipal;
            })

            if (!contemItemPrincipalNaLista) {
                return false
            }
        }

        return true;

    }

    valorListaDeItens(listaItens, qntItens) {

        let valorItensPedido = []
        let valorTotal = 0;

        for (const elem of listaItens) {
            for (const item of cardapio) {
                if (elem === item.codigo) {
                    valorItensPedido.push(item.valor);
                }
            }
        }

        for (let i = 0; i < valorItensPedido.length; i++) {
            valorTotal += valorItensPedido[i] * qntItens[i]
        }

        return valorTotal;
    }
        
}

export { CaixaDaLanchonete };












