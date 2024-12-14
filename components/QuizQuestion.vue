<template>
    <div>
        <h3 class="text-xl font-semibold mb-4">{{ question.text }}</h3>
        <div class="space-y-4">
            <button
                v-for="(option, index) in question.options"
                :key="index"
                @click="selectOption(option)"
                class="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                {{ option }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    question: Object,
});

const emits = defineEmits(["answer"]);

function selectOption(option) {
    emits("answer", option === props.question.answer);
}
</script>
