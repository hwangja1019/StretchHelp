
function fetchMeData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '11e8a4cf2amsh4ea0cc675c605f0p18ef91jsn9f4bbea5f088',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(json => {
            const quoteBody = document.querySelector('.quote');
            const quote = document.createElement('p');
            quote.setAttribute('class', "quote");
            quote.innerHTML = `${json.content}`
            quoteBody.appendChild(quote);
            openSite();
        })
        .catch(err => console.error(err));
 
}

function openSite(){
    let obj = {0: 'https://www.youtube.com/watch?v=inpok4MKVLM',
    1: 'https://www.youtube.com/watch?v=8w8vuM98kk8',
    2: 'https://www.youtube.com/watch?v=dF965ll2J0c',
    3: 'https://www.youtube.com/watch?v=fq7xaLY7_Zs',
    4: 'https://www.youtube.com/watch?v=yKItGCpL73M',
    5: `https://www.youtube.com/watch?v=2L2lnxIcNmo`
    }
    const link = document.querySelector('a');
    const button = document.getElementById('button')
    link.setAttribute('href', `${obj[Math.floor(Math.random()*6)]}`);
    
}

fetchMeData();
