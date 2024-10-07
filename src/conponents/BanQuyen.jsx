import React from "react";

function BanQuyen() {
  return (
    <div className="pb-5 mx-5">
      <h2 className="pt-5 pb-8 font-bold text-red-500">Về bản quyền</h2>
      <ul className="ml-5 list-decimal">
        <li>
          Nền tảng và các website trong hệ thống luôn ý thức rõ ràng về việc tôn
          trọng bản quyền của các tác giả, tác phẩm, các sản phẩm trí tuệ.
        </li>
        <li>
          Website là một nền tảng mở, mọi thành viên có quyền đăng truyện do
          mình sáng tác hoặc dịch từ các ngôn ngữ khác.
        </li>
        <li>
          Nền tảng luôn cố gắng đảm bảo rằng tất cả nội dung trong hệ thống đều
          hợp pháp, nhưng chúng tôi không cam kết chắc chắn rằng có thể kiểm
          soát mọi thông tin trên ứng dụng.
        </li>
        <li>
          Nền tảng sẽ sử dụng mọi biện pháp về công nghệ như gỡ bỏ, cấm IP đối
          với các tác phẩm có vấn đề với bản quyền hoặc được tác giả gốc yêu
          cầu.
        </li>
        <li>
          Nền tảng không đại diện cho nhóm dịch, người dịch là thành viên trên
          các website hệ thống.
        </li>
        <li>
          Nền tảng không có trách nhiệm truy cứu, kiện tụng và phân giải đối với
          các tác phẩm không do nền tảng sở hữu bản quyền.
        </li>
      </ul>
      <div>
        Tất cả các vấn đề liên quan tới bản quyền, vui lòng liên hệ trực tiếp
        qua email <span className="font-bold">hnghialop91dhp@gmail.com</span>
      </div>
    </div>
  );
}

export default BanQuyen;
