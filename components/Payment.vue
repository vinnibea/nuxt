<script setup>
import { ref } from 'vue';


</script>

<template>
  <div class="content why_content">
    
    <h1 class="main_title main_title-extra"><strong>Payment and Tariffs</strong></h1>
    <ul class="why_list why_list-faq">
    
      <div class="why_list_item">

        <li><strong>We</strong>  provide services without need to subscribe.</li>
        
      </div>
      <div class="why_list_item">
        <li><strong>We</strong>  accept payments in cryptocurrency.</li>
        
      </div>

      <div class="why_list_item">

        <li><strong>You</strong> get what you pay for.</li>
        
      </div>
    </ul>
     <h3 class="title-orange">Only 0.05<small>$</small> for indexing one link.</h3>
     <h3 class="title-bonus"><strong>Bonus</strong> for new users - 10 free indexings *</h3>
     <a class="register_button" href="/register">Register NOW!</a>
     <h4 class="title-bonus title-bonus-decr">*<a href='/auth/register'>register</a> and write your login in our service to redeem a bonus</h4>
  </div>
</template>

<style scoped>
a { position: relative;
    color: white;
    cursor: pointer;
    z-index: 10;
}
small {
    font-size: 16px;
    font-weight: 900;
}
.register_button {
    text-decoration: none;
    padding: 8px 12px;
    border: 1px solid rgb(190, 190, 190);
    transition: all 0.3s ease;
    z-index: 10;
    align-self: center;
    margin-top: 0px;
    font-weight: 600;
  }
  
  .register_button:hover {
    background-color: grey;
    color: black;
    color: rgb(255, 178, 70);
    border: 1px solid rgb(190, 190, 190);
  }
.title-orange {
    color: orange;
    font-size: 32px;
    letter-spacing: 4px;
    text-align: center;
    margin: 0;
}

.title-bonus-decr {
    padding-top: 2vh;
    padding-left: 70vw;
    font-size: 14px;
}

.title-bonus {
    font-weight: 300;
    margin: 20px auto;
}
h3 {
  padding: 2px;
  margin: 0;
}
.main_title {
  margin: 0;
  padding: 0;
}

.why_list, .why_list-faq {
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 90vw;
  list-style-type: none;
  padding: 0;
}

.why_list_item {
  min-width: 100%;
  border-left: 6px solid orange;
  z-index: 3;
  padding: 8px 20px 4px 12px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
    .why_list_item {
        z-index: 3;
        margin: 0 auto;
      }
    .title-orange {
        font-size: 18px;
        letter-spacing: 2px;
    }

    .why_list-faq {
        padding-top: 40px;
        padding-bottom: 25dvh;
      }
      .title-bonus {
        font-size: 16px;
        margin: 0 auto;
    }
      .title-bonus-decr {
        padding-top: 1vh;
        padding-left: 2vw;
        font-size: 12px;
    }
    .register_button {
       margin-top: 12px;
      }
   
    }

    @media screen and (max-width: 1200px) {

        .title-bonus {
            font-weight: 300;
            margin: 0 auto;
        }
    }

</style>