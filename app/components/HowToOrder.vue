<template>
    <section class="bg-white py-12 lg:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-10">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">Cara Tempahan Mudah</h2>
                <p class="text-gray-600 text-xs sm:text-sm">4 Langkah mudah untuk dapatkan kerepek kegemaran anda.</p>
            </div>

            <!-- Steps Container -->
            <div class="relative">
                <!-- Connection Line (Desktop only) -->
                <div class="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-border" style="margin: 0 10%"></div>

                <!-- Steps Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
                    <!-- Step Item -->
                    <div v-for="(step, index) in steps" :key="index" class="relative flex flex-col items-center text-center group">
                        <!-- Step Number Badge -->
                        <div class="relative z-10 mb-5">
                            <div class="w-14 h-14 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span class="text-xl font-bold text-primary">{{ index + 1 }}</span>
                            </div>
                        </div>

                        <!-- Icon Circle -->
                        <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <Icon :name="step.icon" class="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                        </div>

                        <!-- Step Content -->
                        <h3 class="font-bold text-base text-gray-900 mb-1.5">{{ step.title }}</h3>
                        <p class="text-xs text-gray-600 max-w-xs">{{ step.description }}</p>
                    </div>
                </div>
            </div>

            <!-- CTA Button -->
            <div class="text-center mt-10">
                <NuxtLink to="/produk" class="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-200 text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 group hover:cursor-pointer">
                    <span>Mula Order Sekarang</span>
                    <Icon name="mdi:arrow-right" class="text-lg group-hover:translate-x-1 transition-transform duration-200" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
    const steps = [
        {
            icon: "mdi:mouse-variant",
            title: "Pilih Produk",
            description: "Pilih kerepek atau kuah rojak yang anda inginkan.",
        },
        {
            icon: "mdi:file-document-edit",
            title: "Isi Maklumat",
            description: "Masukkan nama dan alamat penghantaran anda.",
        },
        {
            icon: "mdi:credit-card",
            title: "Bayar",
            description: "Bayar melalui Online Transfer atau E-wallet.",
        },
        {
            icon: "mdi:truck-delivery",
            title: "Kami Poskan",
            description: "Tunggu tracking number dan barang sampai.",
        },
    ];
</script>
