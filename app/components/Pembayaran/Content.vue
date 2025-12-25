<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Page Header -->
        <div class="mb-8">
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Semak Pesanan Anda</h1>
            <p class="text-sm text-gray-600">Hampir tiba! Sila semak item dan butiran penghantaran anda.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Left Column - Forms -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Customer Information Form -->
                <PembayaranCustomerForm />

                <!-- Shipping & Payment Options -->
                <PembayaranShippingPayment />

                <!-- Note to Seller -->
                <PembayaranNote />
            </div>

            <!-- Right Column - Order Summary -->
            <div class="lg:col-span-1">
                <PembayaranOrderSummary />
            </div>
        </div>
    </div>
</template>
