<template>
    <div class="intro-container" v-if="showIntro" @click="startTyping">
      <div class="intro-header">Welcome to Hydra</div>
      <div class="intro-content">
        <h2 ref="typingText" class="typing">You can simulate the most common flows in the system ...</h2>
      </div>
    </div>
  </template>
  

  <script>
  import typingSoundSrc from '../assets/typing-sound.mp3'; // Import the audio file
  
  export default {
    data() {
      return {
        showIntro: true,
        typingSound: new Audio(typingSoundSrc),
        typingStarted: true
      };
    },
    methods: {
      startTyping() {
        if (!this.typingStarted) {
          this.typingStarted = true;
          this.typingSound.addEventListener('canplaythrough', () => {
            this.playTypingSound(this.$refs.typingText, 3); // Play typing sound for the text
          });
          this.playTypingSound(this.$refs.typingText, 3);
          setTimeout(() => {
            this.showIntro = false;
          }, 7000); // Adjust timeout as needed
        }
      },
      playTypingSound(element, duration) {
        const interval = duration * 1000 / element.textContent.length;
  
        let index = 0;
        const typingInterval = setInterval(() => {
          if (index < element.textContent.length) {
            this.typingSound.currentTime = 0; // Reset sound to the beginning
            this.typingSound.play().catch((error) => console.error('Audio play error:', error)); // Play the sound
            index++;
          } else {
            clearInterval(typingInterval);
          }
        }, interval);
      }
    }
  };
  </script>
  
  
  <style scoped>
.intro-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 1s ease-in-out;
  font-family: fantasy;
  cursor: pointer;
}

.intro-header {
  position: absolute;
  top: 20px;
  font-size: 3rem;
  color: rgb(255, 255, 255);
  text-align: center;
}

.intro-content {
  text-align: center;
  color: #ff851b;
}

.typing {
  font-size: 2rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #ff851b; /* The cursor */
  width: 0;
  animation: typing 2s steps(80, end);
  animation-fill-mode: forwards;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
