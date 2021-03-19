const url = 'https://script.google.com/macros/s/AKfycbwZRhzFYh3kGdEU0-BrmmZRAdiThPesk4EL5FTnTJVDnnl7bNTMUQ_duTeMnT1dyK9q/exec';
const output = document.querySelector('.output');
getData();


function getData() {
  fetch(url).then((res) => {
    return res.json()
  }).then((json) => {
    // console.log(json);
    json.data.forEach((ele => {
      // console.log(ele);
      const div = document.createElement('div');
      div.innerHTML = `<h2>${ele.title}</h2> <p> ${ele.content}</p>`;
      output.append(div);
      const btn1 = document.createElement('button');
      btn1.innerHTML = `&#9652; ${ele.up}`;
      btn1.style.backgroundColor='#f9f9f9';
      div.append(btn1);
      const btn2 = document.createElement('button');
      btn2.innerHTML = `&#9662;${ele.down}`;
      btn2.style.backgroundColor='#f8f8';
      div.append(btn2);
      btn1.addEventListener('click',(e)=>{
        const temp={
          result:'up',
          row: ele.row
        };
        sendData(temp);
      })
      btn2.addEventListener('click',(e)=>{
        const temp={
          result:'down',
          row: ele.row
        };
        sendData(temp);
      })
    }));
  })
}


function sendData(obj){
  console.log(obj);
  let formData = new FormData();
  formData.append('data',JSON.stringify(obj));

  fetch(url,{
    method:"POST",
    body: formData
  }).then((rep)=>{
    return rep.json()
  }).then((json)=>{
    console.log(json);
  })






}
