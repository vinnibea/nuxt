<template>
  <div class="content">
   
   <div v-if="fade" class="hero">
    <h1 class="main_title" ><strong>LinkGX</strong> - fast <br />link indexing <br /> service in <br />Google
    </h1>
    
   </div>
    <Transition name="fade" mode="out-in">

      <p v-if="fade" class="content_p"><strong>LinkGX</strong> is your reliable assistant for optimizing websites and
        increasing
        their visibility in Google search engine. It is a unique backlink indexing service that will help your projects
        reach their full potential and reach a new level in the web space. </p>

    </Transition>

    <div class="buttons">
      <a v-if="fade" class="register_button" href="/auth/register">Register NOW!</a>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const fade = ref(false);

onMounted(() => {
  setTimeout(() => {
    fade.value = true;
  }, 700)
})
</script>
<style scoped>

.buttons {
  padding: 12px 4px;
  display: flex;
  justify-content: center;
}

.hero {
  padding: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a {
  color: white;
  cursor: pointer;
  z-index: 10;
}

.register_button {
  text-decoration: none;
  padding: 4px 12px;
  border: 1px solid rgb(190, 190, 190);
  transition: all 0.3s ease;
  align-self: center;
  font-weight: 600;
  align-self: center;
  margin: 0 auto;
}

.register_button:hover {
  background-color: grey;
  color: black;
  color: rgb(255, 178, 70);
  border: 1px solid rgb(190, 190, 190);
  margin-bottom: 2px;
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

.main_title {
  font-size: 36px;
  text-align: right;
  letter-spacing: 4px;
  align-self: flex-end;
  padding-left: 200px;
}

strong {
  font-weight: 800;
  font-size: 42px;
  letter-spacing: 2px;
}

@media screen and (max-width: 768px) {
  .hero {
    padding: 0px;
  }
  .main_title {
    padding: 20px 40px 0 40px;
    margin-top: 20px;
    font-size: 24px;
    text-align: center;
  }

  .content_p {
    width: 90%;
  }

  br {
    display: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}</style>
