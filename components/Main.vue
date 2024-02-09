/* eslint-disable */
<template>
  <section class="content main_content">

    <div class="hero">
      <h1>LinkGX - fast link indexing service in Google</h1>

    </div>
    <Transition name="fade" mode="out-in">

      <p>LinkGX is your reliable assistant for optimizing websites and
        increasing
        their visibility in Google search engine. It is a unique backlink indexing service that will help your projects
        reach their full potential and reach a new level in the web space. </p>

    </Transition>

    <div class="buttons">
      <a class="register_button" href="/auth/register">Register NOW!</a>
    </div>
  </section>
  
</template>

<style>
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

.hero~p {
  width: 50%;
  margin: 0px auto;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 12px;
  border-radius: 12px;
  border-left: 6px solid orange;
}

.hero > h1 {
  font-size: 36px;
  text-align: center;
  letter-spacing: 4px;
  margin: 0 auto;
  max-width: 50vw;
  padding-bottom: 10vh;
  padding-top: 10vh;
  font-weight: 700;
}

strong {
  font-weight: 800;
  font-size: 42px;
  letter-spacing: 2px;
}


@media only screen and (max-width: 960px) and (orientation: landscape) {
  .hero~p {
    width: 100%;
    padding: 8px 12px;
  }

  .hero > h1 {
    padding: 0px 12px;
    margin-top: 2vh;
    font-size: 18px;
    text-align: center;
    max-width: 100vw;
  }
}


@media only screen and (max-width: 768px) and (orientation: portrait) {
  .hero {
    padding: 0px;
  }

  .hero > h1 {
    padding: 0px 20px 0 12px;
    margin-top: 2vh;
    font-size: 24px;
    text-align: center;
    max-width: 100vw;
  }

  .hero~p {
    width: 90%;
  }

  br {
    display: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }

  .main_content {
   gap: 1.4vh;
  }
}


@media only screen and (max-width: 590px) and (orientation: landscape) {
  .hero > h1 {
      font-size: 18px;
      padding: 0px 12px;
  }

  .hero {
    padding: 0;
  }
}

@media only screen and (max-width: 320px) and (orientation: portrait) {
  .hero > h1 {
      font-size: 16px;
      padding: 0px 12px;
  }

  .hero {
    padding: 0;
  }

  .hero~p {
    width: 100%;
    padding: 8px 12px;
  }
}



</style>
