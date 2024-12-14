<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
            <h2 class="text-2xl font-bold mb-6 text-center">Liste des Quiz</h2>

            <div v-if="error" class="text-center text-red-500 mb-4">
                Erreur lors du chargement des quiz
            </div>

            <div v-else>
                <ul>
                    <li
                        v-for="quiz in quizzes"
                        :key="quiz.slug"
                        class="mb-6 bg-gray-50 p-6 rounded-lg shadow hover:bg-gray-100 transition duration-200"
                    >
                        <h3 class="text-xl font-semibold mb-2">
                            {{ quiz.title }}
                        </h3>
                        <p class="text-gray-600">
                            Questions : {{ quiz.questions.length }}
                        </p>
                        <nuxt-link
                            :to="`/quiz/${quiz.slug}`"
                            class="text-blue-500 hover:underline mt-4 inline-block"
                        >
                            Commencer le quiz
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useQuizs } from "~/composables/useQuizs";
const { quizzes, error } = useQuizs();
</script>
