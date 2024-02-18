import { useAppDispatch } from '@api/store/hooks';
import { AuthActions } from '@features/auth/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { pathNames } from '../../../types/globals';
import { LoginPayload } from '../../../types/login';
import * as yup from 'yup';

const schema = yup.object({
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

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data: LoginPayload) => {
    dispatch(AuthActions.login(data.email));
    navigate(pathNames.movies.moviesPage);
  };

  return (
    <main className="content-container">
      <section className="login-form">
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <input
              {...register('email')}
              className={errors.email ? 'error' : ''}
              type="text"
              placeholder="E-posta"
            />
            <p className={`form-field-error ${errors.email && 'show'}`}>
              {errors.email?.message}
            </p>
          </div>

          <div className="form-field">
            <input
              {...register('password')}
              className={errors.password ? 'error' : ''}
              type="password"
              placeholder="Şifre"
            />
            <p className={`form-field-error ${errors.password && 'show'}`}>
              {errors.password?.message}
            </p>
          </div>

          <button disabled={!isDirty || !isValid} type="submit">
            Giriş
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
