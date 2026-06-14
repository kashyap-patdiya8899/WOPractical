import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

/**
 * Typed Redux dispatch hook.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed Redux selector hook.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;