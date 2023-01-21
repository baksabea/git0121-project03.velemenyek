const reviews = [

    {
        name: "Szent Endre",
        job: "PHP fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima. Magnam rem harum doloremque quibusdam. Placeat sapiente quae blanditiis eius facilis pariatur vero odio ullam, esse porro voluptate, id optio sed in quidem veniam rem."
    },

    {
        name: "Török Bálint",
        job: "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima."
    },

    {
        name: "Teszt Elek",
        job: "Manuális tesztelő",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima."
    }

]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
//Kiindulópont - ez fogja jelölni, melyik emberkét látjuk először.
let current = 0;

window.addEventListener("load", ()=> {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
})

function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}


nextBtn.addEventListener("click", () => {

    current++;
// Mindig -1, mindegy hány elem van a tömbe!!!
   if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);
})



prevBtn.addEventListener("click", () => {

    current--;

   if(current < 0){

        current = reviews.length - 1;
       
    }

    showPerson(current);
})
