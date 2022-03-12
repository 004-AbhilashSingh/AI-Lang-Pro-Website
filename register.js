const form = document.getElementById('reg-form');
form.addEventListener('submit',registeruser);

async function registeruser(event){
    event.preventdefault();
    const rollno = document.getElementById("rollno.");
    const password = document.getElementById("password");

    const result = await fetch('/api/register',{
        method:postMessage,
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            username,
            password
        })
    }).then((res)=>res.json());

    console.log(result);
}