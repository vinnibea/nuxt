<script setup>
import { onMounted } from "vue";
const props = defineProps(['activeTab']);
const items = ref([]);
const content = [{
  title: 'Instant Indexing.',
  content: 'Thanks to its innovative approach to link indexing, your content will be indexed almost instantly.',

},

{
  title: 'Effective Results.',
  content: 'Increase your search visibility and achieve high positions in Google search results.',

},
{
  title: 'Simplicity and convenience.',
  content: 'With LinkGX you don\'t need to be an SEO expert, as our service is intuitive and accessible to everyone.'
},

{
  title: 'Security and Privacy.',
  content: 'We value the security of our clients\' site and ensure complete confidentiality of data.'
},
]
for (let i = 0; i < 4; i++) {
  items.value.push(content[i]);
}

let timer;

watch(() => props.activeTab, (newVal) => {
  clearTimeout(timer);
  items.value = [];
  if (newVal === 1) {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        items.value.push(content[i]);
      }, i * 700)
    }
  }
})

onUnmounted(() => {
  clearTimeout(timer);
  items.value = [];
})
</script>

<template>
  <section class="content why_content-about-us">

    <h2>Why Us?</h2>
    <h3>LinkGX stands out due to a series of unique characteristics and beneficial features:</h3>


    <TransitionGroup name="list" tag="div" class="why_list why_list-about-us">
      <article v-for="item in items" class="why_list_item-about-us" :key="item.title">
        <h4>{{ item.title }}</h4>
        <p>{{ item.content }}</p>
      </article>
    </TransitionGroup>
  </section>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(750px);
}

.why_content-about-us>h2 {
  font-weight: 900;
  text-align: center;
  margin: 0px auto;
  padding: 0;
}

.why_content-about-us>h3 {
  font-weight: 500;
  text-align: center;
  margin: 0px auto;
  padding: 0;
}

h4,
strong {
  font-weight: 900;
}

.why_content-about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
}

.why_list {
  gap: 8px;
  list-style-type: disc;
  list-style-position: inside;
  display: flex;
  justify-items: center;
  padding-bottom: 10px;
  width: 90vw;
  margin: 0px auto;
}

.why_list-about-us {
  padding-top: 96px;
  flex-direction: row;
  align-items: stretch;
}

.why_list_item {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px 12px 40px;
  border-left: 6px solid orange;
  width: 100%;
}

.why_list_item-about-us {
  transition: all 0.9s ease;
  border-radius: 12px;
  padding: 20px 12px 40px;
  border-left: 6px solid orange;
  background: rgba(0, 0, 0, 0.3);
  max-width: 24%;
}

.additional_strong {
  display: block;
  font-size: 16px;
  clear: right;
}


@media only screen and (max-width: 960px) and (orientation: landscape) {
  .why_list {
    flex-direction: row;
    margin: 0px;
    gap: 6px;
    width: 100vw;
    padding-top: 0px;
  }

  .why_list_item-about-us {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    padding: 2px;
    border-left: 4px solid orange;
    width: 100%;
  }

  .why_list-about-us {
    padding-top: 0px;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }

  .why_content-about-us>h2,
  .why_content-about-us>h3 {
    font-size: 14px;
    text-align: center;
    margin: 0px auto;
  }

  .why_content-about-us>h3 {
    font-size: 12px;
    padding-bottom: 0px;
  }

  .why_list_item-about-us > h4 {
    font-size: 14px;
  }

  .why_list_item-about-us p {
    font-size: 12px;
  } 
}

@media only screen and (max-width: 768px) and (orientation: portrait) {
  .why_list {
    flex-direction: column;
    margin: 0px;
    align-items: stretch;
    justify-content: center;
    gap: 6px;
    width: 95vw;
    padding-top: 4px;
  }

  .why_list_item {
    padding: 0px 8px 8px;
    font-size: 14px;
    width: 100%;
  }

  .why_content-about-us>h2,
  .why_content-about-us>h3 {
    font-size: 16px;
    text-align: center;
    margin: 0px auto;
  }

  .why_content-about-us>h3 {
    font-size: 14px;
    padding-bottom: 8px;
  }

  .why_content>h3 {
    font-size: 12px;
  }

  .why_list_item-about-us > p {
    padding: 0 12px 8px;
    font-size: 14px;
  }

  .why_list_item-about-us {
    padding: 4px 8px 0;
    max-width: 100%;
  }

  h3,
  strong {
    font-weight: 700;
    padding-bottom: 4px;
  }

  h4 {
    font-weight: 700;
    padding: 0;
  }

  .why_list-about-us {
    padding-top: 0;
  }

  
  
}

@media screen and (max-width: 320px) and (orientation: portrait){
  .why_list_item-about-us {
    padding: 2px 4px 0;
    max-width: 100%;
  }

  .why_content-about-us>h2,
  .why_content-about-us>h3 {
    font-size: 14px;
    text-align: center;
    margin: 0px auto;
  }

  .why_content-about-us>h3 {
    font-size: 12px;
  }

  h3,
  strong {
    font-weight: 500;
    padding-bottom: 2px;
  }

  .why_list_item-about-us>p {
    padding: 0 4px 0px;
    font-size: 14px;
  }

  .why_content-about-us>h3 {
    font-size: 14px;
    padding-bottom: 0px;
  }
}

</style>
