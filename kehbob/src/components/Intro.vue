<template>
  <div id="intro">

    <div id="wrap">
      <div class="title-box">
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
      </div>
      <div class="btn-box">
        <router-link :to="'main'">
          <button class="click-button">click!</button>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  created() {
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.2/web-animations-next.min.js')
      .then((data) => {
        console.log("web animation api 호출 :: ", data);
      })
      .catch(e => console.error(e));
  },
  methods: {

    loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          // 스크립트가 이미 로드된 경우
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
  },
}
</script>

<style>

</style>