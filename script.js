fetch('https://api.github.com/users/lisaredfox').then {res => res.json()}.then {json => console.log(json)}
