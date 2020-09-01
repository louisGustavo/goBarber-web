/*
* Não podemos tipar essa função como Error pois não teríamos o acesso
* a todas as propriedades do Error do form, por isso 
* importamos o ValidationError do yup
*/
import { ValidationError } from 'yup';

/*
* Aqui determinamos a tipagem variável de retorno
* Como ele será válido para qualquer form e não sabemos qual o nome desses 
* campos e nem a quantidade, determinamos que o campo será qualquer coisa, 
* só determinamos que seu tipo seja string, e que seu valor também será um 
* string
* Ex: password: 'No mínimo 6 caracteres'
*/
interface Errors {
    [key: string]: string;
}

export default function getValidationErrors(err: ValidationError) {

    const validationErrors: Errors = {};

    err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
    });

    return validationErrors;
}