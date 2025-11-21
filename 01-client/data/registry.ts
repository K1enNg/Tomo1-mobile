import { QuizData, item } from "@/types/quiz";
import { ROUTES } from "@/constants/Navigation";
import { EntryTest_1, EntryTest_2 } from "@/constants/entryTest/Quizzes";

const items1: item[] = [
    { id: 1, label: 'Tai', image: require('../assets/images/flow2/tai.png') },
    { id: 2, label: 'Tóc', image: require('../assets/images/flow2/toc.png') },
    { id: 3, label: 'Mắt', image: require('../assets/images/flow2/mat.png') },
    { id: 4, label: 'Mũi', image: require('../assets/images/flow2/mui.png') },
    { id: 5, label: 'Môi', image: require('../assets/images/flow2/moi.png') },
    { id: 6, label: 'Răng', image: require('../assets/images/flow2/rang.png') },
    { id: 7, label: 'Miệng', image: require('../assets/images/flow2/mieng.png') },
    { id: 8, label: 'Bàn tay', image: require('../assets/images/flow2/bantay.png') },
    { id: 9, label: 'Ngón tay', image: require('../assets/images/flow2/ngontay.png') },
    { id: 10, label: 'Vai', image: require('../assets/images/flow2/vai.png') },
    { id: 11, label: 'Lưng', image: require('../assets/images/flow2/lung.png') },
    { id: 12, label: 'Bụng', image: require('../assets/images/flow2/bung.png') },
    { id: 13, label: 'Đầu gối', image: require('../assets/images/flow2/daugoi.png') },
    { id: 14, label: 'Bàn chân', image: require('../assets/images/flow2/banchan.png') },
];

const items2: item[] = [
    { id: 1, label: 'Tai', image: require('../assets/images/flow2/tai.png') },
    { id: 2, label: 'Tóc', image: require('../assets/images/flow2/toc.png') },
    { id: 3, label: 'Mắt', image: require('../assets/images/flow2/mat.png') },
    { id: 4, label: 'Mũi', image: require('../assets/images/flow2/mui.png') },
    { id: 5, label: 'Môi', image: require('../assets/images/flow2/moi.png') },
]

export const QUIZ_REGISTRY: Record<string, QuizData> = {
    "Fl2Title1": {
        type: "title",
        progress: 0.8,
        source: require("../assets/images/mascot_logo.png"),
        description: "Ba mẹ đọc các bộ phận cơ thể và để bé chỉ trên cơ thể mình. Mỗi khi trẻ chỉ đúng các bộ phận trên cơ thể, hãy yêu cầu trẻ nhắc lại từ đó theo mình.",
        btnText: "Tiếp Tục",
        time: false,
        next: ROUTES.FLOW2_Q1
    },
    "Fl201": {
        questionId: "Fl201",
        type: "multiple",
        progress: 0.8,
        items: items1,
        description: "Ba mẹ có thể đọc theo các bộ phận cơ thể dưới đây và ấn chọn khi đã đọc bộ phận đó rồi nhé.",
        btnText: "Tiếp Tục",
        zoom: false,
        next: ROUTES.FLOW2_PAUSE
    },
    "Fl2Pause": {
        type: "title",
        source: require("../assets/images/mascot_logo.png"),
        time: true,
        next: ROUTES.FLOW2_TITLE2
    },
    "Fl2Title2": {
        type: "title",
        progress: 1.0,
        source: require("../assets/images/mascot_logo.png"),
        description: "Ba mẹ bày các thẻ học trên bàn, yêu cầu trẻ chỉ đúng tên bộ phận cơ thể khi đọc. Mỗi khi trẻ chỉ đúng thẻ, hãy yêu cầu trẻ nhắc lại từ đó theo mình.",
        btnText: "Tiếp Tục",
        time: false,
        next: ROUTES.FLOW2_Q2
    },
    "Fl202": {
        questionId: "Fl202",
        type: "multiple",
        progress: 1.0,
        items: items2,
        zoom: true,
        audio: require("../assets/images/flow2/Audio.png"),
        answer: [1, 3, 2, 4, 5]
    },
    "ET_1": EntryTest_1,
    "ET_2": EntryTest_2,
    "Flow3_Page1": {
        type: "lesson",
        title: "Bài 01",
        lesson: "Bộ phận cơ thể",
        source: require("../assets/images/mascot_logo.png"),
        descript: "Hôm nay mình sẽ học về các bộ phận trên cơ thể nhé!",
        button: "Tiếp tục"
    },
    "Flow3_Page2": {
        type: "lesson",
        progress: 0.5,
        source: require("../assets/images/mascot_logo.png"),
        descript: "Ba mẹ hãy sử dụng thẻ học để dạy bé,đọc từng từ chậm rãi để bé bắt chước phát âm theo.",
        button: "Tiếp tục"
    },
    "Flow3_Page3": {
        type: "lesson",
        progress: 0.6,
        source: require("../assets/images/mascot_logo.png"),
        descript: "Trong lúc sử dụng thẻ, ba mẹ đồng thời chỉ vào các bộ phận trên người mình và bé để bé hiểu hơn nhé.",
        button: "Tiếp tục"
    },
    "Flow3_Page4": {
        type: "lesson",
        source: require("../assets/images/tai.png"),
        descript: "Tai"
    }
};
