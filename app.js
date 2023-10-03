

const cardArray = [
  {
    name: "fries",
    img: "images/fries.png"
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png"
  },
  {
    name: "milkshake",
    img: "images/milkshake.png"
  },
  {
    name: "hot dog",
    img: "images/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png"
  },
  {
    name: "pizza",
    img: "images/pizza.png"
  },
  {
    name: "fries",
    img: "images/fries.png"
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png"
  },
  {
    name: "milkshake",
    img: "images/milkshake.png"
  },
  {
    name: "hot dog",
    img: "images/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png"
  },
  {
    name: "pizza",
    img: "images/pizza.png"
  },
]

//to make evrything in cardArray random, sort compares two values then sorts throuth themo.5 will make them smaller or less than 0.5 and shuffle itbasd on that
cardArray.sort(() =>  0.5 - Math.random())

//used to look for an id of grid by going into document
const gridDisplay = document.querySelector("#grid")
//used to pick out id of result
const resultDisplay = document.querySelector('#result')
//array used to put cardArray into another array, let instead of const because it is used to start process again
let cardsChosen = []
//used to go into the cards and find them by their ids,let instead of const because it is used to start process again
let cardsChosenIds= []
//used to know how many matches we have
const cardsWon= []

//used to create element inside of each array
function createBoard () {
    for (let i=0; i< cardArray.length; i++) {
      //used to create image
       const card = document.createElement("img")
       //setTtribute seta a new value to an attribute (name,value)
       card.setAttribute('src', "images/blank.png")
       //adding id so each card is unique
       card.setAttribute("data-id", i)
       //use eventlistner to aply to each card, listen to click
       card.addEventListener("click", flipCard)
       //append displays each card into browser
       gridDisplay.append(card)
       console.log(card, i)
    }
}

createBoard()

//function used to check if two cards match
function checkMatch() {
//used to look for all the card images
const cards = document.querySelectorAll('img')
//this variable is used in place of cardsChosenIds
const optionOneId = cardsChosenIds[0]
const optionTwoId = cardsChosenIds[1]
console.log(cards)

  console.log('check for a match!')
//used to find a match
if (optionOneId == optionTwoId) {
  //used to show after a match has been found
  cards[optionOneId].setAttribute('src', 'images/blank.png')
  cards[optionTwoId].setAttribute('src', 'images/blank.png')
  alert('you clicked the same image')
}

  //get both items in cardsChosen array and see if they match
  //sees if two cards are the same
  if (cardsChosen[0] == cardsChosen [1]) {
    alert('You found a match')
    //goes into all the cards, passes through first item of cardschosenIds, if there is a match,makes one card white
    cards[optionOneId].setAttribute('src', 'images/white.png')
    //second item in cadrdschosenId gets white image added as well if theres a match
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    //on those same cards, pass through first and second id and remove the eventlistener to stop listening out for clicks on those cards
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    //pushes contents of cardsChosenarray to show how many cards we have and have won
    cardsWon.push(cardsChosen)
  } 
  //if theres is no match then flip them back to normal
  else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('sorry, try again')
  }
  //used to add score to results.innerhtml or textContent after every time you click check match
  resultDisplay.textContent = cardsWon.length
  //used to start again
  cardsChosen = []
  cardsChosenIds = []

  //used to show what happens if all the cards are matched
  if (cardsWon.length === cardArray.length/2) {
    //innerHTML retuens the html content of an element
    resultDisplay.innerHTML = 'Congrats you found them all'
  }

}

//used to flip card when it is clicked
function flipCard(){
  //get the data id of the card that is clicked, getAttribute returns value of elements atttribute (name)
  //this keyword is allowing to interact with whatver element is clicked
  let cardId = this.getAttribute("data-id")
  //passess through cardId so the name is returned,  .name  shows just name
  // console.log(cardArray[cardId].name)
  //used to push names into cardsCHosen Array
  cardsChosen.push(cardArray[cardId].name)
  //push cards id as well as name
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
//used to show image when card is flipped
this.setAttribute("src", cardArray[cardId].img)
//used to see if two of the cards picked  
if (cardsChosen.length === 2) {
  setTimeout( checkMatch, 500 )
}

}