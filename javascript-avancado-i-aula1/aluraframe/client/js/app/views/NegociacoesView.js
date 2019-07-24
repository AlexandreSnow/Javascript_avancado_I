class NegociacaoView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _templete(model) {
        return (`
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.negociacoes.map(n => {
                        return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.obtemVolume}</td>
                        </tr>
                        `
                    }).join('')}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        `);
    }

    update(model) {
        this._elemento.innerHTML = this._templete(model);
    }
}