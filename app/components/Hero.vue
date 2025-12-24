<template>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <!-- Left Content -->
            <div class="space-y-5">
                <!-- Badge -->
                <div class="inline-block">
                    <span class="text-[10px] sm:text-xs font-semibold text-primary bg-white px-2.5 py-1 rounded-full border border-primary/20"> RASA ASLI WARISAN </span>
                </div>

                <!-- Heading -->
                <h1 class="text-3xl sm:text-4xl lg:text-5xl leading-tight">
                    Kerepek Rangup
                    <br />
                    <span class="text-primary">& Kuah Rojak</span>
                    <br />
                    – Buatan Tempatan
                </h1>

                <!-- Description -->
                <p class="text-gray-600 text-sm sm:text-base max-w-xl">Nikmati rasa asli Malaysia.</p>

                <!-- CTA Buttons -->
                <div class="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
                    <NuxtLink to="/produk" class="bg-primary text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-200 text-xs sm:text-sm font-medium">Order Sekarang</NuxtLink>
                    <button class="bg-white text-primary px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-primary hover:bg-secondary-accent transition-colors duration-200 text-xs sm:text-sm font-medium flex items-center gap-1.5">
                        <Icon name="mdi:whatsapp" class="text-base" />
                        WhatsApp Kami
                    </button>
                </div>
            </div>

            <!-- Right Image with Micro-interactions -->
            <div class="order-first lg:order-last hidden sm:block">
                <div class="relative group">
                    <!-- Animated background blob -->
                    <div class="absolute -inset-4 bg-linear-to-r from-primary/10 to-primary/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    <!-- Image container -->
                    <div class="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
                        <NuxtImg src="/images/hero-section-img.png" alt="Kerepek dengan Kuah Rojak" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" loading="eager" />
                        <!-- Subtle overlay on hover -->
                        <div class="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
