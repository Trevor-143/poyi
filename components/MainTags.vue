<template>
    <div class="assurance">
        <div class="assure" v-for="item in miniTags" :key="item.id">
            <Icon name="tabler:discount-check-filled" color="#1c0a54" />
            <p>{{ item.name }}</p>
        </div>
    </div>
</template>


<script setup>

const miniTags = [
    {
        id: 1,
        name:"State of the art equipments and tools."
    },
    {
        id: 2,
        name:"Get the most value for your money."
    },
    {
        id: 3,
        name:"Get in touch easily with mobile or email."
    },
    {
        id: 4,
        name:"Fast delivery of services guarunteed."
    },
    {
        id: 5,
        name:"A collection of services available."
    },
    {
        id: 6,
        name:"Always by your side waiting for your call"
    },
]
// console.log(miniTags)

</script>


<style>
    .assurance {
        /* background-color: aqua; */
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        margin-top: 2rem;
    }
    .assure {
        padding: 7%;
        background-color: #eee;
        color: #000;
        border-radius: 1rem;
        display: flex;
        align-items: center;
    }
    .assure svg {
        width: 60px;
        height: auto;
        margin-right: 1rem;
    }
    .assure p {
        font-size: 0.8rem;
        font-weight: 600;
    }
</style>