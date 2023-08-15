<template>
    <div class="homePage" >
        <div class="polyHome">
            <nuxt-img
                src="/assets/polyIntro2.webp"
                alt="poly intro img"
            />
            <div class="polyHomeTop">
                <div class="topText">
                    <h1>Making a clean Difference</h1>
                    <p>Whether it's residential, commercial, or industrial cleaning, we tailor our services to meet your specific needs. From thorough deep cleaning to regular maintenance, we take care of it all.</p>
                    <div class="topBtns">
                        <button type="button"> <nuxt-link to="/services" >Our services</nuxt-link> </button>
                        <button type="button"> <nuxt-link to="/contact" >Contact</nuxt-link> </button>
                    </div>
                </div>
                <div class="quoteForm">
                    <form>
                        <input type="text" placeholder="Full Name">
                        <!-- <input type="text" placeholder="Mobile Contact"> -->
                        <input type="email" placeholder="Email">
                        <input type="text" placeholder="Location">
                        <textarea name="" id="" cols="30" rows="5" placeholder="Description"></textarea>
                        <button type="button">Get Quote</button>
                    </form>
                </div>
            </div>
        </div>
        <MainTags />
        <div class="why">
            <h3>Why choose Poyi Uganda Cleaners</h3>
            <p>Our team of dedicated professionals goes above and beyond to understand and cater to the unique needs of each client, ensuring personalized solutions that drive success. What makes us different is our forward-thinking approach, consistently staying ahead of market trends and technological advancements to provide clients with solutions that meet their needs.</p>
        </div>
        <div class="how">
            <h3>Get to know how it works</h3>
            <ul>
                <li>
                    <nuxt-img
                    src="/assets/form.webp"
                    alt="poyi image"
                    format="webp"
                    />
                    <p>Request for a quote or browse through our collection of services.</p>
                </li>
                <li>
                    <nuxt-img
                    src="/assets/call.jpeg"
                    alt="poyi image"
                    format="webp"
                    />
                    <p>Get in touch with our support team either by email or phone.</p>
                </li>
                <li>
                    <nuxt-img
                    src="/assets/relax.webp"
                    alt="poyi image"
                    format="webp"
                    />
                    <p>Seat back, relax and we shall get back to you with the best solution.</p>
                </li>
            </ul>
        </div>
        <div class="info">
            <div class="infoText">
                <h3>Cutting edge Equipment</h3>
                <p>Our powerful cleaning methods not only remove deep-seated dirt, stains, and allergens, but they also restore the vibrant colors and softness of your carpets, making them feel like new. With our eco-friendly and safe cleaning solutions, you can enjoy a healthier indoor environment for your loved ones.</p>
            </div>
            <nuxt-img
                src="/assets/carpet_cleaning.jpeg"
                alt="poyi info"
                format="webp"
            />
        </div>
        <div class="info">
            <nuxt-img
                src="/assets/tile_cleaning.webp"
                alt="poyi info"
                format="webp"
                class="bigScreenImage"
            />
            <div class="infoText">
                <h3>Top-Notch Cleaning Techniques</h3>
                <p>Our team is equipped with the latest technology and expertise to bring life to your tiles, making them shine like before. Say goodbye to stubborn grime, mold, and stains that can sombres the appearance of your floors – our advanced cleaning techniques ensure a thorough and deep clean, leaving your tiles looking pristine and rejuvenated.</p>
            </div>
            <nuxt-img
                src="/assets/tile_cleaning.webp"
                alt="poyi info"
                format="webp"
                class="smallScreenImage"
            />
        </div>
        <div class="info">
            <div class="infoText">
                <h3>Cleaning Your work environment</h3>
                <p>we understand that a clean and organized office is crucial for productivity, employee morale, and leaving a lasting impression on clients and visitors. Our dedicated team of cleaning professionals go above and beyond to ensure every nook and cranny is thoroughly cleaned, creating a spotless and inviting atmosphere for your team and guests.</p>
            </div>
            <nuxt-img
                src="/assets/office_cleaning.jpeg"
                alt="poyi info"
                format="webp"
            />
        </div>
        <div class="about" id="about">
            <h3>About Poyi Uganda Cleaners</h3>
            <p>We are Poly Uganda Cleaners, your trusted cleaning service provider. With passion for cleanliness and a commitment to excellence geared to making a clean differenc. we are eger to transform your living or working spaces into pristine environments. Our team of skilled professionals are equipped with state-of-the-art cleaning tools and eco-friendly products.</p>
            <p>Whether it's residential, commercial, or industrial cleaning, we tailor our services to meet your specific needs. From thorough deep cleaning to regular maintenance, we take care of every nook and cranny, ensuring a spotless and hygienic atmosphere. Choose Poly Uganda Cleaners for a reliable, efficient, and hassle-free cleaning experience. Let us make your space shine, while you focus on what matters most. Contact us today and discover the difference!</p>
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped>
    .homePage {
        max-width: 1300px;
        width: 100%;
    }
    .polyHome {
        position: relative;
        height: 600px;
        border-radius: 1rem;
        overflow: hidden;
    }
    .polyHome img {
        width: 100%;
        height: 600px;
        object-fit: cover;
    }
    .polyHomeTop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        display: grid;
        align-items: center;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
    .topText {
        padding: 5%;
        color: #fff;
    }
    .topText h1 {
        font-size: 2.5rem;
        line-height: 3rem;
        /* font-family: 'Borel', cursive; */
        margin-bottom: 0.5rem;
    }
    .topText p {
        margin-bottom: 3rem;
    }
    .topBtns button a {
        text-decoration: none;
        color: #fff;
    }
    .topBtns button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: var(--themeColor);
        color: #fff;
        font-weight: 700;
    }
    .topBtns button:nth-child(1) {
        margin-right: 2rem;
    }
    .topBtns button:nth-child(2) {
        /* border: var(--themeColor) solid 2px; */
        background-color: var(--lighterThemeColor);
        color: var(--themeColor);
    }
    .topBtns button:nth-child(2) a {
        color: #000;
    }
    .quoteForm {
        padding: 5%;
    }
    .quoteForm form {
        display: flex;
        flex-direction: column;
        padding: 5%;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 1rem;
    }
    .quoteForm form input, .quoteForm form textarea {
        padding: 1rem;
        border: none;
        outline: none;
        width: 100%;
        border-radius: 0.4rem;
        margin-bottom: 1rem;
        background-color: rgba(255, 255, 255, 0.5);
        resize: none;
    }
    .quoteForm form button {
        border: none;
        outline: none;
        background-color: var(--themeColor);
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 0.4rem;
        /* margin: auto; */
        width: fit-content;
        font-weight: 600;
    }
    .why {
        padding: 5%;
        border-radius: 1rem;
        color: #fff;
        background-color: var(--themeColor);
        text-align: center;
        margin: 2rem 0;
    }
    .why h3 {
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    .how {
        text-align: center;
        margin: 4rem 0;
    }
    .how h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--themeColor);
    }
    .how ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .how ul li {
        max-width: 250px;
        min-width: 200px;
        list-style: none;
        margin: 1rem;
    }
    .how ul li img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
    .about {
        text-align: center;
        padding: 5%;
        background-color: #eee;
        border-radius: 1rem;
    }
    .about h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--themeColor);
    }
    .about p {
        margin-bottom: 1rem;
    }
    .info {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        margin: 3rem 0;
        align-items: center;
    }
    .info img {
        width: 100%;
        height: 450px;
        border-radius: 1rem;
        object-fit: cover;
    }
    .infoText {
        display: flex;
        flex-direction: column;
        padding: 5%;
    }
    .infoText h3 {
        font-size: 1.5rem;
        color: var(--themeColor);
        margin-bottom: 1rem;
    }
    .smallScreenImage {
        display: none;
    }
    @media(max-width:600px) {
        .topText h1 {
            font-size: 2rem;
        }
        .topBtns button:nth-child(1) {
            margin-right: 0.7rem;
        }
        .why h3, .how h3, .about h3 {
            font-size: 1.5rem;
        }
    }
    @media(max-width:530px) {
        .smallScreenImage {
            display: block;
        }
        .bigScreenImage {
            display: none;
        }
    }
    @media (max-width:527px) {
        .polyHome, .polyHome img {
            height: 800px;
        }
    }
    @media (max-width:490px) {
        .polyHome, .polyHome img {
            height: 1000px;
        }
    }

</style>