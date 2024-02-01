<script setup>


const activeTab = ref(0);
const dotSize = ref(80);
const transitionDir = ref('fade');

const Payment = resolveComponent('Payment');
const Main = resolveComponent('Main');
const Questions = resolveComponent('Questions');
const WhyUs = resolveComponent('WhyUs');

const components = [Main, Questions, WhyUs, Payment];
const nextTab = (i) => {
  activeTab.value = i - 1;
}

watch(activeTab, (newX, oldX) => {
  if(newX > oldX) {
    
    transitionDir.value = 'fade';
    return;
  } 

  transitionDir.value = 'fadedown';
})

onMounted(() => {
  dotSize.value = window.screen.width < 768 ? 30 : 80;
  document.body.addEventListener('wheel', (event) => {
  
   if(event.deltaY > 0 && activeTab.value < 3) {
    activeTab.value++;
   } else if(event.deltaY < 0 && activeTab.value > 0) {
    activeTab.value--;
   }
  });
})
</script>

<template>
  <div class="container">
    <header class="main_header">
      <h1><span class="main_logo">LinkGX</span>
        <span class="main_logo_dot">.</span>
      </h1>
      <a class="login_button" href="/auth/login">LogIn<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 50 50">
        <path  fill="#FFF" d="M 25 3 C 18.364481 3 13 8.3644809 13 15 L 13 20 L 9 20 C 7.3545455 20 6 21.354545 6 23 L 6 47 C 6 48.645455 7.3545455 50 9 50 L 41 50 C 42.645455 50 44 48.645455 44 47 L 44 23 C 44 21.354545 42.645455 20 41 20 L 37 20 L 37 15 C 37 8.3644809 31.635519 3 25 3 z M 25 5 C 30.564481 5 35 9.4355191 35 15 L 35 20 L 15 20 L 15 15 C 15 9.4355191 19.435519 5 25 5 z M 9 22 L 13.832031 22 A 1.0001 1.0001 0 0 0 14.158203 22 L 35.832031 22 A 1.0001 1.0001 0 0 0 36.158203 22 L 41 22 C 41.554545 22 42 22.445455 42 23 L 42 47 C 42 47.554545 41.554545 48 41 48 L 9 48 C 8.4454545 48 8 47.554545 8 47 L 8 23 C 8 22.445455 8.4454545 22 9 22 z M 25 30 C 23.3 30 22 31.3 22 33 C 22 33.9 22.4 34.699219 23 35.199219 L 23 38 C 23 39.1 23.9 40 25 40 C 26.1 40 27 39.1 27 38 L 27 35.199219 C 27.6 34.699219 28 33.9 28 33 C 28 31.3 26.7 30 25 30 z"></path>
        </svg></a>
    </header>
    <nav>
      <ul class="list">
        <li class="list_item" @click="nextTab(i)" v-for="i in 4" :key="i"
          :style="{ 'list-style-type': i - 1 === activeTab ? 'disc' : 'circle', }"></li>
      </ul>
    </nav>
    <main class="main">
       <Transition :name="transitionDir">
  <component :is="components[activeTab]"></component>
</Transition>
      
      <div class="absoulte_rounded" v-for="i in 25" :key="i"
        :style="{ width: i * 2 * dotSize + 'px', height: i * dotSize * 2 + 'px', left: 50 - i * 5 + '%', border: 1 * i + 'px dotted grey',
        top: 50 - i * 5 + '%'}" >

      </div>
    </main>

    <div class="icon_list">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
    <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path>
    </svg>
    </div>
  </div>
</template>

<style>
@import url('./assets/main.css');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap');
.fade-enter-active,
.fade-leave-active {
  transform: translateY(-100%);
  transition: all 0.6s ease;
  opacity: 0;
}


.fade-enter-from {
  transform: translateY(-100%);
  transition: all 1s ease;
}
.fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.fadedown-enter-active,
.fadedown-leave-active {
  transform: translateY(100%);
  transition: all 0.6s ease;
  opacity: 0;

}

.fadedown-enter-from {
  transform: translateY(100%);
  transition: all 1s ease;
}
.fadedown-leave-to {
  transform: translateY(100%);
  opacity: 0;

}
* {
  scrollbar-color: rgba(0, 0, 0, 0);
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  color: white;
  overflow: hidden;
}
.main {
  padding-bottom: 12px;
  align-items: center;
}
nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -8px;
  z-index: 10;
}

.icon_list {
  display: flex;
  position: absolute;
  right: 10px;
  bottom: 10px;
  gap: 16px;
  justify-content: flex-end;
  padding: 24px;
}

.icon {
  width: 24px;
  opacity: 0.5;
  transition: all 0.3s ease;
  cursor: pointer;
}

.icon:hover {
  opacity: 1;
  transform: scale(1.2);
}

.list {
  list-style-type: circle;
  list-style-position: inside;
  z-index: 3;
}

.list_item {
  font-size: 24px;
}

.list_item:not(.list-item--active):hover {
  cursor: pointer;
  color: orange;
}

.list-item--active {
  list-style-type: disc;
}

.container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(349deg, rgba(94, 93, 93, 1) 0%, rgba(80, 80, 80, 1) 28%, rgba(0, 0, 0, 1) 100%);
}

.main_logo {
  font-size: 38px;
  font-weight: 900;
  color: #dfdfdf;
  opacity: 0.8;
  transition: all 0.3s ease;
  cursor: pointer;
}

.main_logo:hover {
  opacity: 1;
}

.main_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.main_logo_dot {
  font-size: 48px;
  color: rgb(251, 158, 28);
  font-weight: 700;
}

.login_button {
  display: flex;
  text-decoration: none;
  padding: 8px 12px;
  border: 1px solid rgb(190, 190, 190);
  transition: all 0.3s ease;
  z-index: 10;
  align-items: flex-start;
  gap: 2px;
}

.login_button:hover {
  background-color: grey;
  color: rgb(255, 178, 70);
  border: 1px solid rgb(190, 190, 190);
}

.absoulte_rounded {
  position: absolute;
  border-radius: 50%;
  animation: forward 80s infinite ease-in;
  transition: all 0.6s ease;
  transform: translateY(100%);
  z-index: -0;
  opacity: 0.2;
  max-height: 100vh;
  max-width: 80vw;
}

.content_p {
  width: 50%;
  margin: 0px auto;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 12px;
  border-radius: 12px;
  border-left: 6px solid orange;
}

.content_p strong {
  font-size: 1rem;
}

@keyframes forward {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes backward {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@media screen and (max-width: 768px) {
.container {
    overflow: hidden;
  }
  .main_title {
    margin: 0 auto 0px;
    padding: 0px;
    text-align: center;
  }

  br {
    display: none;
  }

  .content_p {
    width: 80%;
    margin-bottom: 80px;
  }

  nav {
    left: -36px;
  }

  .icon_list {
    right: 10px;
    bottom: 0px;
    gap: 16px;
    justify-content: flex-end;
    padding: 8px;
  }

  .main_logo_dot {
    font-size: 28px;
    color: rgb(251, 158, 28);
    font-weight: 700;
  }

  .main_header {

    padding: 0 8px;
  }

  .main_logo {
    font-size: 24px;
    font-weight: 900;
    color: rgb(223, 223, 223);
    opacity: 0.8;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .login_button {
    text-decoration: none;
    padding: 4px 8px;
    border: 1px solid rgb(190, 190, 190);
    transition: all 0.3s ease;
    z-index: 10;
    font-size: 14px;
  }
}</style>

