<template>
    <div>
        <header class="bg-gray-800 text-white p-4">
            <nav class="container mx-auto flex justify-between items-center">
                <h1 class="text-xl font-bold">Quiz App</h1>
                <nuxt-link to="/" class="text-white hover:underline"
                    >Accueil</nuxt-link
                >
            </nav>
        </header>
        <main class="container mx-auto">
            <nuxt-loading-indicator />
            <slot />
        </main>
    </div>
</template>
