<template>
    <nav class="bg-white border-b border-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-14">
                <!-- Logo -->
                <NuxtLink to="/" class="flex items-center gap-2">
                    <NuxtImg src="/images/ara-kerepek-icon.png" alt="Ara Kerepek Logo" class="w-7 h-7 object-contain" />
                    <span class="font-semibold text-primary text-base">Ara Kerepek</span>
                </NuxtLink>

                <!-- Desktop Navigation Group -->
                <div class="hidden md:flex items-center gap-6">
                    <div class="flex items-center gap-6">
                        <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" class="text-sm text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                            {{ item.label }}
                        </NuxtLink>
                    </div>

                    <NuxtLink to="/pembayaran" class="flex items-center gap-1.5 bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary-dark transition-colors duration-200 text-sm">
                        <Icon name="mdi:cart-outline" class="text-base" />
                        <span>Troli ({{ cartCount }})</span>
                    </NuxtLink>
                </div>

                <!-- Mobile Menu Button -->
                <button class="md:hidden p-1.5 rounded-lg hover:bg-secondary-accent transition-colors duration-200" aria-label="Toggle menu" @click="toggleMenu">
                    <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-xl text-primary" />
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
        >
            <div v-show="isMenuOpen" class="md:hidden overflow-hidden border-t border-border">
                <div class="px-4 py-3 space-y-2 bg-secondary">
                    <NuxtLink
                        v-for="item in navItems"
                        :key="item.path"
                        :to="item.path"
                        class="block px-3 py-2 text-sm text-gray-700 hover:bg-secondary-accent hover:text-primary rounded-lg transition-colors duration-200 font-medium"
                        @click="closeMenu"
                    >
                        {{ item.label }}
                    </NuxtLink>
                    <NuxtLink to="/pembayaran" class="w-full flex items-center justify-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200 text-sm font-medium">
                        <Icon name="mdi:cart-outline" class="text-base" />
                        <span>Troli ({{ cartCount }})</span>
                    </NuxtLink>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
    const isMenuOpen = ref(false);
    const cartCount = ref(0);

    const navItems = [
        { label: "Utama", path: "/" },
        { label: "Produk", path: "/produk" },
    ];

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
        isMenuOpen.value = false;
    };

    // Close menu when route changes
    watch(
        () => useRoute().path,
        () => {
            closeMenu();
        }
    );

    // Close menu on window resize to desktop size
    onMounted(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu();
            }
        };
        window.addEventListener("resize", handleResize);
        onUnmounted(() => {
            window.removeEventListener("resize", handleResize);
        });
    });
</script>
