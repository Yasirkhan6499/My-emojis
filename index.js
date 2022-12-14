let myEmojis = [];
let sizesArr = [,,,];
let animalsEmojis = "🐶🐵🐱";
let partyEmojis = "🥳🎉👯‍♀️";
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const animalBtn = document.querySelector("#animals-btn");
const partyBtn = document.querySelector("#party-btn");
const size_input = document.querySelector("#input-size");
  localStorage.setItem("initial-values","👨‍💻 ⛷ 🍲");

// get the initial values from the local storage and add it into the array
window.addEventListener("load",()=>{
   let values = localStorage.getItem("initial-values");
   myEmojis = values.split(" ");
   console.log(myEmojis); 
   renderEmojis();
});


//set Animals And Party button
animalBtn.addEventListener("click",()=>{
    emojiInput.value = animalsEmojis;
});
partyBtn.addEventListener("click",()=>{
    emojiInput.value = partyEmojis;
});

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span');
        console.log(emoji);
        let size = getEmojiSize(i) || getEmojiSize(0.5);
        
        emoji.style.fontSize = size+"px";
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
}
function getEmojiSize(index){
    return sizesArr[index]*20;
}
renderEmojis()
function modifyEmojis(action){
      if (emojiInput.value && action==="push") {
        myEmojis.push(emojiInput.value)
        console.log("push");
    }
    else if (emojiInput.value && action==="unshift") {
        myEmojis.unshift(emojiInput.value)
        console.log("unshift");
    }
    else if(action==="pop"){
      myEmojis.pop()
      console.log("popp");
      
    }
    else{
        myEmojis.shift()
    }
    emojiInput.value = ""
    sizesArr.push(size_input.value);
    renderEmojis();
}
pushBtn.addEventListener("click", function(){
    modifyEmojis("push");
  
})

unshiftBtn.addEventListener("click", function(){
  modifyEmojis("unshift");
})

popBtn.addEventListener("click", function() {
   modifyEmojis("pop");
})

shiftBtn.addEventListener("click", function() {
    modifyEmojis("shift");
})

