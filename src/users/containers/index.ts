// Контейнер (умный)
// Цель: Как это работает (получение данных, обновление состояния)
// Осведомлен о Redux: Да
// Для считывания данных: Подписан на Redux state (состояние)
// Для изменения данных: Отправляет (dispatch) Redux действие (actions)

import { MyAccountComponent } from "./my-account/my-account.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

export const containers: any[] = [
  MyAccountComponent,
  SignInComponent,
  SignOutComponent,
  SignUpComponent
];

export * from "./my-account/my-account.component";
export * from "./sign-in/sign-in.component";
export * from "./sign-out/sign-out.component";
export * from "./sign-up/sign-up.component";
