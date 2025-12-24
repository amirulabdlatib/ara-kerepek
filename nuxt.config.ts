import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["./app/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@pinia/nuxt", "@nuxt/icon", "@nuxt/eslint"],

    googleFonts: {
        families: {
            "Playfair Display": {
                wght: [400, 600, 700, 800],
            },
            Inter: {
                wght: [400, 500, 600],
            },
        },
        display: "swap",
        preconnect: true,
        preload: true,
    },

    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/images/favicon/favicon.ico",
                },
            ],
        },
    },
});