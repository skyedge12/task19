// Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
// только собственных свойств. Данная функция не должна возвращать значение.

const man = {
    name: 'Igor',
    surname: 'Petrov',
    age: '20'
  }
  
  const deadMan = Object.create(man)
  
  deadMan.dateOfDeath = '18/02/22';
  deadMan.DeathPlace = 'Syktyvkar';
  
  
  function task (arr) {
    for (let i in arr) {
      if(deadMan.hasOwnProperty(i)) {
        console.log('ключ - ' + i + ', значение - ' + arr[i])
      }
    }
  }
  
  task(deadMan);
  
  
  // Напишите функцию, которая принимает в качестве аргументов строку и объект, 
  // а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
  // Функция должна возвращать true или false.
  
  function isThere (str, arr) {
    return str in arr;
  }
  
  a = isThere('surname', deadMan);
  b = isThere('job', deadMan);
  
  console.log(a);
  console.log(b);
  
  
  // Напишите функцию, которая создает пустой объект, но без прототипа.
  
  const empty = {};
  console.log(typeof empty);