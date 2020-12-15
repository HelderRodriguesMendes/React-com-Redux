import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros'

function Intervalo (props) {
    const {min, max} = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} 
                    onChange={e => props.alterarMinimo(parseInt(e.target.value))} />
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} 
                    onChange={e => props.alterarMaximo(parseInt(e.target.value))} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapDispatchToProps(dispatch){
    return {
        alterarMinimo(novoNumero){
            //chamando Action Creator para gerar uma Action  com o novo numero
            const action = alterarNumeroMinimo(novoNumero)

            dispatch(action)
        },

        alterarMaximo(novoNumero){
            //chamando Action Creator para gerar uma Action  com o novo numero
            const action = alterarNumeroMaximo(novoNumero)

            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, 
    mapDispatchToProps)(Intervalo)