/* eslint-disable */
<script setup>
import { onMounted } from "vue";
const items = ref([]);
const props = defineProps(['activeTab']);
const content = [{
  title: 'We provide services without need to subscribe.',
},

{
  title: 'We accept payments in cryptocurrency.',
},
{
  title: 'You get what you pay for.',
},
]

for (let i = 0; i < 3; i++) {
      items.value.push(content[i])
  }

  
watch(() => props.activeTab, (newVal) => {
  items.value = [];
  if(newVal === 3) {
    for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      items.value.push(content[i]);
    }, i * 500)
  }
  }
})



</script>

<template>
  <section class="content why_content-about-us content_payment">
    
    <h2>Payment and Tariffs</h2>
    <TransitionGroup name="list" tag="div" class="why_list why_list-payment" >
      <article v-for="item in items" class="payment_item" :key="item.title">
        <p>{{item.title}}</p>
      </article>
    </TransitionGroup>

    <Transition>
      <div v-show="items.length === 3" class="payment-bottom">
        <div class="title-orange">Only 0.05<small>$</small> for indexing one link.</div>
        <a class="register_button" href="/auth/register">Register NOW!</a>
      </div>
    </Transition>
    
  </section>
</template>

<style>

.content_payment {
  display: flex;
  gap: 24px;
}
.payment_item {
  padding: 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border-left: 6px solid orange;
  width: 100%;
  transition: all 0.5s ease;
}
.why_list-payment {
  list-style-type: none;
  padding-bottom: 24px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.payment-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
}
a { position: relative;
    color: white;
    cursor: pointer;
    z-index: 10;
}
small {
    font-size: 16px;
    font-weight: 900;
    color: orange;
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
.payment-bottom > div {
    color: orange;
    font-size: 32px;
    letter-spacing: 4px;
    text-align: center;
    margin: 0;
    font-weight: 900;
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

@media only screen and (max-width: 968px) and (orientation: portrait) {
    .why_list_item {
        z-index: 3;
        margin: 0 auto;
      }
   .title-orange {
    padding: 12px 24px;
   }
    .payment-bottom > div {
        font-weight: 900;
        font-size: 18px;
        letter-spacing: 2px;
    }

    .payment-bottom {
      padding-top: 120px;
    }

    .why_list-faq {
        padding-top: 40px;
        padding-bottom: 40px;
      }
  
    .register_button {
       margin-top: 12px;
      }


      .payment_item {
        padding: 4px 8px;
      }
      
      .payment_item > p {
        font-size: 14px;
      }
    }

    @media only screen and (max-width: 968px ) and (orientation: landscape) {
      .payment_item {
        padding: 4px;
      }

      .payment-bottom {
        padding-top: 0;
      }

      .payment_item > p {
        font-size: 14px;
      }

      div.why_list-payment {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      .payment-bottom > div {
        font-weight: 900;
        font-size: 18px;
        letter-spacing: 2px;
    }

    .content_payment {
      gap: 4px;
    }

    }
</style>