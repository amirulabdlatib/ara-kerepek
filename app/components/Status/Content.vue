<template>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Success Card -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div class="p-8 sm:p-12">
                <!-- Success Icon -->
                <div class="flex justify-center mb-6">
                    <div class="relative">
                        <!-- Background Circle -->
                        <div class="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <Icon name="mdi:check" class="text-4xl text-green-600" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Success Message -->
                <div class="text-center mb-8">
                    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Pembayaran Berjaya!</h1>
                    <p class="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        Pesanan anda <span class="font-bold text-primary">#12345</span> telah disahkan dan pembayaran anda adalah berjaya. Kami akan menghantar e-mel pengesahan dengan semua butiran tidak lama lagi. Terima kasih atas
                        pembelian anda!
                    </p>
                </div>

                <!-- Order Summary Section -->
                <StatusOrderSummary />

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-3 mt-8">
                    <NuxtLink
                        to="/produk"
                        class="flex-1 bg-white text-primary py-3 px-6 rounded-full border-2 border-primary hover:bg-secondary-accent transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2 group"
                    >
                        <Icon name="mdi:shopping" class="text-lg" />
                        <span>Teruskan Membeli-belah</span>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Additional Info -->
        <div class="mt-8 text-center">
            <p class="text-sm text-gray-600 mb-4">Butiran lanjut? Hubungi kami di:</p>
            <div class="flex flex-wrap justify-center gap-6">
                <a href="mailto:hello@arakerepek.my" class="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors">
                    <Icon name="mdi:email" class="text-lg" />
                    <span>hello@arakerepek.my</span>
                </a>
                <a href="tel:01X-XXXXXXX" class="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors">
                    <Icon name="mdi:phone" class="text-lg" />
                    <span>01X-XXXXXXX</span>
                </a>
                <a href="#" class="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors">
                    <Icon name="mdi:whatsapp" class="text-lg" />
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    // Success page logic
</script>
