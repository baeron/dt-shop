// Контейнер (умный)
// Цель: Как это работает (получение данных, обновление состояния)
// Осведомлен о Redux: Да
// Для считывания данных: Подписан на Redux state (состояние)
// Для изменения данных: Отправляет (dispatch) Redux действие (actions)

import { MyAccountComponent } from "./my-account/my-account.component";
import { SignInComponent } from "./sign-in/sign-in.component";

export const containers: any[] = [MyAccountComponent, SignInComponent];

export * from "./my-account/my-account.component";
export * from "./sign-in/sign-in.component";
