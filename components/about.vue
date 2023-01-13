<template>
    <div id="about">
        <h1>OVER ONS</h1>
        <div class="video-container">
            <iframe 
                class="video" 
                src="https://www.youtube.com/embed/6F-m6jEyv-8" 
                title="De Snelle Hap Tessenderlo" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<style lang="scss">
#about {
    text-align: center;
    padding: 0 1.5rem 1.5rem 1.5rem;
    @media only screen and (min-width: 768px) {
        padding-bottom: 3rem;
    }
}

.video {
    width: 100%;
    aspect-ratio: 16 / 9;
    max-width: 75rem;
    margin-top: 1.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>