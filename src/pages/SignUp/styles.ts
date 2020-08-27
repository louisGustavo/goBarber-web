import styled from 'styled-components';
import { shade } from 'polished';

import SignUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    /* Faz com que o content e background assumam o tamanho total da página visível */
    align-items: stretch; 
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #F4EDE8;
            display: block;
            text-decoration: none;
            margin-top: 24px;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    }

    /* 
    * O sinal de > indica que somente deve estilizar o "a" que 
    *   vier diretamente da raiz
    */
    > a {
        color: #F4EDE8;
        display: block;
        text-decoration: none;
        margin-top: 24px;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        &:hover {
            color: ${shade(0.2, '#F4EDE8')};
        }

        svg {
            margin-right: 16px;
        }
    }

`;

export const Background = styled.div`
    /* Faz com que o Background ocupe todo o espaço restante */
    flex: 1;
    background: url(${SignUpBackgroundImg}) no-repeat center;
    background-size: cover;
`;