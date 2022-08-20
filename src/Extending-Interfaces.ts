
//copy all the type members 
//from one type into another type.
//use extends keyword
interface Developer extends Human {
  code: () => void;
}

// Add your interface here
interface Human {
  name: string;
  hobbies: string[]
}

const me: Developer = {
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina',
  hobbies: ['Building rockets']
}

me.code();