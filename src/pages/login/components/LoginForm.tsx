import { AuthActions } from '@features/auth/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginPayload } from '../../../types/login';
import { useAppDispatch } from '@store/hooks';
import { loginSchema } from '@schemas/login';
import Input from '@components/ui/input';

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const form = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
    mode: 'all',
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data: LoginPayload) => {
    dispatch(AuthActions.login(data.email));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <Input
          register={{ ...register('email') }}
          type="text"
          placeholder="E-posta"
          className={errors.email ? 'error' : ''}
        />
        <p
          style={{ height: '25px' }}
          className={`form-field-error ${errors.email && 'show'}`}
        >
          {errors.email?.message}
        </p>
      </div>

      <div className="form-field">
        <Input
          register={{ ...register('password') }}
          type="password"
          placeholder="Şifre"
          className={errors.password ? 'error' : ''}
        />
        <p
          style={{ height: '25px' }}
          className={`form-field-error ${errors.password && 'show'}`}
        >
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
