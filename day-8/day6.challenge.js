       // 2nd
       const button = document.createElement("button");
       document.body.appendChild(button);
       button.innerHTML = 'Text';

       // 3rd
       const button1 = document.createElement("button");
       document.body.appendChild(button1);
       button1.innerHTML = 'Text';
  
       button1
       .addEventListener('click', function() {
           button1.style.backgroundColor = 'red';
           fetch('https://cat-fact.herokuapp.com/' + 'facts')
           .then((data) => {
               return data.json();
           })
           .then((data) => {
               console.log('new data', data)
               const user = { favfoods: ['Steak']};

               
               const div = document.createElement('pre');
               document.body.appendChild(div);
               console.log(data.length);
               const randomNumber = Math.floor( Math.random() * data.length );
               div.innerHTML = JSON.stringify(data, null, 4);
               // div.innerHTML = JSON.stringify(data, null, 4);
           });
   
       });
       
    

     
       // console commands
       console.log(document.body);
       console.dir(document.body);