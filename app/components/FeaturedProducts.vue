<template>
    <section class="bg-secondary py-12 lg:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mb-10">
                <p class="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">PRODUK PILIHAN RAMAI</p>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Produk Pilihan Ramai</h2>
                    <NuxtLink to="/produk" class="text-xs font-medium text-primary hover:text-primary-dark transition-colors duration-200 flex items-center gap-1 group">
                        <span>Lihat Semua Produk</span>
                        <Icon name="mdi:arrow-right" class="text-base group-hover:translate-x-1 transition-transform duration-200" />
                    </NuxtLink>
                </div>
                <p class="text-gray-600 text-xs sm:text-sm mt-1.5">Wajib cuba! Paling laku keras minggu ini.</p>
            </div>

            <!-- Products Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <!-- Product Card -->
                <div v-for="(product, index) in products" :key="index" class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                    <!-- Product Image -->
                    <div class="relative overflow-hidden bg-gray-100 aspect-square">
                        <!-- Badge -->
                        <div v-if="product.badge" class="absolute top-2.5 left-2.5 z-10">
                            <span class="bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                                {{ product.badge }}
                            </span>
                        </div>

                        <NuxtImg :src="product.image" :alt="product.name" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    <!-- Product Info -->
                    <div class="p-3.5">
                        <h3 class="font-bold text-base text-gray-900 mb-0.5">{{ product.name }}</h3>
                        <p class="text-xs text-gray-600 mb-2.5 line-clamp-2">{{ product.description }}</p>

                        <!-- Price & Cart -->
                        <div class="flex items-center justify-between">
                            <div class="text-primary font-bold text-lg">RM {{ product.price }}</div>
                            <button class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-200 group-hover:scale-110">
                                <Icon name="mdi:cart-plus" class="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const products = [
        {
            name: "Kerepek Pisang Tanduk",
            description: "Rangup, enak, rasai enak pisang tanduk dengan rasa asin.",
            price: "18.00",
            image: "/images/kerepek-pisang-tanduk.png",
            badge: "HOT",
        },
        {
            name: "Kerepek Ubi Pedas Basah",
            description: "Pedas manis yang membuatkan. Sambal basah...",
            price: "15.00",
            image: "/images/kerepek-ubi-pedas-basah.png",
            badge: null,
        },
        {
            name: "Kerepek Bawang",
            description: "Rasa bawang asli yang harum. Sesuai untuk...",
            price: "12.00",
            image: "/images/kerepek-bawang.png",
            badge: null,
        },
        {
            name: "Kuah Rojak (Botol)",
            description: "Resep rahsia turun temurun. Pekat, lkat...",
            price: "20.00",
            image: "/images/kuah-rojak.png",
            badge: "BESTSELLER",
        },
    ];
</script>
