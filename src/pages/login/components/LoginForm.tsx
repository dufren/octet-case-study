import { AuthActions } from '@features/auth/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { pathNames } from '../../../types/globals';
import { LoginPayload } from '../../../types/login';
import { useAppDispatch } from '@store/hooks';
import { loginSchema } from '@schemas/login';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
    mode: 'all',
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data: LoginPayload) => {
    dispatch(AuthActions.login(data.email));
    navigate(pathNames.movies.moviesPage);
  };

  return (
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
  );
};

export default LoginForm;
