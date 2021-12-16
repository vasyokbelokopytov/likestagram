import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { message } from 'antd';
import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useErrorMessage = (
  error: string | null,
  removeAction?: ActionCreatorWithPayload<null | string>
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (error) {
      message.error(error);
      if (removeAction) {
        dispatch(removeAction(null));
      }
    }
  }, [error, dispatch, removeAction]);
};

export const useSuccessMessage = (
  msg: string | null,
  removeAction?: ActionCreatorWithPayload<null | string>
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (msg) {
      message.success(msg);
      if (removeAction) {
        dispatch(removeAction(null));
      }
    }
  }, [dispatch, removeAction, msg]);
};
