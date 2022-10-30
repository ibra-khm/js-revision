function q1(x) {
    if(x <= 0){
        console.log('true')
    }else {
        console.log('false')
    }
}
q1(-12)

function q2(x){
      console.log(x + 1)
}
q2(5)

function q3(arr) {
    let newArr = [];
    const regex = /[0-9]/;
    for (let i=0; i < arr.length; i++){
        if(regex.test(arr[i])){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
}
q3(['ibrahim', 'ibrah1m', 'i3rahim'])

function q4(num){
    if (num === 0) {
        console.log('even');
    }else if (num ===1 ){
        console.log('odd');
    } else {
        return q4(num - 2)
    }
}
q4(8)

// function q5
function q6(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    } 
    
}

q6(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"])


function q7(arr){
    let uniqueArr = [];
    arr.forEach((element) => {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    })
    console.log(uniqueArr)
    
}
q7(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"])

function q8Series(arr){
        return[
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": [4.0],
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": [5.0],
                    "bookmark": [{ id: 432534, time: 65876586 }]
                },
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": [4.0],
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": [5.0],
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
                     ]
                    }
            
    

function q8(arr) {
    newArr = [];
    arr.forEach((elem) => {
        pairs = {id: elem.id, title: elem.title};
        newArr.push(pairs)
    });
    console.log(newArr);
}
q8(q8Series())

function q9(arr) {
    let newArr = arr.map(elem => {
        return {id: elem.id, title: elem.title};
    })
    console.log(newArr)
}
q9(q8Series());

function q10(arr) {
    let stars = arr.filter((elem) => {
       return elem.rating < 5;
    })
    console.log(stars)
}
q10(q8Series())



function q11(arr) {
    let longestStr = arr.reduce((longest, crntStr) => {
    return crntStr.length > longest.length ? crntStr : longest;
});
    console.log(longestStr)
}
q11(["Java", "JavaScript", "Python", "C++", "PHP"])

function q12Pokemon(arr){
    return [
        {
            "game_index": 76,
            "version": {
              "name": "red",
              "url": "https://pokeapi.co/api/v2/version/1/"
            }
          },
          {
            "game_index": 76,
            "version": {
              "name": "blue",
              "url": "https://pokeapi.co/api/v2/version/2/"
            }
          },
          {
            "game_index": 76,
            "version": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version/3/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "gold",
              "url": "https://pokeapi.co/api/v2/version/4/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "silver",
              "url": "https://pokeapi.co/api/v2/version/5/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version/6/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "ruby",
              "url": "https://pokeapi.co/api/v2/version/7/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "sapphire",
              "url": "https://pokeapi.co/api/v2/version/8/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version/9/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "firered",
              "url": "https://pokeapi.co/api/v2/version/10/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "leafgreen",
              "url": "https://pokeapi.co/api/v2/version/11/"
            }
          },
          {
            "game_index": 132,
            "version": {
              "name": "diamond",
              "url": "https://pokeapi.co/api/v2/version/12/"
            }
        }
    ]
}
function displayName(arr) {
    let newArr = arr.reduce((poke, elem) => {
        return poke.concat(elem.version.name);
    }, []);
    console.log(newArr)
}
displayName(q12Pokemon())


//q14 
// A: 