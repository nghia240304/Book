import React from "react";

function ChinhSachBaoMat() {
  return (
    <div className="pb-5 mx-5">
      <h2 className="py-5 font-bold text-red-500">Chính sách bảo mật</h2>
      <div>
        <span>
          Nền tảng đảm bảo các điều sau về tính riêng tư của người tham gia hoạt
          động tại tất cả các website trong hệ thống:
        </span>
        <ul className="ml-6 list-decimal">
          <li>
            Không tiết lộ địa chỉ email, hay các thông tin cần bảo mật khác cho
            bên thứ 3, trừ khi bạn vi phạm nội quy.
          </li>
          <li>
            Không tiết lộ vị trí của bạn cho bên thứ 3. Đồng thời chỉ sử dụng
            thông tin này để cải thiện chức năng của website. Mọi việc đều hoàn
            toàn tự động.
          </li>
          <li>
            Hệ thống lưu trữ các hoạt động mang tính công khai khi bạn tham gia
            hoạt động gồm: các hoạt động chung về truyện và hoạt động chung về
            tài khoản
          </li>
          <li>
            Các thông tin bạn nhập vào website hầu hết đều là công khai, vì vậy
            chúng tôi không chịu trách nhiệm về việc giữ tính riêng tư các thông
            tin đó.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChinhSachBaoMat;
