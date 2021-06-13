<template>
    <section
        id="about-us"
        class="container mx-auto pt-32 px-8 text-black grid grid-cols-8 gap-x-8"
    >
        <h2
            class="decorated col-span-full self-start mb-5 2xl:mb-0 2xl:col-span-3 2xl:sticky 2xl:top-16"
        >
            Poznaj stowarzyszenie
        </h2>
        <div class="col-span-full lg:col-span-5">
            <h3>Dlaczego istniejemy?</h3>
            <p class="opacity-80">
                Przypadków nie ma… my także nie spotkaliśmy się na rok przed
                założeniem Stowarzyszenia przez przypadek. Od przyjacielskich
                relacji, które nas łączyły, chcieliśmy zabrać się do dzieła… i
                tak zrodził się pomysł, którego wynikiem mają być DOBRE DZIEŁA,
                nie z nazwy, ale w konkrecie. Wierzymy, że razem możemy więcej…
                że wyjdzie z tego więcej Dobra!
            </p>
            <h3>Nasz cel</h3>
            <p class="opacity-80">
                Szybko okazało się, że możemy zjednoczyć nasze talenty
                (zwłaszcza informatyczne) i siły, a przede wszystkim nasz zapał,
                by promować dobro. Przestrzeń, w której chcemy działać to
                szeroko pojętą pomoc osobom uzależnionym w ich odzyskiwaniu
                wolności i godności.
            </p>
            <h3>Jak realizujemy nasz cel?</h3>
            <ul>
                <li>
                    tworzenie narzędzi multimedialnych, internetowych i
                    aplikacji mobilnych wspierających integralny rozwój
                    człowieka oraz dających narzędzia do pokonywanie problemów
                    życiowych
                </li>
                <li>
                    organizowanie i prowadzenie konferencji, seminariów, szkoleń
                    i wykładów, warsztatów, prelekcji
                </li>
                <li>działalność wydawnicza,</li>
                <li>
                    finansowe, rzeczowe, informacyjne wspieranie rodzin i
                    jednostek w trudnej sytuacji życiowej,
                </li>
                <li>udzielanie wsparcia terapeutycznego,</li>
                <li>prowadzenie psychoterapii,</li>
                <li>
                    profilaktykę, aktywizację i resocjalizację w zakresie
                    uzależnień,
                </li>
                <li>inne działania służące realizacji celów statutowych</li>
            </ul>
        </div>
    </section>
    <section class="bg mt-16 lg:mt-32 bg-black">
        <div class="container mx-auto px-8 py-16 lg:py-48 text-white">
            <h2 class="mb-12 lg:mb-36">Nasze wartości</h2>
            <div class="grid grid-cols-3 gap-16">
                <div class="value mx-auto col-span-full lg:col-span-1">
                    <h3 class="text-underline">Nasza siła to nasza wiara</h3>
                    <p class="mt-12 opacity-80">
                        Opieramy się na chrześcijańskiej wizji niezbywalnej
                        godności człowieka, oraz szeregu wartości
                        prospołecznych, takich jak prawda, szacunek, wolność,
                        przyjaźń.
                    </p>
                </div>
                <div class="value mx-auto col-span-full lg:col-span-1">
                    <h3 class="text-underline">
                        Pomaganie w dążeniu do wolności
                    </h3>
                    <p class="mt-12 opacity-80">
                        Pierwszym projektem Stowarzyszenia jest aplikacja
                        mobilna wspierająca osoby uzależnione od treści dla
                        dorosłych. Program oferuje narzędzia do zmagania się z
                        nałogiem oraz wspiera rozwój duchowy. Szczegóły już
                        wkrótce!
                    </p>
                </div>
                <div class="value mx-auto col-span-full lg:col-span-1">
                    <h3 class="text-underline">Człowiek jest ważny</h3>
                    <p class="mt-12 opacity-80">
                        Wierzymy, że pomoc społeczna realizowana przez
                        Stowarzyszenie umożliwi osobom i rodzinom
                        przezwyciężenie trudnych sytuacji życiowych, których nie
                        są one w stanie pokonać wykorzystując własne
                        uprawnienia, zasoby i możliwości.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {}
</script>

<style>
h3:not(:first-of-type) {
    margin-top: 3rem;
}

li{
  list-style: disc;
}
p,
li {
    @apply opacity-95 text-xl max-w-prose;
    line-height: 1.6;
  text-align: justify;
}
</style>
