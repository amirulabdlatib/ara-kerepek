<template>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <!-- Left Content -->
            <div class="space-y-6">
                <!-- Badge -->
                <div class="inline-block">
                    <span class="text-xs sm:text-sm font-semibold text-primary bg-white px-3 py-1.5 rounded-full border border-primary/20"> RASA ASLI WARISAN </span>
                </div>

                <!-- Heading -->
                <h1 class="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                    Kerepek Rangup
                    <br />
                    <span class="text-primary">& Kuah Rojak Padu</span>
                    <br />
                    – Buatan Tempatan
                </h1>

                <!-- Description -->
                <p class="text-gray-600 text-base sm:text-lg max-w-xl">Nikmati rasa asli Malaysia. Tanpa pendaftaran rumit. Terus order dan kami hantar ke pintu rumah anda.</p>

                <!-- CTA Buttons -->
                <div class="flex flex-wrap gap-3 sm:gap-4 pt-2">
                    <button class="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-primary-dark transition-colors duration-200 text-sm sm:text-base font-medium">Order Sekarang</button>
                    <button class="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-primary hover:bg-secondary-accent transition-colors duration-200 text-sm sm:text-base font-medium flex items-center gap-2">
                        <Icon name="mdi:whatsapp" class="text-lg" />
                        WhatsApp Kami
                    </button>
                </div>
            </div>

            <!-- Right Image -->
            <div class="order-first lg:order-last">
                <div class="relative">
                    <NuxtImg src="/images/hero-section-img.png" alt="Kerepek dengan Kuah Rojak" class="w-full h-auto rounded-2xl shadow-2xl object-cover" loading="eager" />
                </div>
            </div>
        </div>
    </section>
</template>
