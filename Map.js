var numbers = [1, 2, 3, 4];
numbers.map(function(element, index, numbers) {
    console.log('Element: ' + element);
    console.log('Index: ' + index);
    console.log('Array: ' + numbers);
});