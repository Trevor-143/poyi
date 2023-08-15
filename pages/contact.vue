<template>
    <div class="contactPage">
        <div class="contactInfo">
            <div class="top">
                <nuxt-img
                src="/assets/polyIntro.webp"
                alt="poyi cleaners contact image"
                format="webp"
                />
                <h3>Get in touch with Poyi <br> Uganda Cleaners today</h3>
            </div>
            <div class="formArea">
                <form>
                    <input type="text" placeholder="Your Full Name">
                    <input type="email" placeholder="Your Email">
                    <input type="text" placeholder="Your Number">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button type="button">Send</button>
                </form>
                <div class="formText">
                    <div class="mainContacts" >
                        <a href="tel:+256 200 961994">
                            <Icon name="ph:phone-call-fill" color="#1c0a54" />
                            <h3>Click here to call +256 200 961994. If not available please try the alternative</h3>
                        </a>
                    </div>
                    <div class="mainContacts" >
                        <a href="https://api.whatsapp.com/send?phone=+256 778 911744">
                            <Icon name="ic:baseline-whatsapp" color="#1c0a54" />
                            <h3>Click here to chat on +256 778 911744 with poyi uganda on whatsapp </h3>
                        </a>
                    </div>
                    <div class="mainContacts" >
                        <a href="mailto:info@poyiugandacleaners.com">
                            <Icon name="fluent:mail-copy-24-filled" color="#1c0a54" />
                            <h3>Click here to send an email to poyi uganda cleaners</h3>
                        </a>
                    </div>
                    <div class="mainContacts" >
                        <Icon name="fluent:location-28-filled" color="#1c0a54" />
                        <h3>We are located in Kyungu Mukono Uganda</h3>
                    </div>
                    <div class="socialLinks">
                        <a href="#"> <Icon name="mdi:facebook" color="white" /> </a>
                        <a href="#"> <Icon name="teenyicons:instagram-solid" color="white" /> </a>
                        <a href="#"> <Icon name="mdi:twitter" color="white" /> </a>
                        <a href="#"> <Icon name="ic:twotone-tiktok" color="white" /> </a>
                        <a href="#"> <Icon name="mdi:wechat" color="white" /> </a>
                        <a href="#"> <Icon name="ic:baseline-whatsapp" color="white" /> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
</script>


<style scoped>
    .contactPage {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .contactInfo {
        max-width: 1300px;
        width: 100%;
    }
    .top {
        position: relative;
        height: 400px;
        border-radius: 1rem;
        overflow: hidden;
    }
    .top img {
        width: 100%;
        display: block;
        height: 400px;
        object-fit: cover;
        display: block;
    }
    .top h3 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        color: #fff;
        padding: 5%;
        font-size: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .formArea {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        margin: 3rem 0;
        align-items: center;
    }
    .formArea form {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: 1rem;
        background-color: #eee;
    }
    @media (max-width:660px) {
        .formArea form, .formArea .formText {
            grid-column: span 2;
        }
    }
    .formArea form input,
    .formArea form textarea {
        padding: 1rem;
        border: none;
        outline: none;
        background-color: #fff;
        border-radius: 0.6rem;
        max-width: 95%;
        width: 100%;
        margin: 1rem auto;
    }
    .formArea form button {
        background-color: var(--themeColor);
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        margin: 1rem auto;
    }
    .formText a, .formText div {
        display: flex;
        align-items: center;
        color: #000;
        text-decoration: none;
    }
    .mainContacts svg {
        margin: 1rem;
        min-width: 50px;
        height: auto;
    }
    .formText {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        word-wrap: break-word;
    }
    .formText h3 {
        font-size: 0.9rem;
        font-weight: 500;
        max-width: 300px;
        width: 100%;
    }
    .socialLinks {
        width: 100%;
        background-color: var(--themeColor);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: fit-content;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
    }
    .socialLinks a svg {
        height: 1.5rem;
        width: auto;
        margin: 0.5rem;
    }
    @media (max-width: 600px) {
        .top h3 {
            font-size: 1.7rem;
        }
    }
</style>