<template>
    <div class="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
        <!-- Header -->
        <h2 class="text-lg font-bold text-gray-900 mb-5">Ringkasan Pesanan</h2>

        <!-- Cart Items -->
        <div class="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
            <div v-for="item in cartItems" :key="item.id" class="flex gap-3">
                <!-- Product Image -->
                <div class="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                    <NuxtImg :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                </div>

                <!-- Product Info -->
                <div class="flex-1 min-w-0">
                    <h3 class="text-sm font-bold text-gray-900 truncate">{{ item.name }}</h3>
                    <p class="text-xs text-gray-600 mb-2">{{ item.variant }}</p>

                    <!-- Quantity Controls -->
                    <div class="flex items-center gap-2">
                        <button class="w-6 h-6 rounded bg-secondary hover:bg-secondary-accent flex items-center justify-center transition-colors" @click="decreaseQuantity(item.id)">
                            <Icon name="mdi:minus" class="text-sm text-gray-700" />
                        </button>
                        <span class="text-sm font-medium text-gray-900 w-8 text-center">{{ item.quantity }}</span>
                        <button class="w-6 h-6 rounded bg-secondary hover:bg-secondary-accent flex items-center justify-center transition-colors" @click="increaseQuantity(item.id)">
                            <Icon name="mdi:plus" class="text-sm text-gray-700" />
                        </button>
                    </div>
                </div>

                <!-- Price -->
                <div class="text-right shrink-0">
                    <div class="text-sm font-bold text-gray-900">RM {{ item.price }}</div>
                </div>
            </div>
        </div>

        <!-- Promo Code -->
        <div class="mb-6">
            <div class="flex items-center gap-2 p-3 rounded-lg border border-border bg-secondary/30">
                <Icon name="mdi:ticket-percent" class="text-lg text-primary shrink-0" />
                <input v-model="promoCode" type="text" placeholder="Kod Promo" class="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none" />
                <button class="px-4 py-1.5 bg-primary text-white rounded-full text-xs font-medium hover:bg-primary-dark transition-colors">Guna</button>
            </div>
        </div>

        <!-- Pricing Breakdown -->
        <div class="space-y-3 mb-6 pb-6 border-b border-border">
            <div class="flex justify-between items-center text-sm">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium text-gray-900">RM {{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between items-center text-sm">
                <span class="text-gray-600">Yuran Penghantaran</span>
                <span class="font-medium text-gray-900">RM {{ shipping.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between items-center text-sm">
                <span class="text-gray-600">Cukai (SST 6%)</span>
                <span class="font-medium text-gray-900">RM {{ tax.toFixed(2) }}</span>
            </div>
        </div>

        <!-- Total -->
        <div class="mb-6">
            <div class="flex justify-between items-center">
                <span class="text-sm font-bold text-gray-900">Jumlah Bayaran</span>
                <span class="text-2xl font-bold text-primary">RM {{ total.toFixed(2) }}</span>
            </div>
        </div>

        <!-- Place Order Button -->
        <button class="w-full bg-primary text-white py-3 rounded-full hover:bg-primary-dark transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2 group">
            <span>Buat Pesanan</span>
            <Icon name="mdi:arrow-right" class="text-lg group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        <!-- Trust Badges -->
        <div class="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
            <div class="flex flex-col items-center">
                <Icon name="mdi:shield-check" class="text-xl text-gray-600 mb-1" />
                <span class="text-[10px] text-gray-600 text-center">SELAMAT</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon name="mdi:star" class="text-xl text-gray-600 mb-1" />
                <span class="text-[10px] text-gray-600 text-center">KUALITI</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon name="mdi:truck-fast" class="text-xl text-gray-600 mb-1" />
                <span class="text-[10px] text-gray-600 text-center">PANTAS</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    const promoCode = ref("");

    const cartItems = ref([
        {
            id: 1,
            name: "Kerepek Ubi Pedas Basah",
            variant: "Saiz Pek: 500g",
            price: 30.0,
            quantity: 2,
            image: "/images/kerepek-ubi-pedas-basah.png",
        },
        {
            id: 2,
            name: "Kuah Rojak Madu",
            variant: "Kepekatan: Seperhana",
            price: 15.0,
            quantity: 1,
            image: "/images/kuah-rojak.png",
        },
    ]);

    const subtotal = computed(() => {
        return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });

    const shipping = ref(5.0);

    const tax = computed(() => {
        return subtotal.value * 0.06;
    });

    const total = computed(() => {
        return subtotal.value + shipping.value + tax.value;
    });

    const increaseQuantity = (id) => {
        const item = cartItems.value.find((item) => item.id === id);
        if (item) {
            item.quantity++;
        }
    };

    const decreaseQuantity = (id) => {
        const item = cartItems.value.find((item) => item.id === id);
        if (item && item.quantity > 1) {
            item.quantity--;
        }
    };
</script>
