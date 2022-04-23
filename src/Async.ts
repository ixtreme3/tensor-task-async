/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {}, ms);
    resolve(ms);
  });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    return Promise.all([mock(100), mock(200), mock(300)]);
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        throw Promise.reject(new Error('my error'));
    } catch (err) {
        if (err instanceof Promise) {
          return err.catch(error => error.message);
        } else return new Promise(resolve => resolve(undefined))
    }
}
