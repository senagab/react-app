import styled from 'styled-components'
import { Props } from './titulo-index'

export const Titulo = styled.h3<Props>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corTituloPrincipal
      : props.theme.corTituloSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
