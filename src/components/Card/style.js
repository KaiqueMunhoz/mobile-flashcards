import styled, {css} from 'styled-components/native'
import {Platform} from 'react-native'

export const Card = styled.View`
    flex: 1;
    background-color: #fff;

    border-radius: 2px;
    border-width: 0.5px;
    border-color: #eee;
    margin-bottom: 12px;

    ${Platform.select({
      ios: css`
        box-shadow: 0px 0px 0.2px black;
      `
        
      ,
      android: css `
        box-shadow: 0px 0px 2px black;
      ` 
    })}
`
