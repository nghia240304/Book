import React from "react";
import eBook from "../asset/Logo.png";

function Footer() {
  return (
    <footer className="mx-auto bg-black">
      <div className="flex justify-center pt-3">
        <img src={eBook} alt="Logo" className="w-16 h-16 -mt-3" />
      </div>
      <div className="flex flex-col gap-2 pb-3 mt-3 text-white">
        <div className="flex justify-center">Điều khoản dịch vụ</div>
        <div className="flex justify-center">Chính sách bảo mật</div>
        <div className="flex justify-center">Về bản quyền</div>
        <div className="flex justify-center">Hướng dẫn sử dụng</div>
      </div>
    </footer>
  );
}

export default Footer;
