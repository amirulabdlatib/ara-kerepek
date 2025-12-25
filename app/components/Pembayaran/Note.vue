<template>
    <div class="bg-white rounded-2xl p-6 shadow-sm">
        <h3 class="text-sm font-bold text-gray-900 mb-4">Nota Kepada Penjual (Pilihan)</h3>
        <textarea
            v-model="note"
            rows="4"
            placeholder="Cth. Sila bungkus dengan lebihan 'bubble wrap', saya perlukannnya untuk hadiah."
            class="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
        ></textarea>
    </div>
</template>

<script setup>
    const note = ref("");
</script>
