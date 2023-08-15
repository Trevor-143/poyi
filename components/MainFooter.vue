<template>
    <div class="down">
        <footer>
            <div class="one">
                <div class="top">
                    <nuxt-img
                        src="/assets/polyProfile.jpg"
                        alt="poly logo"
                    />
                    <!-- <p>Making a clean Difference</p> -->
                </div>
                <h4>&copy; {{ date }} </h4>
            </div>
            <div class="three">
                <h4>Our Services</h4>
                <ul>
                    <nuxt-link to="/services#Laundry Services">Laundry services</nuxt-link>
                    <nuxt-link to="/services#Forgging">Forgging</nuxt-link>
                    <nuxt-link to="/services#Disinfection & sanitizing">Sanitizing</nuxt-link>
                    <nuxt-link to="/services#Sofa & Carpet cleaning">Capet Cleaning</nuxt-link>
                    <nuxt-link to="/services#Lawn Service">Lawn/mowing services</nuxt-link>
                    <nuxt-link to="/services#Pest Control">Pest Control</nuxt-link>
                    <nuxt-link to="/services#House cleaning and fumigation">House Cleaning</nuxt-link>
                    <nuxt-link to="/services">See all services</nuxt-link>
                </ul>
            </div>
            <div class="two">
                <h4>Company</h4>
                <ul>
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="#">About</nuxt-link>
                    <nuxt-link to="/services">Services</nuxt-link>
                    <nuxt-link to="/terms">Terms</nuxt-link>
                    <a href="tel:0756447856">Call</a>
                    <a href="mailto:trevor@gmail.com">Email</a>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </ul>
            </div>
            <div class="four">
                <h4>Our Mission</h4>
                <p>To become the best cleaning service providers in Uganda</p>
                <div class="social">
                        <a href="#"> <Icon name="mdi:facebook" color="white" /> </a>
                        <a href="#"> <Icon name="teenyicons:instagram-solid" color="white" /> </a>
                        <a href="#"> <Icon name="mdi:twitter" color="white" /> </a>
                        <a href="#"> <Icon name="ic:twotone-tiktok" color="white" /> </a>
                        <a href="#"> <Icon name="mdi:wechat" color="white" /> </a>
                        <a href="#"> <Icon name="ic:baseline-whatsapp" color="white" /> </a>
                </div>
            </div>
        </footer>
    </div>
</template>


<script setup>

const date = new Date().getFullYear() 

</script>


<style scoped>
    .down {
        width: 100%;
        display: flex;
        align-self: center;
        justify-content: center;
        margin: 2rem 0;
    }
    footer {
        background-color: var(--themeColor);
        color: #fff;
        max-width: 1300px;
        border-radius: 1rem;
        width: 100%;
        min-height: 500px;
        padding: 2rem 1rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
    .one {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .one .top img {
        width: 100%;
    }
    footer h4 {
        margin-bottom: 2rem;
    }
    footer .two ul, footer .three ul {
        display: flex;
        flex-direction: column;
    }
    footer .two a, footer .three a {
        text-decoration: none;
        color: #eee;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    .four p {
        font-size: 0.9rem;
        color: #eee;
    }
    .social {
        margin-top: 2rem;
    }
    .social svg {
        margin-right: 0.5rem;
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>