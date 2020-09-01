import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    
    /*
    * Permite acessar as propriedades do elemento como na DOM
    * precisa ser atribuída ao input para recuperar esses dados
    */
   const inputRef = useRef<HTMLInputElement>(null);
   
   const [isFocused, setIsFocused] = useState(false);
   const [isFilled, setIsFilled] = useState(false);
    /*
    * Recebe o nome do campo como argumento e irá retornar alguns dados
    * que serão usados para receber o valor do input e fazer outras tratativas
    */
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    //assim que o componente for exibido em tela, ela recebe o registerField
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    /*
    * Observações sobre o registerField
    * O name vem do fieldName pois o name original pode ser alterado devido 
    * à algumas condições do unform
    * O ref seria como acessar os dados do input direto da DOM, para passar o
    * valor para esse campo precisamos instalar o useRef e informar o "current"
    * O path é de onde unform vai buscar esse referência do valor preenchido no
    * input que no caso é o "value"
    */

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            { Icon && <Icon size={20} /> }
            <input 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue} 
                ref={inputRef} 
                {...rest} 
            />
            {error}
        </Container>
    );
};

export default Input;