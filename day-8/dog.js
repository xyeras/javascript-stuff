const name = 'V';

function myfunction(txt, other, next) {
    console.log(txt, other);
}

myfunction('Whatever txt', 1, true);

const dog = {
   name: 'spot',
   color: 'white and black',
   fur: 'short',
   speak: function() {
       console.log('woof');
       const div = document.createElement('div');
       document.body.appendChild(div);
       div.innerHTML = 'woof!';
   },
   sit: function() {
       console.log('spot sits.', this);
       const div = document.createElement('div');
       document.body.appendChild(div);
       div.innerHTML = this.name + ' sits!';
   }
   
}



class Dog {
   name = 'spot';
   color = 'white and black';
   fur = 'short';

    constructor(name, color) {
        console.log('a new dog was made', name, this.name);
        this.name = name;
        this.color = color;
    }

   sit() {
        console.log('this', this);
       const div = document.createElement('div');
       document.body.appendChild(div);
       div.innerHTML = this.name + ' sits!';
   }
   speak() {
       console.log('woof');
       const div = document.createElement('div');
       document.body.appendChild(div);
       div.innerHTML = 'woof!';
   };
}

const dog3 = new Dog('rover', 'brown');
const dog4 = new Dog('clifford', 'red');
