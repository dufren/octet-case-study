import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('E-posta formatınız uygun değil.')
    .required('E-posta zorunlu bir alandır.'),
  password: yup
    .string()
    .min(8, 'Şifreniz en az 8 karakter olmalıdır.')
    .matches(/[A-Z]/, 'Şifreniz en az bir büyük harf içermelidir.')
    .matches(/\d/, 'Şifreniz en az bir rakam içermelidir.')
    .required('Şifre zorunlu bir alandır.'),
});
