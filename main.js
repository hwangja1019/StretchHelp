
async function fetchMeData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '11e8a4cf2amsh4ea0cc675c605f0p18ef91jsn9f4bbea5f088',
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
        }
    };
    
    const data = await fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
        .then(response => response.json())
        .then(json => {
            const quoteBody = document.querySelector('.quote');
            const quote = document.createElement('p');
            quote.innerHTML = `${json[0].text}`
            quoteBody.appendChild(quote);
            openSite();
        })
        .catch(err => console.error(err));
    console.log(data);
 
}
// const button = document.querySelector('button');
// button.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let obj = {0: 'https://www.youtube.com/watch?v=inpok4MKVLM',
//             1: 'https://www.youtube.com/watch?v=8w8vuM98kk8',
//             2: 'https://www.youtube.com/watch?v=dF965ll2J0c',
//             3: 'https://www.youtube.com/watch?v=fq7xaLY7_Zs'
//             }
//      window.open(obj[Math.floor(Math.random()*4)]);
//      console.log("IS this working?")
// })
function openSite(){
    let obj = {0: 'https://www.youtube.com/watch?v=inpok4MKVLM',
    1: 'https://www.youtube.com/watch?v=8w8vuM98kk8',
    2: 'https://www.youtube.com/watch?v=dF965ll2J0c',
    3: 'https://www.youtube.com/watch?v=fq7xaLY7_Zs'
    }
    const link = document.querySelector('a');
    link.setAttribute('href', `${obj[Math.floor(Math.random()*4)]}`);
}

fetchMeData();