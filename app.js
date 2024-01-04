let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url = " https://meme-api.com/gimme/";

// array of subreddits
let subreddits = [
  "catmemes",
  "wholesomemes",
  "dogmemes",
  "me_irl",
  "memes",
  "dankmemes",
  "funny",
  "AdviceAnimals",
  "PrequelMemes",
  "MemeEconomy",
  "terriblefacebookmemes",
  "wholesomememes",
  "HistoryMemes",
  "cleanmemes",
  "comedyhomicide",
];
// function to get random memes
let getMeme = () => {
  //choose random meme subreddit
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];
    // feth data from the meme api
    fetch(url+randomSubreddit).then(resp=>resp.json()).then(data=>{
        let memeImg = new Image()
        // display meme image and titile only this image loads
        memeImg.onload = ()=>{
            title.innerHTML = data.title
            meme.src = data.url
            
        }
        memeImg.src = data.url
    })
};
// call the getMeme() on button click or on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
