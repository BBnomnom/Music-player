let arr = [
    { songName: 'Ajab si', img: "./omshantiom.jpg", url: './ajab si.mp3' },
    { songName: 'India wale', img: "https://i.pinimg.com/236x/e1/1b/de/e11bdee075b3e12471616b69e5d4c7a8.jpg", url: './India wale.mp3' },
    { songName: 'Pause your sight', img: "https://i.pinimg.com/236x/07/7f/37/077f37774385f7fcbffc136039a2fd89.jpg", url: './Puase your sight.mp3' }
]
let audio = new Audio;
let allsongs = document.querySelector('.all-songs')
let songImg = document.querySelector('.content .part2')
let selectedSong = 0;
let play = document.querySelector('#play')
let forward = document.querySelector('#forward')
let bacward = document.querySelector('#backward')

function mainFunction() {
    let clutter = ''
    arr.forEach(function (elem, index) {
        clutter += `    <div class="songs" id="${index}">
   <div class="part1">
      <div class="img">
          <img src="${elem.img}" alt="">
      </div>
      <div class="songname">
          <h2>${elem.songName}</h2>
          <h3>Billy Pathanon and Babe Tanatat</h3>
      </div>
   </div>
      <div class="duration">
          <h3>6:30</h3>
      </div>
  </div>`
    })
    allsongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url;
    songImg.style.backgroundImage = `url(${arr[selectedSong].img})`
}

mainFunction();
allsongs.addEventListener('click', function (dets) {
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    selectedSong = dets.target.id
    mainFunction()
    audio.play();
    console.log(selectedSong)
})
let flag = 0;
play.addEventListener('click', function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }
    else {
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction()
        audio.pause
        flag = 0
    }
})

forward.addEventListener('click', function(){
    if(selectedSong < arr.length - 1){
        forward.style.opacity = 1
        selectedSong++
        mainFunction()
        audio.play()
    }
    else{
        forward.style.opacity = 0.5
    }

})
bacward.addEventListener('click', function(){
    if(selectedSong > 0){
        bacward.style.opacity = 1
        selectedSong--
        mainFunction()
        audio.play()
    }
    else{
        bacward.style.opacity = 0.5
    }

})


