<template>
    <div>
        <!-- button for scrolling to top -->
        <button class="toTop" id="toTop" type="button" @click="goUp" >
              <Icon name="line-md:upload-outline-loop" color="white"/>
        </button>
    </div>
</template>

<script setup >

// activate litsener
onMounted(() => {
  window.addEventListener('scroll', scrolledDown)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrolledDown)
})

// show scroll to top button
const scrolledDown = () => {
  const goUpBtn = document.getElementById('toTop')

  if(window.scrollY > 100) {
    goUpBtn.classList.add('show')
  } else {
    goUpBtn.classList.remove('show')
  }
}

// scroll to top button
const goUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>

<style>
.toTop {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background-color: var(--themeColor);
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1rem;
    border: none;
    cursor: pointer;
    display: none;
  }
  .toTop svg {
    font-size: 2rem;
  }
  .show {
    display: block;
    animation: normal bringUp 1s;
  }
  @keyframes bringUp {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>