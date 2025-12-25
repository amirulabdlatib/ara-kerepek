<template>
    <div class="bg-white rounded-2xl p-6 shadow-sm">
        <!-- Collapsible Header -->
        <button class="w-full flex items-center justify-between mb-6 group" @click="isExpanded = !isExpanded">
            <div class="flex items-center gap-2">
                <Icon :name="isExpanded ? 'mdi:chevron-down' : 'mdi:chevron-right'" class="text-xl text-gray-600 transition-transform" />
                <h2 class="text-lg font-bold text-gray-900">Pilihan Penghantaran & Pembayaran</h2>
            </div>
        </button>

        <!-- Expandable Content -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[2000px]"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-[2000px]"
            leave-to-class="opacity-0 max-h-0"
        >
            <div v-show="isExpanded" class="space-y-6 overflow-hidden">
                <!-- Shipping Method -->
                <div>
                    <h3 class="text-sm font-bold text-gray-900 mb-4">Kaedah Penghantaran</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <!-- Pos Option -->
                        <label
                            :class="[
                                'relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200',
                                selectedShipping === 'pos' ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-primary/50 hover:bg-secondary/30',
                            ]"
                        >
                            <input v-model="selectedShipping" type="radio" name="shipping" value="pos" class="sr-only" />
                            <div :class="['w-12 h-12 rounded-full flex items-center justify-center mb-2', selectedShipping === 'pos' ? 'bg-primary/10' : 'bg-secondary']">
                                <Icon name="mdi:email-fast" :class="['text-2xl', selectedShipping === 'pos' ? 'text-primary' : 'text-gray-600']" />
                            </div>
                            <div class="text-center">
                                <div class="text-sm font-bold text-gray-900">Pos</div>
                                <div class="text-xs text-gray-600">Penghantaran</div>
                                <div class="text-xs text-gray-600">Standard</div>
                            </div>
                            <div v-if="selectedShipping === 'pos'" class="absolute top-2 right-2">
                                <Icon name="mdi:check-circle" class="text-lg text-primary" />
                            </div>
                        </label>

                        <!-- Self Pickup Option -->
                        <label
                            :class="[
                                'relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200',
                                selectedShipping === 'pickup' ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-primary/50 hover:bg-secondary/30',
                            ]"
                        >
                            <input v-model="selectedShipping" type="radio" name="shipping" value="pickup" class="sr-only" />
                            <div :class="['w-12 h-12 rounded-full flex items-center justify-center mb-2', selectedShipping === 'pickup' ? 'bg-primary/10' : 'bg-secondary']">
                                <Icon name="mdi:store" :class="['text-2xl', selectedShipping === 'pickup' ? 'text-primary' : 'text-gray-600']" />
                            </div>
                            <div class="text-center">
                                <div class="text-sm font-bold text-gray-900">Ambil Sendiri</div>
                                <div class="text-xs text-gray-600">Kutip Sendiri</div>
                            </div>
                            <div v-if="selectedShipping === 'pickup'" class="absolute top-2 right-2">
                                <Icon name="mdi:check-circle" class="text-lg text-primary" />
                            </div>
                        </label>

                        <!-- Cash on Delivery Option -->
                        <label
                            :class="[
                                'relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200',
                                selectedShipping === 'cod' ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-primary/50 hover:bg-secondary/30',
                            ]"
                        >
                            <input v-model="selectedShipping" type="radio" name="shipping" value="cod" class="sr-only" />
                            <div :class="['w-12 h-12 rounded-full flex items-center justify-center mb-2', selectedShipping === 'cod' ? 'bg-primary/10' : 'bg-secondary']">
                                <Icon name="mdi:cash-fast" :class="['text-2xl', selectedShipping === 'cod' ? 'text-primary' : 'text-gray-600']" />
                            </div>
                            <div class="text-center">
                                <div class="text-sm font-bold text-gray-900">Tunai Masa</div>
                                <div class="text-xs text-gray-600">Serahan</div>
                                <div class="text-xs text-gray-600">Lembah Klang</div>
                                <div class="text-xs text-gray-600">Sahaja</div>
                            </div>
                            <div v-if="selectedShipping === 'cod'" class="absolute top-2 right-2">
                                <Icon name="mdi:check-circle" class="text-lg text-primary" />
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Payment Method -->
                <div>
                    <h3 class="text-sm font-bold text-gray-900 mb-4">Kaedah Pembayaran</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <!-- Bank Transfer Option -->
                        <label
                            :class="[
                                'relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200',
                                selectedPayment === 'bank' ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-primary/50 hover:bg-secondary/30',
                            ]"
                        >
                            <input v-model="selectedPayment" type="radio" name="payment" value="bank" class="sr-only" />
                            <div :class="['w-12 h-12 rounded-full flex items-center justify-center shrink-0', selectedPayment === 'bank' ? 'bg-primary/10' : 'bg-secondary']">
                                <Icon name="mdi:bank" :class="['text-2xl', selectedPayment === 'bank' ? 'text-primary' : 'text-gray-600']" />
                            </div>
                            <div class="flex-1">
                                <div class="text-sm font-bold text-gray-900">Perbankan</div>
                                <div class="text-sm font-bold text-gray-900">Dalam Talian</div>
                                <div class="text-xs text-gray-600">FPX / DuitNow</div>
                            </div>
                            <div v-if="selectedPayment === 'bank'" class="absolute top-3 right-3">
                                <Icon name="mdi:check-circle" class="text-lg text-primary" />
                            </div>
                        </label>

                        <!-- E-Wallet Option -->
                        <label
                            :class="[
                                'relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200',
                                selectedPayment === 'ewallet' ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-primary/50 hover:bg-secondary/30',
                            ]"
                        >
                            <input v-model="selectedPayment" type="radio" name="payment" value="ewallet" class="sr-only" />
                            <div :class="['w-12 h-12 rounded-full flex items-center justify-center shrink-0', selectedPayment === 'ewallet' ? 'bg-primary/10' : 'bg-secondary']">
                                <Icon name="mdi:wallet" :class="['text-2xl', selectedPayment === 'ewallet' ? 'text-primary' : 'text-gray-600']" />
                            </div>
                            <div class="flex-1">
                                <div class="text-sm font-bold text-gray-900">E-Dompet</div>
                                <div class="text-xs text-gray-600">Grab / TnG</div>
                            </div>
                            <div v-if="selectedPayment === 'ewallet'" class="absolute top-3 right-3">
                                <Icon name="mdi:check-circle" class="text-lg text-primary" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
    const isExpanded = ref(true);
    const selectedShipping = ref("pos");
    const selectedPayment = ref("bank");
</script>
