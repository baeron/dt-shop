// Компонент (глупый)
// Цель: Как это выглядит (разметка, стили)
// Осведомлен о Redux: Нет
// Для считывания данных: Читает данные из props
// Для изменения данных: Вызывает callback из props

import { ItemCategoryComponent } from "./item-category/item-category.component";

export const components: any[] = [ItemCategoryComponent];

export * from "./item-category/item-category.component";
