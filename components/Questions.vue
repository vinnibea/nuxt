<script setup>
import { onMounted, onUnmounted } from 'vue';

const props = defineProps(['activeTab'])
const currentQ = ref(null);
const openQ = (i) => {
  console.log(i)
  if (currentQ.value === i) {
    currentQ.value = null; return;
  }
  currentQ.value = i;

}

let items = ref([]);
const answers = {
  1: {
    q: 'Who can use this indexing service?',
    a: 'LinkGX is an ideal and priceless Link Crawling and Indexing best for the expert or to the starter website admins. Any individual who possesses or deals with a site can exploit our Unique services to get his pages or backlinks indexed. With the capacity to drive Search Engine bots and spiders to crawl and index your backlinks, LinkGX is an exceptional incentive for anybody hoping to work on their website ranking. Links Indexer is a great addition to SEO and LinkBuilding companies or individuals who can provide it as extra bonus to their clients!'
  },
  2: {
    q: 'What sites do you allow in your service?',
    a: 'We allow all legal sites and non blacklisted websites. Our system will automatically delete blacklisted websites from campaigns.'
  },
  3: {
    q: 'What type of sites this service is good for?',
    a: 'Our service works fine on any kind of websites, pages and backlinks. As long as it is a published page online, it will work. Also make sure the sites meta tag is set to indexing and do not block bots and crawlers. If You want Google to find your links just submit them to Us!'
  },
  4: {
    q: 'What type of payment do you accept?',
    a: 'Cryptocurrency is our primary payment processor. You can purchase LinkGX limits using your cryptocurrency balance, or pay directly with your credit card - Visa, Mastercard, American Express, Discover, E-check. If you are unable to pay by any of the above methods, or you just want to pay in a different way, just contact us and let us know how you want to pay!'
  }
}

for (let i = 1; i <= 4; i++) {
      items.value.push(answers[String(i)]);
  }
let timer;
watch(() => props.activeTab, (newVal) => {
  clearTimeout(timer);
  items.value = [];
  if(newVal === 2) {

    for (let i = 1; i <= 4; i++) {
   timer = setTimeout(() => {
      items.value.push(answers[String(i)]);
    }, i * 300)
  }
  }
})

onUnmounted (() => {
  clearTimeout(timer);
  items.value = [];
})
 
</script>

<template>
  <section class="content why_content-about-us">
    
    <h2>FAQ</h2>
    <TransitionGroup name="faq" tag="div" class="why_list why_list-faq">

      <article v-for="(item, i) in items" class="why_list_item-faq" :key="item.a"  @click="openQ(i)">
        <h4>{{ item.q }}</h4>
        <p :style="{'max-height': currentQ === i ? 'fit-content' : '0',
        'opacity': currentQ === i ? '1' : '0'
      }">{{ item.a }} </p>
      </article>
    </TransitionGroup>
  </section>
</template>

<style>
article {
  box-shadow: 1px 2px 5px rgba(20, 20, 20, 0.8);
}
.why_list_item-faq {
  pointer-events: all;
  position: relative;
  z-index: 999;
  padding: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 12px 12px 0px;
  border-left: 6px solid orange;
  width: 100%;
  transition: all 0.5s ease;
}
.why_list_item-faq > h4 {
  font-weight: 700;
  cursor: pointer;
  color: rgb(217, 217, 217);
  transition: all 0.3s ease;
  padding: 4px;
}

.why_list_item-faq > h4:hover {
  color: rgb(255, 255, 255);
}
.why_list_item-faq p {
  pointer-events: none;
  padding: 0 2px 8px 8px;
}

.faq-enter-active,
.faq-leave-active {
  transition: all 0.7s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}

.why_list-faq {
  flex-direction: column;
  align-items: stretch;
}


@media only screen and (max-width: 768px) and (orientation: portrait) {
  .why_list-faq {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

  }

  .why_list_item {
    min-width: 100%;
    border-left: 6px solid orange;
    z-index: 3;
    padding: 2px 16px;
    font-size: 12px;
  }

  .why_list_item-faq {
    padding: 4px;
  }

  .why_list_item-faq > p {
    line-height: 1.3rem;
    font-size: 12px;
  }

  
}

@media only screen and (max-width: 968px) and (orientation: landscape) {
  div.why_list-faq {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 2px;
  }
  .why_list_item-faq > h4 {
    padding: 0;
    font-size: 14px;
  }
  .why_list_item-faq p {
    pointer-events: none;
    padding: 0 4px;
    font-size: 12px;
  }

  .why_list_item-faq {
    padding: 2px 4px;
  }

  .why_list {
    padding-top: 0;
  }
}


@media  only screen and (max-width: 320px) {
  .why_list_item-faq p {
    pointer-events: none;
    padding: 0 4px;
  }

  .why_list_item-faq > h4 {
    font-weight: 600;
    padding: 2px;
    font-size: 14px;
  }
  .why_list_item-faq {
    padding: 2px;
  }
}
</style>
