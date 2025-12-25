<template>
    <div class="bg-white rounded-2xl p-6 shadow-sm">
        <!-- Section Header -->
        <div class="flex items-center gap-2 mb-6">
            <Icon name="mdi:account" class="text-xl text-primary" />
            <h2 class="text-lg font-bold text-gray-900">Maklumat Pelanggan & Penghantaran</h2>
        </div>

        <form class="space-y-4">
            <!-- Name & Phone Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                    <input
                        id="name"
                        v-model="formData.name"
                        type="text"
                        placeholder="Nama Penuh Anda"
                        class="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/30 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                </div>

                <!-- Phone -->
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Nombor Telefon</label>
                    <input
                        id="phone"
                        v-model="formData.phone"
                        type="tel"
                        placeholder="+60 12-345 6789"
                        class="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/30 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                </div>
            </div>

            <!-- Email -->
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Alamat E-mel</label>
                <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="anda@contoh.com"
                    class="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/30 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
            </div>

            <!-- Address Line 1 -->
            <div>
                <label for="address1" class="block text-sm font-medium text-gray-700 mb-2">Alamat Baris 1</label>
                <input
                    id="address1"
                    v-model="formData.address1"
                    type="text"
                    placeholder="Nama jalan, nombor bangunan."
                    class="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/30 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
            </div>

            <!-- Address Line 2 (Optional) -->
            <div>
                <label for="address2" class="block text-sm font-medium text-gray-700 mb-2">Alamat Baris 2 (Pilihan)</label>
                <input
                    id="address2"
                    v-model="formData.address2"
                    type="text"
                    placeholder="Apartmen, suit, unit, dsb."
                    class="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/30 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
            </div>

            <!-- Postcode & State Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Postcode -->
                <div>
                    <label for="postcode" class="block text-sm font-medium text-gray-700 mb-2">Poskod</label>
                    <input
                        id="postcode"
                        v-model="formData.postcode"
                        type="text"
                        placeholder="cth. 50000"
                        class="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/30 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                </div>

                <!-- State -->
                <div>
                    <label for="state" class="block text-sm font-medium text-gray-700 mb-2">Negeri</label>
                    <div class="relative">
                        <select
                            id="state"
                            v-model="formData.state"
                            class="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/30 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
                        >
                            <option value="">Pilih Negeri</option>
                            <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                        </select>
                        <Icon name="mdi:chevron-down" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    const formData = ref({
        name: "",
        phone: "",
        email: "",
        address1: "",
        address2: "",
        postcode: "",
        state: "",
    });

    const states = [
        "Johor",
        "Kedah",
        "Kelantan",
        "Melaka",
        "Negeri Sembilan",
        "Pahang",
        "Penang",
        "Perak",
        "Perlis",
        "Sabah",
        "Sarawak",
        "Selangor",
        "Terengganu",
        "Wilayah Persekutuan Kuala Lumpur",
        "Wilayah Persekutuan Labuan",
        "Wilayah Persekutuan Putrajaya",
    ];
</script>
