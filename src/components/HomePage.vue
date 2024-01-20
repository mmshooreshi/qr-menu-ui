<template>
    <div class="home-container">
        <h1>Embed as a service solution for your menus</h1>
        <div class="pdf-list">
            <button v-for="file in pdfFiles" :key="file" class="pdf-button" @click="goToPdfPage( file )">
                {{ file }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            // Here you hardcode your PDF file names without the .pdf extension
            pdfFiles: ["hoormazd", "Your menu ;D"],
        };
    },
    methods: {
        goToPdfPage(slug) {
            // Push the route to open the specific PDF
            this.$router.push({ name: "PageSlug", params: { slug } });
        },
    },
};
</script>

<style>
.home-container {
    margin-top: 10vh;
    text-align: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
}

.pdf-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.pdf-button {
    padding: 10px 20px;
    background-color: #00000053;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 36px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
}

.pdf-button:hover {
    background-color: #2980b9;
}
</style>