<template>
    <header class="header relative bg flex overflow-x">
        <div
            class="header-box container mx-auto px-4 flex flex-col relative lg:flex-row lg:items-center md:justify-between"
        >
            <div
                class="relative flex flex-col items-center text-white text-center w-full z-20 lg:text-left lg:items-start"
            >
                <p
                    class="mb-4 font-text text-sm max-w-prose uppercase tracking-widest"
                >
                    Stowarzyszenie dla ludzi
                </p>
                <h1
                    class="font-primary font-bold text-4xl leading-snug sm:text-5xl lg:text-5xl xl:text-6xl"
                >
                    Realizujemy wyłącznie
                    <span class="block mt-4 mb-8">dobre dzieła!</span>
                </h1>
                <button
                    class="button px-12 py-4 bg-primary text-black text-xl font-primary font-medium hover:bg-secondary hover:text-white"
                >
                    Poznaj nas teraz
                </button>
            </div>
            <img
                src="../assets/check.png"
                class="header-img absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 sm:-bottom-4 lg:transform-none lg:static lg:max-h-96 xl:max-h-full"
            />
        </div>
        <div
            class="w-full h-full z-10 absolute pointer-events-none overflow-hidden"
        >
            <img
                src="../assets/check-outline.svg"
                class="check-outline absolute bottom-32 left-1/2 transform -translate-x-1/2 opacity-40 lg:-bottom-12"
            />
        </div>
    </header>
    <div class="h-screen"></div>
</template>

<script>
</script>

<style scoped>
.bg {
    background-image: url(../assets/bg.jpg);
}

.header {
    min-height: 640px;
    height: 100vh;
}

.header::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-image: linear-gradient(
            to bottom,
            var(--clr-black) 20%,
            var(--clr-black-75)
        ),
        url(../assets/check-fill.svg);
    background-size: 16px;
}

.header-box {
    margin-top: 8vh;
}

.check-outline {
    width: 200%;
    max-width: unset;
}

@media screen and (min-width: 640px) {
    .check-outline {
        width: 100vw;
    }
}
</style>
