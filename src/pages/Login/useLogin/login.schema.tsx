import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  username: Yup.string().max(255, 'Too Long!').required('Este campo en requerido'),
  password: Yup.string()
    .min(6, 'Al menos debe de tener 6 caracteres')
    .required('Este campo en requerido')
});

export default ValidationSchema;
