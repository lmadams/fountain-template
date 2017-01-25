export class OpcaoMenu {
    id: number;
    nome: string;
    state: string;

    constructor(id: number, nome: string, state: string) {
        this.id = id;
        this.nome = nome;
        this.state = state;
    }
}

class MenuController {
    opcoes: Array<OpcaoMenu>;
    state: any;

    constructor($state: ng.ui.IStateProvider) {
        let opcaoUm = new OpcaoMenu(1, 'Categorias', 'categorias');
        let opcaoDois = new OpcaoMenu(1, 'Produtos', 'produtos');
        this.opcoes = [opcaoUm, opcaoDois];

        this.state = $state;
    }

    onClick(state: string) {
        this.state.go(state);
    }
}

export const AgMenu: angular.IComponentOptions = {
    template: require('./Menu.html'),
    controller: MenuController
};
