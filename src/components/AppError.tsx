import { Button, Result } from 'antd';
import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { getAccount } from '../features/auth/authSlice';

interface Props {
  error: string | null;
  loading: boolean;
}

export const AppError: React.FC<Props> = ({ error, loading }) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(getAccount());
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Result
        status="warning"
        title="Виникла помилка під час завантаження додатку"
        subTitle={error}
        extra={
          <Button type="primary" onClick={clickHandler} loading={loading}>
            Спробувати ще раз
          </Button>
        }
      />
    </div>
  );
};
