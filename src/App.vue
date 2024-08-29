<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: ""
    };
  },
  async mounted() {
    try {
      //const aaa = await (await fetch("/api/HttpTriggerTest?name=test")).json();
      const res = await fetch("/api/HttpTriggerTest?name=test");
      const data = await res.json();
      const text = await res.text();
      this.message = res.status + "-" + res.statusText;
      this.message= text;
    }
   catch (err) {
        this.message = err.message;
      }
  }
};
</script>