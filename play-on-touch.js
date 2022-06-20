/* global AFRAME */
AFRAME.registerComponent('play-on-touch', {
    schema: { type: 'selector' },
    init: function () {
        this.data.addEventListener('touchstart', () => {
            const videoEl = this.el.getAttribute('material').src;
            if (!videoEl) { return; }
            async function playVideo() {
                try {
                    await videoEl.play();
                } catch(err) {
                    console.log(err);
                }
            }
            playVideo();
        });
    },
});
