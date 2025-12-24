<template>
    <section class="bg-white py-16 lg:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-2">JAMINAN KUALITI</p>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Kenapa Pilih Kami?</h2>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Feature Item -->
                <div v-for="(feature, index) in features" :key="index" class="bg-secondary p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon :name="feature.icon" class="text-2xl text-primary" />
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
                    <p class="text-sm text-gray-600">{{ feature.description }}</p>
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
