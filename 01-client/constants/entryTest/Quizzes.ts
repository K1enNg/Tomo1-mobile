import {
  QuizTitleProps,
  SingleChoiceQuizProps,
} from "@/QuestionnaireLogic/quiz";
import { MultiChoiceAnimalProps } from "@/types/components";
import { ROUTES } from "../Navigation";

export const EntryTest_1: SingleChoiceQuizProps = {
  questionId: "ET_1",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: [
    "Ba mẹ bấm chạy đoạn âm thanh sau nhé",
    "Bé có phản ứng gì với âm thanh tần số cao như tiếng chuông không?",
  ],
  audioPlayer: require("../../assets/images/AudioPlayerET.png"),
  next: ROUTES.ENTRY_TEST2,
};

export const EntryTest_2: SingleChoiceQuizProps = {
  questionId: "ET_2",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có phát ra âm thanh nào không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST3,
};

export const EntryTest_3: SingleChoiceQuizProps = {
  questionId: "ET_3",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có tạo ra các âm “o”, “ô”, “u” hay “a” không"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST4,
};

export const EntryTest_4: SingleChoiceQuizProps = {
  questionId: "ET_4",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có cười thành tiếng không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST5,
};

export const EntryTest_5: SingleChoiceQuizProps = {
  questionId: "ET_5",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có réo cười không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST6,
};

export const EntryTest_6: SingleChoiceQuizProps = {
  questionId: "ET_6",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: [
    "Bé có quay đầu theo khi nghe thấy âm thanh như tiếng lục lạc, tiếng gọi không?",
  ],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST7,
};

export const EntryTest_7: SingleChoiceQuizProps = {
  questionId: "ET_7",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có quay đầu hướng về tiếng gọi không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST8,
};

export const EntryTest_8: SingleChoiceQuizProps = {
  questionId: "ET_8",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói được các âm tiết đơn như “ba”, “đa”, “ma” không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST9,
};

export const EntryTest_9: SingleChoiceQuizProps = {
  questionId: "ET_9",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: [
    "Bé có chủ động bắt chước âm nói của người lớn dù chưa chính xác không?",
  ],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST10,
};

export const EntryTest_10: SingleChoiceQuizProps = {
  questionId: "ET_10",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói được “ba ba”, “ma ma” không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST11,
};

export const EntryTest_11: SingleChoiceQuizProps = {
  questionId: "ET_11",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: [
    "Bé có nói được “ba ba ba”, “ma ma ma” (âm tiết từ 3 lần trở lên) không?",
  ],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST12,
};

export const EntryTest_12: SingleChoiceQuizProps = {
  questionId: "ET_12",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói bập bẹ không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST13,
};

export const EntryTest_13: SingleChoiceQuizProps = {
  questionId: "ET_13",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói “ba ba”, “ma ma” với ba mẹ không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST14,
};

export const EntryTest_14: SingleChoiceQuizProps = {
  questionId: "ET_14",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói được 1 từ đơn không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST15,
};

export const EntryTest_15: SingleChoiceQuizProps = {
  questionId: "ET_15",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói được 2 từ đơn không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST16,
};

export const EntryTest_16: SingleChoiceQuizProps = {
  questionId: "ET_16",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói được 3 từ đơn không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST17,
};

export const EntryTest_17: SingleChoiceQuizProps = {
  questionId: "ET_17",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói được 6 từ đơn không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST18_MCS,
};

export const EntryTest_18_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ cho bé nhìn hình và đọc ngẫu nhiên tên hình để bé tự chỉ, không ra hiệu bằng mắt hay tay. Sau đó ấn chọn những hình bé chỉ được nhé.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST18_MCA,
};

export const EntryTest_18_MCA: MultiChoiceAnimalProps = {
  title: "Khởi động ban đầu",
  type: "multipleAnimal",
  btnText: "Tiếp tục",
  subBtnText: "Bé không hợp tác",
  choices: ["cat", "horse", "bird", "dog", "girl"],
  images: {
    cat: require("../../assets/images/cat.png"),
    horse: require("../../assets/images/horse.png"),
    bird: require("../../assets/images/bird.png"),
    dog: require("../../assets/images/dog.png"),
    girl: require("../../assets/images/girl.png"),
  },
  next: ROUTES.ENTRY_TEST19,
};

export const EntryTest_19: SingleChoiceQuizProps = {
  questionId: "ET_19",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có nói được câu gồm 2 từ không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST20_MCT,
};

export const EntryTest_20_MCT: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ chỉ vào hình và cho bé tự đọc tên. Sau đó ấn chọn những ô bé đọc được,ba mẹ không nhắc bé.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST20_MCA,
};

export const EntryTest_20_MCA: MultiChoiceAnimalProps = {
  title: "Khởi động ban đầu",
  type: "multipleAnimal",
  btnText: "Tiếp tục",
  subBtnText: "Bé không hợp tác",
  choices: ["cat", "horse", "bird", "dog", "girl"],
  images: {
    cat: require("../../assets/images/cat.png"),
    horse: require("../../assets/images/horse.png"),
    bird: require("../../assets/images/bird.png"),
    dog: require("../../assets/images/dog.png"),
    girl: require("../../assets/images/girl.png"),
  },
  next: ROUTES.ENTRY_TEST21_MCS,
};

export const EntryTest_21_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ gọi tên các bộ phận trên cơ thể sau đây và yêu cầu bé chỉ vào bộ phận tương ứng nhé (có thể sử dụng búp bê).",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST22_MCS,
};

export const EntryTest_22_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ cho bé nhìn hình và đọc ngẫu nhiên tên hình để bé tự chỉ, không ra hiệu bằng mắt hay tay. Sau đó ấn chọn những hình bé chỉ được nhé.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST23,
};

export const EntryTest_22_MCA: MultiChoiceAnimalProps = {
  title: "Khởi động ban đầu",
  type: "multipleAnimal",
  btnText: "Tiếp tục",
  subBtnText: "Bé không hợp tác",
  choices: ["cat", "horse", "bird", "dog", "girl"],
  images: {
    cat: require("../../assets/images/cat.png"),
    horse: require("../../assets/images/horse.png"),
    bird: require("../../assets/images/bird.png"),
    dog: require("../../assets/images/dog.png"),
    girl: require("../../assets/images/girl.png"),
  },
  next: ROUTES.ENTRY_TEST23,
};

export const EntryTest_23: SingleChoiceQuizProps = {
  questionId: "ET_23",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Những người ít tiếp xúc với bé có hiểu được lời bé nói không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST24_MCS,
};

export const EntryTest_24_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ chỉ vào hình và cho bé tự đọc tên và ấn chọn những ô bé đọc được nhé. Ba mẹ không nhắc bé nhé!",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST24_MCA,
};

export const EntryTest_24_MCA: MultiChoiceAnimalProps = {
  title: "Khởi động ban đầu",
  type: "multipleAnimal",
  btnText: "Tiếp tục",
  subBtnText: "Bé không hợp tác",
  choices: ["cat", "horse", "bird", "dog", "girl"],
  images: {
    cat: require("../../assets/images/cat.png"),
    horse: require("../../assets/images/horse.png"),
    bird: require("../../assets/images/bird.png"),
    dog: require("../../assets/images/dog.png"),
    girl: require("../../assets/images/girl.png"),
  },
  next: ROUTES.ENTRY_TEST25_MCS,
};

export const EntryTest_25_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Sau đây sẽ có giọng đọc các con vật, ba mẹ yêu cầu bé chỉ vào các hình được đọc tương ứng nhé.",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST25_MCA,
};

export const EntryTest_25_MCA: MultiChoiceAnimalProps = {
  title: "Khởi động ban đầu",
  type: "multipleAnimal",
  btnText: "Tiếp tục",
  subBtnText: "Bé không hợp tác",
  choices: ["cat", "horse", "bird", "dog", "girl"],
  images: {
    cat: require("../../assets/images/cat.png"),
    horse: require("../../assets/images/horse.png"),
    bird: require("../../assets/images/bird.png"),
    dog: require("../../assets/images/dog.png"),
    girl: require("../../assets/images/girl.png"),
  },
  next: ROUTES.ENTRY_TEST26_MCS,
};

export const EntryTest_26_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Ba mẹ đặt những câu hỏi sau để bé trả lời:",
  quiz: "1. Con sẽ làm gì khi đang lạnh?\n2. Con sẽ làm gì khi mệt?\n3. Con sẽ làm gì khi đói?",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST26_IAQ,
};

export const EntryTest_26_IAQ: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Bé trả lời được mấy câu hỏi?",
  inputAnswer: true,
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST27,
};

export const EntryTest_27: SingleChoiceQuizProps = {
  questionId: "ET_27",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có trả lời khi được yêu cầu kể tên 1 màu sắc không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST28_IAT,
};

export const EntryTest_28_IAT: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ đặt những câu hỏi sau và yêu cầu bé trả lời thành câu hoàn chỉnh.",
  example: "- Cái bát dùng để làm gì?\n- Cái bát dùng để ăn cơm.",
  quiz: "1. Cái cốc dùng để làm gì?\n2. Cái ghế dùng để làm gì?\n3. Cái bút chì dùng để làm gì?",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST28_IAQ,
};

export const EntryTest_28_IAQ: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Bé trả lời được mấy câu hỏi?",
  inputAnswer: true,
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST29_MCS,
};

export const EntryTest_29_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ yêu cầu trẻ chỉ và đếm số lượng hình khối hiển thị trên màn hình.",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST29_MCS2,
};

export const EntryTest_29_MCS2: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/CountBlock.png"),
  description:
    "Ba mẹ yêu cầu trẻ chỉ và đếm số lượng hình khối hiển thị trên màn hình.",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST29,
};

export const EntryTest_29: SingleChoiceQuizProps = {
  questionId: "ET_29",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có trả lời đúng câu hỏi không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST30_IAT,
};

export const EntryTest_30_IAT: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ đặt những câu hỏi sau và yêu cầu bé trả lời thành câu hoàn chỉnh.",
  example: "- Cái bát dùng để làm gì?\n- Cái bát dùng để ăn cơm.",
  quiz: "1. Cái cốc dùng để làm gì?\n2. Cái ghế dùng để làm gì?\n3. Cái bút chì dùng để làm gì?",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST30_IAQ,
};

export const EntryTest_30_IAQ: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Bé trả lời được mấy câu hỏi?",
  inputAnswer: true,
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST31_MCS,
};

export const EntryTest_31_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Sau đây sẽ có giọng đọc các câu hỏi, ba mẹ yêu cầu bé chỉ vào các hình được đọc tương ứng nhé.",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST31_MCA,
};

export const EntryTest_31_MCA: MultiChoiceAnimalProps = {
  title: "Khởi động ban đầu",
  type: "multipleAnimal",
  btnText: "Tiếp tục",
  subBtnText: "Bé không hợp tác",
  choices: ["cat", "horse", "bird", "dog", "girl"],
  images: {
    cat: require("../../assets/images/cat.png"),
    horse: require("../../assets/images/horse.png"),
    bird: require("../../assets/images/bird.png"),
    dog: require("../../assets/images/dog.png"),
    girl: require("../../assets/images/girl.png"),
  },
  next: ROUTES.ENTRY_TEST32,
};

export const EntryTest_32: SingleChoiceQuizProps = {
  questionId: "ET_32",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé làm theo được bao nhiêu yêu cầu?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST33_IAT,
};

export const EntryTest_33_IAT: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Ba mẹ chuẩn bị 1 đồ vật bất kì\n(VD: cái bút) đưa cho bé nhé.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST33_IAT2,
};

export const EntryTest_33_IAT2: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Ba mẹ hãy yêu cầu bé thực hiện các hành động sau:",
  quiz: "1. Con hãy đặt bút trên bàn\n2. Con hãy đặt bút dưới bàn.\n3. Con hãy đặt bút trước mặt.\n4. Con hãy đặt bút ra sau lưng.",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST33_IAQ,
};

export const EntryTest_33_IAQ: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Bé trả lời được mấy câu hỏi?",
  inputAnswer: true,
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST34,
};

export const EntryTest_34: SingleChoiceQuizProps = {
  questionId: "ET_34",
  title: "Khởi động ban đầu",
  type: "single",
  choices: ["Có", "Không", "Không rõ/Không hợp tác"],
  text: ["Bé có kể tên được 4 màu sắc không?"],
  image: require("../../assets/images/mascot_logo.png"),
  next: ROUTES.ENTRY_TEST35_IAT,
};

export const EntryTest_35_IAT: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ đặt câu hỏi và yêu cầu bé trả lời, hãy lấy ví dụ để bé hiểu cách trả lời.",
  example:
    "- Quả chuối là gì?\n- Quả chuối là một loại trái cây, dùng để ăn, có màu vàng, dài, cong và ngọt.",
  quiz: "1. Quả bóng là gì?\n2. Cái nhà là gì?\n3. Cái bàn chải là gì?\n4. Cái thìa là gì?\n5. Xe đạp là gì?\n6. Cái gối là gì?\n7. Cái ô là gì?\n8. Điện thoại là gì?\nBé phải trả lời được ít nhất 2 yếu tố của mỗi đồ vật: công dụng, màu sắc, thể loại, hình dáng, đặc điểm.",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST35_IAQ,
};

export const EntryTest_35_IAQ: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Bé trả lời được mấy câu hỏi?",
  inputAnswer: true,
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST36_IAT,
};

export const EntryTest_36_IAT: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Ba mẹ hãy đặt câu hỏi để bé trả lời.",
  quiz: "1. Con sẽ làm gì khi đang lạnh?\n2. Con sẽ làm gì khi mệt?\n3. Con sẽ làm gì khi đói?",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST36_IAQ,
};

export const EntryTest_36_IAQ: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Bé trả lời được mấy câu hỏi?",
  inputAnswer: true,
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST37_MCS,
};

export const EntryTest_37_MCS: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/MultiBlock.png"),
  description:
    "Ba mẹ yêu cầu trẻ chỉ và đếm số lượng hình khối hiển thị trên màn hình.",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST38_IAT,
};

export const EntryTest_38_IAT: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Ba mẹ đặt những câu hỏi sau để bé trả lời:",
  quiz: "1. Con voi thì to, con chuột thì …?\n2. Lửa thì nóng, nước đá thì …?\n3. Ban ngày trời sáng, ban đêm trời …?",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST38_IAQ,
};

export const EntryTest_38_IAQ: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Bé trả lời được mấy câu hỏi?",
  inputAnswer: true,
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST39_IAT,
};

export const EntryTest_39_IAT: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description:
    "Ba mẹ đặt câu hỏi và yêu cầu bé trả lời, hãy lấy ví dụ để bé hiểu cách trả lời.",
  example:
    "- Quả chuối là gì?\n- Quả chuối là một loại trái cây, dùng để ăn, có màu vàng, dài, cong và ngọt.",
  quiz: "1. Quả bóng là gì?\n2. Cái nhà là gì?\n3. Cái bàn chải là gì?\n4. Cái thìa là gì?\n5. Xe đạp là gì?\n6. Cái gối là gì?\n7. Cái ô là gì?\n8. Điện thoại là gì?\nBé phải trả lời được ít nhất 2 yếu tố của mỗi đồ vật: công dụng, màu sắc, thể loại, hình dáng, đặc điểm.",
  note: "*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST39_IAQ,
};

export const EntryTest_39_IAQ: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Bé trả lời được mấy câu hỏi?",
  inputAnswer: true,
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST_FINISH,
};

export const EntryTest_Finish: QuizTitleProps = {
  title: "Khởi động ban đầu",
  type: "title",
  source: require("../../assets/images/mascot_logo.png"),
  description: "Hoàn Thành",
  btnText: "Tiếp tục",
  time: false,
  next: ROUTES.ENTRY_TEST1,
};
