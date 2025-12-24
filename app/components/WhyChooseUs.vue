<template>
    <section class="bg-white py-12 lg:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-10">
                <p class="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">JAMINAN KUALITI</p>
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Kenapa Pilih Kami?</h2>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <!-- Feature Item -->
                <div v-for="(feature, index) in features" :key="index" class="bg-secondary p-5 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon :name="feature.icon" class="text-xl text-primary" />
                    </div>
                    <h3 class="text-base font-bold text-gray-900 mb-1.5">{{ feature.title }}</h3>
                    <p class="text-xs text-gray-600">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const features = [
        {
            icon: "mdi:diamond-stone",
            title: "Buatan Tempatan",
            description: "Dihasilkan dari IKS tempatan dan buahan Muslim yang arganic.",
        },
        {
            icon: "mdi:shield-check",
            title: "Tanpa Pengawet",
            description: "Bahan semulajadi dan selamat untuk sedi keluarga.",
        },
        {
            icon: "mdi:star",
            title: "Rasa Segar",
            description: "Dimasak setiap hari untuk memastikan kesegaran.",
        },
        {
            icon: "mdi:truck-fast",
            title: "Penghantaran Pantas",
            description: "Pos ke seluruh Malaysia dengan pembungkusan rapi.",
        },
    ];
</script>
