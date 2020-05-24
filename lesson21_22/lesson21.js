const firstObject = {
    'one': 'number',
  };
  
  function resolve1(inputObject) {
    let object2 = {};
        let keys = Object.keys(inputObject);  
        keys.forEach(function(key){
            val = inputObject[key];
            object2[val] = key; 
        })
     return object2;
  };
  
  const result1 = resolve1(firstObject);
  console.log(result1); // ожидаемый результат { 'number': 'one' }
  console.log(firstObject); // ожидаемый результат { 'one': 'number' }
  

  