const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
//defining items
const personName = document.querySelector(".name")
const personJob = document.querySelector(".job")
const personText = document.querySelector(".text")
const personImg = document.querySelector(".img")

//btns
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const surprise = document.querySelector('.surprise')

//initialise the items
let currentItem = 0

// show reviews based on item
function navigate(item){
    const items = reviews[item]
    personName.textContent = items.name
    personJob.textContent = items.job
    personImg.src = items.img
    personText.textContent = items.text
}

//click the next button
next.addEventListener('click',()=>{
    currentItem++
    if(currentItem > reviews.length){
        currentItem = 0
    }
    navigate(currentItem)
})

prev.addEventListener('click',()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    navigate(currentItem)
})

//what will shoe when the page loads
window.addEventListener('DOMContentLoaded',()=>{
    let item = reviews[currentItem]
    personName.textContent = item.name
    personJob.textContent = item.job
    personImg.src = item.img
    personText.textContent = item.text
})

//surprise me button
surprise.addEventListener('click',()=>{
    currentItem = randonReviews()
    navigate(currentItem)
})

// random reviews
function randonReviews(){
    return Math.floor(Math.random()* reviews.length)
}