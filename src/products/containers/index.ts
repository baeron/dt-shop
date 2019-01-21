// Контейнер (умный)
// Цель: Как это работает (получение данных, обновление состояния)
// Осведомлен о Redux: Да
// Для считывания данных: Подписан на Redux state (состояние)
// Для изменения данных: Отправляет (dispatch) Redux действие (actions)

import { CategorysComponent } from "./categorys/categorys.component";
import { CategoryItemComponent } from "./category-item/category-item.component";

export const containers: any[] = [CategorysComponent, CategoryItemComponent];

export * from "./categorys/categorys.component";
export * from "./category-item/category-item.component";
