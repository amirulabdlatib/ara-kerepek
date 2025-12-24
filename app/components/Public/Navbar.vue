<template>
    <nav class="bg-secondary border-b border-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <NuxtLink to="/" class="flex items-center gap-2">
                    <NuxtImg src="/images/ara-kerepek-icon.png" alt="Ara Kerepek Logo" class="w-8 h-8 object-contain" />
                    <span class="font-bold text-primary text-lg">Ara Kerepek</span>
                </NuxtLink>

                <!-- Desktop Navigation Group -->
                <div class="hidden md:flex items-center gap-8">
                    <div class="flex items-center gap-8">
                        <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" class="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                            {{ item.label }}
                        </NuxtLink>
                    </div>

                    <button class="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200">
                        <Icon name="mdi:cart-outline" class="text-lg" />
                        <span>Cart ({{ cartCount }})</span>
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMenu" class="md:hidden p-2 rounded-lg hover:bg-secondary-accent transition-colors duration-200" aria-label="Toggle menu">
                    <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-2xl text-primary" />
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
            leave-to-class="opacity-0 max-h-0">
            <div v-show="isMenuOpen" class="md:hidden overflow-hidden border-t border-border">
                <div class="px-4 py-4 space-y-3 bg-secondary">
                    <NuxtLink
                        v-for="item in navItems"
                        :key="item.path"
                        :to="item.path"
                        @click="closeMenu"
                        class="block px-4 py-3 text-gray-700 hover:bg-secondary-accent hover:text-primary rounded-lg transition-colors duration-200 font-medium">
                        {{ item.label }}
                    </NuxtLink>
                    <button class="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-200 font-medium">
                        <Icon name="mdi:cart-outline" class="text-lg" />
                        <span>Cart ({{ cartCount }})</span>
                    </button>
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
