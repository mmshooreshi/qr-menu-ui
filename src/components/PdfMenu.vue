<template>
  <div>
    <vue-pdf-embed :source="pdfSource" />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  props: {
    pdfFileName: {
      type: String,
      required: true
    }
  },
  computed: {
    pdfSource() {
      return `/menus/${this.pdfFileName}.pdf`;
    }
  }
}
</script>