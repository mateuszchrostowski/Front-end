function formSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    
    formJSON.gender = data.getAll('gender');

    const h2 = "Dane POST:";
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
    document.querySelector('.results h2').innerText = h2;


    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(formJSON, null, 2)], {type: 'text/plain'}));
    a.setAttribute("download", "data.txt");
    document.body.appendChild(a);
    a.click();
    ocument.body.removeChild(a);

  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', formSubmit);


  
