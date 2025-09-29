const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: "Maya Myles",
        position: "Marketing Specialist",
        photo: "https://randomuser.me/api/portraits/women/46.jpg",
        text: "This course has been incredibly helpful in understanding web development! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas aliquam accusamus aspernatur maxime similique, in odio, excepturi dolor beatae, laudantium expedita? Quaerat modi quam commodi quibusdam ipsa maiores, libero, numquam excepturi quos iste animi distinctio incidunt odit atque deserunt est, voluptas cum odio sapiente tempora itaque illum tenetur! Magni alias earum deserunt ab, dolor autem repellat quia aliquam voluptatum cumque? Neque, dolorum dicta placeat eum praesentium ratione ullam nihil quia libero? Dolore voluptate unde nemo, delectus animi error molestiae magni quod veniam asperiores sequi iusto neque, et nesciunt cupiditate non? Debitis repudiandae enim consectetur incidunt sunt vero assumenda obcaecati."
    },
    {
        name: "John Doe",
        position: "Web Developer",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "I learned so much and was able to apply it to my job immediately. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas aliquam accusamus aspernatur maxime similique, in odio, excepturi dolor beatae, laudantium expedita? Quaerat modi quam commodi quibusdam ipsa maiores, libero, numquam excepturi quos iste animi distinctio incidunt odit atque deserunt est, voluptas cum odio sapiente tempora itaque illum tenetur! Magni alias earum deserunt ab, dolor autem repellat quia aliquam voluptatum cumque? Neque, dolorum dicta placeat eum praesentium ratione ullam nihil quia libero? Dolore voluptate unde nemo, delectus animi error molestiae magni quod veniam asperiores sequi iusto neque, et nesciunt cupiditate non? Debitis repudiandae enim consectetur incidunt sunt vero assumenda obcaecati."
    },
    {
        name: "Jane Smith",
        position: "UI/UX Designer",
        photo: "https://randomuser.me/api/portraits/women/47.jpg",
        text: "The projects are engaging and relevant. Highly recommend! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas aliquam accusamus aspernatur maxime similique, in odio, excepturi dolor beatae, laudantium expedita? Quaerat modi quam commodi quibusdam ipsa maiores, libero, numquam excepturi quos iste animi distinctio incidunt odit atque deserunt est, voluptas cum odio sapiente tempora itaque illum tenetur! Magni alias earum deserunt ab, dolor autem repellat quia aliquam voluptatum cumque? Neque, dolorum dicta placeat eum praesentium ratione ullam nihil quia libero? Dolore voluptate unde nemo, delectus animi error molestiae magni quod veniam asperiores sequi iusto neque, et nesciunt cupiditate non? Debitis repudiandae enim consectetur incidunt sunt vero assumenda obcaecati."
    }
    // Add more testimonials as needed
];

let idx = 1

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length  -  1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)