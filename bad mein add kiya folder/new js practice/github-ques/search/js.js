const names = ['asad', 'ali', 'assad', 'faizan', 'adeel', 'ahsan', 'ansari', 'moiz', 'shaban'];

console.log(names);

const searchTerm = prompt("Enter name to search");

const filter = names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));

console.log('Matching names:', filter);