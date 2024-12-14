<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div
            class="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl flex flex-col justify-center"
        >
            <div v-if="pending">
                <p class="text-center text-gray-500">Chargement en cours...</p>
            </div>

            <div v-else-if="quiz && quiz.questions">
                <template v-if="showResult">
                    <h2 class="text-2xl font-bold mb-4 text-center">
                        Résultat du Quiz
                    </h2>
                    <p class="mb-4 text-center text-lg">
                        Votre score :
                        <span class="font-semibold"
                            >{{ score }} / {{ quiz.questions.length }}</span
                        >
                    </p>
                    <div class="flex justify-center space-x-4">
                        <button
                            @click="restartQuiz"
                            class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Recommencer
                        </button>
                        <nuxt-link
                            to="/"
                            class="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                        >
                            Retour à l'accueil
                        </nuxt-link>
                    </div>
                </template>

                <template v-else>
                    <h2 class="text-2xl font-bold text-center mb-6">
                        {{ quiz.title }}
                    </h2>
                    <p class="mb-6 text-center text-lg">
                        Question {{ currentQuestionIndex + 1 }}/{{
                            quiz.questions.length
                        }}
                    </p>
                    <QuizQuestion
                        :question="quiz.questions[currentQuestionIndex]"
                        @answer="handleAnswer"
                    />
                    <div class="space-y-4 mt-6"></div>
                    <QuizProgress
                        :current="currentQuestionIndex + 1"
                        :total="quiz.questions.length"
                    />
                </template>
            </div>

            <div v-else>
                <p class="text-center text-red-500">
                    Quiz introuvable ou données invalides
                </p>
                <nuxt-link
                    to="/"
                    class="text-center text-blue-500 hover:underline block mt-4"
                >
                    Retour à l'accueil
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAsyncData, useRoute } from "#app";
import QuizQuestion from "~/components/QuizQuestion.vue";
import QuizProgress from "~/components/QuizProgress.vue";

const currentQuestionIndex = ref(0);
const score = ref(0);
const showResult = ref(false);

const { params } = useRoute();
const {
    data: quiz,
    pending,
    error,
} = await useAsyncData("quiz-data", () => queryContent(params.slug).findOne());

function handleAnswer(isCorrect) {
    if (isCorrect) score.value++;
    if (currentQuestionIndex.value < quiz.value.questions.length - 1) {
        currentQuestionIndex.value++;
    } else {
        showResult.value = true;
    }
}

function restartQuiz() {
    currentQuestionIndex.value = 0;
    score.value = 0;
    showResult.value = false;
}

if (error) {
    console.error("Erreur lors du chargement du quiz :", error);
}
</script>
