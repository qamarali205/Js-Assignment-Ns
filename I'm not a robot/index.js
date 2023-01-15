// javascript code goes her
// to track the number of images clicked
let imgClicked = 0;
let selectedImages = [];
let images = [
    "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png",
    "https://1fid.com/wp-content/uploads/2022/07/boy-anime-wallpaper-image-for-profile-pic-81.jpg",
    "https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg",
    "https://staticg.sportskeeda.com/editor/2022/08/2eb12-16597398479926-1920.jpg",
    "https://variety.com/wp-content/uploads/2023/01/Zom-100-PV-1-Still-6-res.jpg?w=681&h=383&crop=1"
]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function insertImages(){
    let shuffledArr = shuffle(images) 
    shuffledArr.forEach((img,index) => {
        document.querySelector('#imgContainer').insertAdjacentHTML(
            'beforeend',
            `<img data-ns-test="img${index + 1}" src="${img}" />`
        );

    })
    let randomIndex = Math.floor(Math.random() * 4);
    document.querySelector('#imgContainer').insertAdjacentHTML(
        'beforeend',
        `<img data-ns-test="img${randomIndex + 1}" src="${shuffledArr[randomIndex]}" />`
    );
}

document.querySelector('#imgContainer').addEventListener('click', (e) => {
    if(e.target.dataset.nsTest != undefined){
        if(!(e.target.classList.contains('selected')) && imgClicked < 2){
            e.target.classList.add('selected');
            imgClicked++;    
            // console.log(imgClicked);
            let newArr = [];
            for(let ele of document.querySelectorAll('.selected')){
                newArr.push(ele.dataset.nsTest);
            }
            selectedImages = newArr;
        }else if(imgClicked <= 2 && e.target.classList.contains('selected')){
            e.target.classList.remove('selected');
            imgClicked--;
            // console.log(imgClicked);
            let newArr = [];
            for(let ele of document.querySelectorAll('.selected')){
                newArr.push(ele.dataset.nsTest);
            }
            selectedImages = newArr;
        } 
        console.log(selectedImages)
        const resetElement = document.querySelector("#reset");
        if(selectedImages.length >= 1 && resetElement === null){
            document.querySelector('body').insertAdjacentHTML(
            'beforeend',
            `<button id="reset">Reset</button>`
        );
        }else if(resetElement != null && selectedImages.length != 2){
            resetElement.remove();
        }
        const element = document.querySelector("#btn");
        if(selectedImages.length === 2 && element === null){
            document.querySelector('body').insertAdjacentHTML(
            'beforeend',
            `<button id="btn">Verify</button>`
        );
        }else if(element != null && selectedImages.length != 2){
            element.remove();
        }
    }
})

try{
    document.querySelector("body").addEventListener('click', (e) => {
        if (e.target.id != "btn") return;
        let ele= document.querySelector("#para");
        if(ele != null){
            ele.remove();
        }
        if(selectedImages[0] === selectedImages[1]){
            document.querySelector('body').insertAdjacentHTML(
                'beforeend',
                `<p id="para">You are a human. Congratulations!</p>`
            );
        }else{
            document.querySelector('body').insertAdjacentHTML(
                'beforeend',
                `<p id="para">We can't verify you as a human. You selected the non-identical tiles.</p>`
            );
        }
    })
}catch(e){
    console.log("button does not exists yet");
}

insertImages();