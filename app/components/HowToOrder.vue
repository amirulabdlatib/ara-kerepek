<template>
    <section class="bg-white py-16 lg:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">Cara Tempahan Mudah</h2>
                <p class="text-gray-600 text-base sm:text-lg">4 Langkah mudah untuk dapatkan kerepek kegemaran anda.</p>
            </div>

            <!-- Steps Container -->
            <div class="relative">
                <!-- Connection Line (Desktop only) -->
                <div class="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" style="margin: 0 10%"></div>

                <!-- Steps Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    <!-- Step Item -->
                    <div v-for="(step, index) in steps" :key="index" class="relative flex flex-col items-center text-center group">
                        <!-- Step Number Badge -->
                        <div class="relative z-10 mb-6">
                            <div class="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span class="text-2xl font-bold text-primary">{{ index + 1 }}</span>
                            </div>
                        </div>

                        <!-- Icon Circle -->
                        <div class="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <Icon :name="step.icon" class="text-3xl text-primary group-hover:text-white transition-colors duration-300" />
                        </div>

                        <!-- Step Content -->
                        <h3 class="font-bold text-lg text-gray-900 mb-2">{{ step.title }}</h3>
                        <p class="text-sm text-gray-600 max-w-xs">{{ step.description }}</p>
                    </div>
                </div>
            </div>

            <!-- CTA Button -->
            <div class="text-center mt-12">
                <NuxtLink to="/produk" class="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors duration-200 text-base font-medium inline-flex items-center gap-2 group hover:cursor-pointer">
                    <span>Mula Order Sekarang</span>
                    <Icon name="mdi:arrow-right" class="text-xl group-hover:translate-x-1 transition-transform duration-200" />
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
