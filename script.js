console.log("Welcome to SPOTIFY!!!");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let Gif = document.getElementById('Gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    { songName: "driving license", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "happier", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "good 4 u", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "traitor", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// handel the play pause button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        Gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        Gif.style.opacity = 0;


    }
})

// listen to event

audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressbar.value = progress
})


myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressbar.value * audioElement.duration) / 100
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
       
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        Gif.style.opacity = 1


    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>3){
        songIndex=1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    Gif.style.opacity = 1
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    Gif.style.opacity = 1
})
document.getElementById('skip+').addEventListener('click',()=>{
    audioElement.src = `songs/${songIndex}.mp3`;
    myProgressbar.value = progress+10;
   
})
document.getElementById('skip-').addEventListener('click',()=>{
    audioElement.src = `songs/${songIndex}.mp3`;
    myProgressbar.value = progress+10;
    
})

// handle the 10 s skip and prev button
// getElementById('skip+').onclick = function() {
//     masterPlay[0].seek(masterPlay[0].currentTime() + 10);
//     }

//     getElementById('skip+').onclick = function() {
//     masterPlay[0].seek(Math.max(0, masterPlay[0].currentTime() - 10));
//     }
