<template>
    <div class="header" id="header">
        <header>
            <div class="logo">
                <nuxt-link to="/">
                    <nuxt-img
                        src="/assets/polyProfile.jpg"
                        alt="poyi logo"
                    />
                </nuxt-link>
                <h4>Poyi Uganda Cleaners</h4>
            </div>
            <div class="sideMenu">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/#about">About</nuxt-link>
                <nuxt-link to="/services">Services</nuxt-link>
                <nuxt-link to="/terms">Terms</nuxt-link>
                <a href="tel:0756447856">Call</a>
                <a href="mailto:trevor@gmail.com">Email</a>
                <nuxt-link to="/contact">Contact</nuxt-link>
            </div>
            <div class="menuToggle" @click="toggleSmallScreenMenu">
                <Icon v-if="!smallScreenMenu" name="material-symbols:lists-rounded" color="#1c0a54" />
                <Icon v-if="smallScreenMenu" name="ic:round-close" color="white" />
            </div>
            <div class="sideMiniMenu" v-if="smallScreenMenu" @click="toggleSmallScreenMenu" >
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/#about">About</nuxt-link>
                <nuxt-link to="/services">Services</nuxt-link>
                <nuxt-link to="/terms">Terms</nuxt-link>
                <a href="tel:0756447856">Call</a>
                <a href="mailto:trevor@gmail.com">Email</a>
                <nuxt-link to="/contact">Contact</nuxt-link>
            </div>
        </header>
    </div>
</template>

<script setup>

const smallScreenMenu = ref(false)
const toggleSmallScreenMenu = () => {
    smallScreenMenu.value = !smallScreenMenu.value
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})

const handleScroll = () => {
    const div = document.getElementById('header');
    // const div = document.('header')
    if (window.pageYOffset > 0) {
        div.classList.add('addShadow');
    } else {
        div.classList.remove('addShadow');
    }
}


</script>

<style scoped>

    .header {
        width: 100%;
        padding: 1rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        z-index: 5;
    }
    .addShadow {
        box-shadow: 0px 10px 39px -13px rgba(0,0,0,0.57);
        -webkit-box-shadow: 0px 10px 39px -13px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 10px 39px -13px rgba(0,0,0,0.57);
    }
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1300px;
        width: 100%;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .logo img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 0.5rem;
        margin-right: 1rem;
    }
    .logo h4 {
        font-family: 'Poppins', cursive;
        font-size: 0.8rem;
        color: var(--lighterThemeColor);
    }
    .sideMenu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 600px;
        width: 100%;
    }
    .sideMenu a {
        text-decoration: none;
        color: #000000;
        font-size: 0.9rem;
        font-weight: 600;
    }
    .sideMenu a:last-child {
        color: #fff;
        background-color: var(--lighterThemeColor);
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
    .menuToggle {
        z-index: 20;
        display: none;
    }
    .menuToggle svg {
        font-size: 2rem;
    }
    .sideMiniMenu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background-color: var(--themeColor);
        display: flex;
        padding: 10%;
        flex-direction: column;
        box-shadow: 0px 27px 71px 12px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 27px 71px 12px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 27px 71px 12px rgba(0,0,0,0.75);
    }
    .sideMiniMenu a {
        color: #fff;
        text-decoration: none;
        margin: 0.5rem 0;
        font-weight: 600;
    }

    @media (max-width: 840px) {
        .menuToggle {
            display: block;
        }
        .sideMenu {
            display: none;
        }
    }

</style>