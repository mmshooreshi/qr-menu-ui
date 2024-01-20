<template>
  <div class="pdf-container">
    <!-- Loading spinner -->
    <div v-if="loading" class="loader"></div>

    <!-- Error message -->
    <div v-if="loadingError" class="error-message">
      Failed to load the PDF. Please try again later.
    </div>

    <!-- PDF Embed -->
    <div class="allblack" v-show="!pdfLoaded">sala</div>
    <transition name="fade">
      <vue-pdf-embed :source="pdfSource" @loaded="handleLoadSuccess" @loading-failed="handleLoadError" key="pdf-embed" />
    </transition>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed';

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
  data() {
    return {
      loading: true,
      pdfLoaded: false, // Track if the PDF is loaded
      loadingError: false,
    };
  },
  computed: {
    pdfSource() {
      return `/menus/${this.pdfFileName}.pdf`;
    }
  },
  methods: {
    handleLoadSuccess() {
      setTimeout(() => {
        this.loading = false;
        this.pdfLoaded = true; // Trigger the visibility of the PDF embed
      }, 500); // Delay visibility by 500ms
    },
    handleLoadError(error) {
      this.loading = false;
      this.loadingError = true;
      console.error('PDF loading error: ', error);
    }
  }
};
</script>

<style scoped>
.allblack {
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
  background-size: 10px 10px;

}

.pdf-container {
  position: relative;
  transition: all;
  transition-duration: 1s;
}

.loader {
  z-index: 11;
  border: 20px solid #39393947;
  /* Light gray border */
  border-top: 20px solid #3a3a3ad6;
  /* Blue border for the top */
  background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
  background-size: 10px 10px;

  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s ease-in-out infinite;
  position: absolute;
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
}


@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(720deg);
  }
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}


.error-message {
  color: red;
  /* Additional styling as needed */
}
</style>