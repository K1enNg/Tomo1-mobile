import { SignUpPageProps } from "@/components/SignUpPages";
import { InformationProps } from "@/types/components";

import { ROUTES } from "./Navigation";

export const PAGE_1: InformationProps = {
  source: require("../assets/images/informations/img_1.png"),
  title: "Chào mừng bạn!",
  description:
    "Ứng dụng của chúng tôi giúp bạn khám phá thông tin và trải nghiệm học tập thú vị mỗi ngày.",
  buttonLabels: ["Tiếp tục", "Bỏ qua"],
  nextScreen: ROUTES.INFORMATION2,
  skipScreen: ROUTES.SIGNUP,
};

export const PAGE_2: InformationProps = {
  source: require("../assets/images/informations/img_2.png"),
  title: "Khám phá tính năng",
  description: "Dễ dàng theo dõi tiến trình, lưu trữ thông tin và chia sẻ kiến thức với bạn bè.",
  buttonLabels: ["Tiếp tục", "Bỏ qua"],
  nextScreen: ROUTES.INFORMATION3,
  skipScreen: ROUTES.SIGNUP,
};

export const PAGE_3: InformationProps = {
  source: require("../assets/images/informations/img_3.png"),
  title: "Bắt đầu ngay",
  description:
    "Tạo tài khoản để bắt đầu hành trình của bạn cùng chúng tôi. Đăng ký hoặc đăng nhập để tiếp tục.",
  buttonLabels: ["Đăng ký", "Đăng nhập"],
  extraText: "Bạn đã có tài khoản?",
  nextScreen: ROUTES.SIGNUPNAME,
  skipScreen: ROUTES.SIGNUP,
};

export const SignUpNAME = (
  value: string,
  onChange: (text: string) => void
): SignUpPageProps => ({
  title: "Tên của ba mẹ là gì?",
  placeholder: ["Họ và tên"],
  fieldKey: ["parentName"],
  value,
  onChange,
  nextScreen: ROUTES.SIGNUPPHONE,
  prevScreen: ROUTES.INFORMATION3,
  buttonLabel: "Tiếp tục",
  errorText: "Vui lòng nhập họ và tên của ba mẹ.",
  source: require("../assets/images/informations/arrow.png"),
  clear: require("../assets/images/informations/cancel.png"),
});

export const SignUpPHONE = (
  value: string,
  onChange: (text: string) => void
): SignUpPageProps => ({
  title: "Số điện thoại của ba mẹ",
  placeholder: ["Số điện thoại"],
  fieldKey: ["phoneNumber"],
  value,
  onChange,
  nextScreen: ROUTES.SIGNUPPASSWORD,
  prevScreen: ROUTES.SIGNUPNAME,
  buttonLabel: "Tiếp tục",
  errorText: "Vui lòng nhập số điện thoại của ba mẹ.",
  source: require("../assets/images/informations/arrow.png"),
  clear: require("../assets/images/informations/cancel.png"),
});

export const SignUpPASSWORD = (
  value: string,
  value2: string,
  onChange: (text: string) => void,
  onChange2: (text: string) => void
): SignUpPageProps => ({
  title: "Đăng ký",
  placeholder: ["Mật khẩu", "Nhập lại mật khẩu"],
  fieldKey: ["password", "verifyPassword"],
  value,
  value2,
  onChange,
  onChange2,
  nextScreen: ROUTES.SIGNIN,
  prevScreen: ROUTES.SIGNUPPHONE,
  buttonLabel: "Đăng ký",
  errorText: "Vui lòng nhập mật khẩu.",
  source: require("../assets/images/informations/arrow.png"),
  clear: require("../assets/images/informations/cancel.png"),
  footNote: "Đồng ý với điều khoản của Google Play"
});

export const SignIn = (
  value: string,
  value2: string,
  onChange: (text: string) => void,
  onChange2: (text: string) => void
): SignUpPageProps => ({
  title: "Đăng nhập",
  placeholder: ["Số điện thoại", "Mật khẩu"],
  fieldKey: ["phoneNumber", "password"],
  value,
  value2,
  onChange,
  onChange2,
  nextScreen: ROUTES.ET_F129,
  buttonLabel: "Đăng nhập",
  errorText: "Vui lòng nhập mật khẩu.",
  source: require("../assets/images/informations/arrow.png"),
  clear: require("../assets/images/informations/cancel.png"),
  footNote: "Quên mật khẩu?"
});