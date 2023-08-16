<template>
    <div class="services">
        <div class="servicesTop">
            <div class="serviceText">
                <h3>Poyi Uganda Cleaners Services</h3>
                <p>A collection of all cleaning services offered by Poyi Uganda Cleaners. Expect a clean difference.</p>
            </div>
            <nuxt-img
                src="/assets/services.webp"
                alt="poyi services"
                format="webp"
            />
        </div>
        <div class="allServices">
            <div class="theServices">
                <div class="oneService" v-if="serviceData.length > 0" v-for="item in serviceData" :key="item.id">
                    <nuxt-img
                    :src="item.image"
                    :alt="item.name"
                    format="webp"
                    />
                    <div class="servText" :id="item.name" >
                        <h4>{{ item.name }}</h4>
                        <p>{{ item.content }}</p>
                        <div class="servBtns">
                            <a href="#">Call</a>
                            <a href="#">Email</a>
                        </div>
                    </div>
                </div>
                <div class="noService" v-if = "serviceData.length < 1" v-for="(i, index) in 10" :key="index">
                    <div class="div"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

// const serviceData = ref([])

// onMounted(async() => {
//     const { data } = await useFetch('/api/getServices')
//     console.log(data.value)
//     serviceData.value = data.value
// })

const serviceData = ref([])

onMounted(async () => {
    // Check if service data is already cached in local storage
    const cachedData = localStorage.getItem('serviceData')
    if (cachedData) {
        serviceData.value = JSON.parse(cachedData)
    } else {
        const { data } = await useFetch('/api/getServices')
        serviceData.value = data.value
        localStorage.setItem('serviceData', JSON.stringify(data.value))
    }
})

</script>


<style scoped>

    .services {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .servicesTop {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        background-color: var(--themeColor);
        max-width: 1300px;
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
    }
    .servicesTop img {
        width: 100%;
        height: 450px;
        object-fit: cover;
    }
    .serviceText {
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10%;
    }
    .serviceText h3 {
        font-size: 2.5rem;
    }
    .allServices {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
        width: 100%;
    }
    .theServices {
        max-width: 1300px;
        width: 100%;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
    .oneService {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        background-color: #eee;
        border-radius: 1rem;
        overflow: hidden;
    }
    .oneService img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .servText {
        padding: 5%;
    }
    .servText p {
        overflow: hidden;
        -webkit-line-clamp: 4;
        line-clamp: 4;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
    .servBtns {
        margin-top: 2rem;
    }
    .servBtns a {
        text-decoration: none;
        background-color: var(--themeColor);
        color: #fff;
        padding: 0.3rem 0.6rem;
        border-radius: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
    }
    .servBtns a:nth-child(1) {
        margin-right: 1rem;
    }
    .noService div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        background-color: #eee;
        border-radius: 1rem;
        overflow: hidden;
        height: 200px;
    }
















    @media (min-width: 1200px) {
        .theServices {
            grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
        }
    }
    @media (max-width: 600px) {
        .serviceText h3 {
            font-size: 2rem;
        }
    }
</style>