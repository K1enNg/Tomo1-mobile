// import React from 'react';
// import { useLocalSearchParams, Redirect } from 'expo-router';
// import Quiz from '@/components/quiz/Quiz';
// import { QUIZ_REGISTRY } from '@/data/registry';
// import { Text, View } from 'react-native';

// const QuizFlowScreen = () => {
//     const { id } = useLocalSearchParams<{ id: string }>();

//     if (!id || !QUIZ_REGISTRY[id]) {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Quiz not found</Text>
//             </View>
//         );
//     }

//     const quizData = QUIZ_REGISTRY[id];

//     return <Quiz data={quizData} />;
// };

// export default QuizFlowScreen;
