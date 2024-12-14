<template>
    <div class="text-gray-700">
        <p>Progression : {{ current }}/{{ total }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    current: Number,
    total: Number,
});
</script>
