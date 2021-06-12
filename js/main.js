const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue - TaladropoliS",
            count: 0
        }
    },
    methods: {
        contador(instruction = "add", limit = 1) {
            if (instruction === "dis") this.count -= limit;
            else this.count += limit;
        },
    }
})