import { createAction } from '@reduxjs/toolkit';

// --- Екшены на получение всех животных
export const fetchAnimalsRequest = createAction('global/fetchAnimalsRequest');

export const fetchAnimalsSuccess = createAction('global/fetchAnimalsSuccess');
export const fetchAnimalsError = createAction('global/fetchAnimalsError');

// --- Екшены на открытие ModalLogout
export const isModalLogoutOpen = createAction('global/isModalLogoutOpen');

// --- Екшены на закрытие ModalLogout
export const isModalLogoutClose = createAction('global/isModalLogoutClose');

// --- Екшены на открытие ModalAddTransaction
export const isModalAddTransactionOpen = createAction(
  'global/isModalAddTransactionOpen',
);

// --- Екшены на закрытие ModalAddTransaction
export const isModalAddTransactionClose = createAction(
  'global/isModalAddTransactionClose',
);
