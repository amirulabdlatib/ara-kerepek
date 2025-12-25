<template>
    <div class="bg-secondary rounded-2xl p-6">
        <h2 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-5 text-center">Ringkasan Pesanan</h2>

        <div class="space-y-3">
            <div class="flex justify-between items-center py-2">
                <span class="text-sm text-gray-600">Order ID:</span>
                <span class="text-sm font-bold text-gray-900">#12345</span>
            </div>

            <div class="flex justify-between items-center py-2">
                <span class="text-sm text-gray-600">Tarikh:</span>
                <span class="text-sm font-medium text-gray-900">{{ formattedDate }}</span>
            </div>

            <div class="flex justify-between items-center py-2 border-t border-border pt-3">
                <span class="text-sm text-gray-600">Jumlah Amaun:</span>
                <span class="text-xl font-bold text-green-600">RM 45.00</span>
            </div>

            <div class="flex justify-between items-center py-2">
                <span class="text-sm text-gray-600">Kaedah Pembayaran:</span>
                <span class="text-sm font-medium text-gray-900">Maybank2u (**** 1234)</span>
            </div>
        </div>

        <div class="mt-6 pt-6 border-t border-border">
            <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">Apa Yang Seterusnya?</h3>
            <div class="space-y-2">
                <div class="flex items-start gap-2">
                    <Icon name="mdi:numeric-1-circle" class="text-primary text-lg mt-0.5 shrink-0" />
                    <p class="text-xs text-gray-600">Anda akan menerima e-mel pengesahan dalam beberapa minit</p>
                </div>
                <div class="flex items-start gap-2">
                    <Icon name="mdi:numeric-2-circle" class="text-primary text-lg mt-0.5 shrink-0" />
                    <p class="text-xs text-gray-600">Pesanan anda akan diproses dalam 1-2 hari bekerja</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const formattedDate = computed(() => {
        const date = new Date();
        return date.toLocaleDateString("ms-MY", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    });
</script>
