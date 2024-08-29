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
    const aaa = await (await fetch("/api/HttpTriggerTest?name=test")).json();
    const text = await fetch("/api/HttpTriggerTest?name=test");
    this.message = text;
  }
};
</script>