
// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
    'apple': 'fruit',
    'potato': 'vegetable',
    'strawberry': 'berry',
  };
  
  function resolve2(inputObject) {
  let keys = Object.keys(inputObject);
  keys.forEach(function(key){
  val = inputObject[key];
  Object[val] = key; 
})
return Object;
  };
  
  const result2 = resolve2(secondObject);
  console.log(result2); 
  // ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }
  
  console.log(secondObject);
  // ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }
  
  
  // Задание 2. Написать функцию, возвращающую век, соответствующий данному году
  // Использовать Глобальный объект Math
  
  const year = 1905;
  centuryFromYear(year); // 20
  
  const year2 = 1700;
  centuryFromYear(year2); // 17.

  function centuryFromYear(year){
    console.log(Math.ceil(year/100));
    return Math.ceil(year/100);
  };
  