import { useAsyncData } from "#app";

export function useQuizs() {
    const { data: quizzes, error } = useAsyncData("quizzes", () =>
        queryContent()
            .where({ slug: { $contains: "quiz" } })
            .find()
    );

    return { quizzes, error };
}
