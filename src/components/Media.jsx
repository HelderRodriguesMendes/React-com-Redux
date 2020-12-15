import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Media = (props) => {
    const { min, max } = props
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}
//o componente MEDIA obten o dados que estão armazenados no estado da aplicação
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

//connect conecta o componente MEDIA ao estado da aplicação
//Essa conexão é feita chamando a função mapStateToProps e passando seus dados para o props do componente Media
export default connect(mapStateToProps)(Media)