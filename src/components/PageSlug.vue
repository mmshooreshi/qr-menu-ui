<template>
    <div>
        <!-- <h1>Page: {{ slug }}</h1> -->
        <PdfMenu :pdfFileName="slug" />
        <!-- Your page content here -->
    </div>
</template>

<script>
import PdfMenu from './PdfMenu.vue';

export default {
    props: ['slug'],
    components: {
        PdfMenu
    },
    // Add your component logic here if necessary
};
</script>