import { createAction } from '@reduxjs/toolkit';

// --- Екшены на открытие ModalLogout
export const isModalLogoutOpen = createAction('global/isModalLogoutOpen');

// --- Екшены на закрытие ModalLogout
export const isModalLogoutClose = createAction('global/isModalLogoutClose');
