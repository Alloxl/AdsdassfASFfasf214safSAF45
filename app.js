const music = new Audio('audio/15.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Küllenen aşk <br>
        <div class="subtitle">Cengiz Kurtoğlu</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083007732312981524/ab67616d0000b273d0ecf0b5afba0062c14a5157.png"
    },
    {
        id:'2',
        songName:` Beşiktaşım <br>
        <div class="subtitle">Eypio</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083007486107328612/ab67616d0000b2736ee27ad87f29721c24c82217.png"
    },
    // all object type 
    {
        id:"3",
        songName: `Yanlış <br><div class="subtitle"> Tuğçe Kandemir</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083007267982540881/ab67616d0000b2739d7897c3f94e7dae384aade8.png",
    },
    {
        id:"4",
        songName: `Hüznü Hecem <br><div class="subtitle">Yaner Çevik</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083006812598583316/ab67616d0000b27372bb61b524759556b5cba320.png",
    },
    {
        id:"5",
        songName: `Neyim var ki <br><div class="subtitle">Ceza, Sagopa Kajmer</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083008030792241183/ab67616d0000b2732a07bf1912730d354453a4ca.png",
    },
    {
        id:"6",
        songName: `Hata Bizim <br><div class="subtitle">Heredot Beatz</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083008489187704922/ab67616d0000b273dca72c20872f59c98d4c6b74.png",
    },
    {
        id:"7",
        songName: `10MG <br><div class="subtitle">Motive</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083008808776892526/ab67616d0000b273dc5c2b466114a99eb4bdf13e.png",
    },
    {
        id:"8",
        songName: `Alev Alıyor Dünyam <br><div class="subtitle">Polemick</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083009197823770685/ab67616d0000b273902857867651f4cf6ab042e0.png",
    },
    {
        id:"9",
        songName: `Körebe <br><div class="subtitle">Yiğit Aktaş</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083010682938720286/ab67616d0000b2732dc1543890a79fb1c7c23531.png",
    },
    {
        id:"10",
        songName: `Nalan <br><div class="subtitle">Emir Can İğrek</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083011032567517277/ab67616d0000b273efecddd412a17ef986bdd351.png",
    },
    {
        id:"11",
        songName: `Bağırın <br><div class="subtitle">Hidra</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083011373870616596/ab67616d0000b2734fff4c6c0428d9b3b5dc9084.png",
    },
    {
        id:"12",
        songName: `Labirent <br><div class="subtitle">Şehinşah, Hidra</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083011817481187378/ab67616d0000b273782329fcc4147cb8d65d5433.png",
    },
    {
        id:"13",
        songName: `Üzülme/elbetbirgün <br><div class="subtitle">Agoni</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083012276799418409/ab67616d0000b27340e41a7d7e469fbab1ce836a.png",
    },
    {
        id:"14",
        songName: `Yarım Kalan Sigara <br><div class="subtitle">No.1, Melek Mosso</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083012688675881000/ab67616d0000b273cd40ab5dbc95d9e8b6b9dfa3.png",
    },
    {
        id:"15",
        songName: `Huzurum Kalmadı <br><div class="subtitle">Ferdi Tayfur</div>`,
        poster: "https://cdn.discordapp.com/attachments/1074667476324991088/1083012938236956762/ab67616d0000b27348a29974de88172f4e6ad160.png",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
