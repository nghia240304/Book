import React from "react";

function DieuKhoan() {
  return (
    <div className="pb-5 mx-10">
      <h1 className="py-5 font-bold text-red-500">Điều khoản dịch vụ</h1>
      <div>
        Khi tham gia sử dụng dịch vụ cung cấp bởi{" "}
        <span className="font-bold">EBOOK</span>, bạn phải đồng ý và tuân thủ
        các quy định sau.
      </div>
      <br />
      <div>
        Quy định này áp dụng cho mọi đối tượng tham gia hoạt động tại website,
        không kể là khách, thành viên, tác giả, dịch giả, biên tập viên, quản
        trị viên, admin hay bất cứ thành viên nào khác.
      </div>
      <br />
      <div>
        <div>Quy định gồm 2 bên:</div>
        <br />
        <ul>
          <li>
            <span className="font-bold">EBOOK</span> cung cấp dịch vụ trên
            internet
          </li>
          <li>
            Khách hàng gọi tắt là KH, sử dụng dịch vụ của{" "}
            <span className="font-bold">EBOOK</span> trên internet.
          </li>
        </ul>
      </div>
      <br />
      <div>
        <div>Nội dung:</div>
        <br />
        <ul className="ml-5 list-decimal">
          <li>
            Không được có những từ ngữ gay gắt, đả kích, xúc phạm, bêu xấu cá
            nhân và tổ chức trên <span className="font-bold">EBOOK</span>.
          </li>
          <li>
            Không phát tán và truyền bá thông tin bất hợp pháp, lừa gạt, bôi
            nhọ, sỉ nhục, tục tĩu, khiêu dâm, xúc phạm, đe dọa, lăng mạ, thù
            hận, kích động… hoặc trái với chuẩn mực đạo đức chung của xã hội.
          </li>
          <li>
            Không được gửi hoặc truyền bất kỳ thông tin hoặc phần mềm nào có
            chứa bất kỳ loại virus, trojan, bọ hay các thành phần nguy hại nào
            đến sự an toàn của hệ thống dịch vụ.
          </li>
          <li>Không được dẫn link hoặc nhắc đến website khác.</li>
          <li>
            Không spam tin nhắn, bình luận, bài viết hay bất cứ hình thức nào
            tại <span className="font-bold">EBOOK</span>.
          </li>
          <li>Đánh giá và bình luận phải sử dụng tiếng việt có dấu.</li>
          <li>
            Đánh giá khen/chê truyện một cách chung chung không mang lại giá trị
            cho người đọc sẽ bị xóa.
          </li>
          <li>Đánh giá có điểm số sai lệch với nội dung sẽ bị xóa</li>
          <li>
            Không để avatar tục tĩu, vi phạm pháp luật hoặc ảnh hưởng đến người
            khác.
          </li>
          <li>
            Không tận dụng các bugs (lỗi) của chương trình nhằm phá hoại sự ổn
            định của <span className="font-bold">EBOOK</span>.
          </li>
          <li>
            Sẽ khóa vĩnh viễn các tài khoản copy truyện thu phí ra ngoài mà
            không được sự cho phép bằng văn bản của{" "}
            <span className="font-bold">EBOOK</span>.
          </li>
          <li>Thành viên vi phạm sẽ bị khóa nick mà không cần báo trước.</li>
          <li>
            Nhân viên quản lý có quyền xóa nội dung gây hại cho website mà không
            cần báo trước.
          </li>
          <li>
            Nội dung các quy định trên có thể thay đổi mà không cần báo trước
          </li>
        </ul>
        <br />
      </div>
      <div>
        <div>Quy định khi đăng truyện</div>
        <br />
        <ul className="ml-5 list-decimal">
          <li>
            Không được phép đăng các truyện liên quan tới chính trị, tôn giáo,
            tình dục, sắc hiệp, dâm hiệp, nói xấu Việt Nam.
          </li>
          <li>
            Chỉ được đăng các truyện do bạn tự sáng tác hoặc bạn có quyền sử
            dụng.
          </li>
          <li>
            Nội dung giới thiệu truyện và nội dung chương truyện trình bày phải
            phân đoạn rõ ràng, nếu viết thành 1 khối dày đặc chữ sẽ bị xóa.
          </li>
          <li>
            Không được quảng cáo các trang web, nền tảng, dịch vụ khác dưới mọi
            hình thức.
          </li>
          <li>
            Không được đưa thông tin donate/ủng hộ của các trang web, nền tảng,
            dịch vụ khác dưới mọi hình thức.
          </li>
          <li>
            Ảnh bìa truyện không có các hình ảnh khiêu dâm, kích dục, kích động,
            thù hằn, ám chỉ đến tôn giáo, chính trị, các hoạt động bị cấm bởi
            pháp luật.
          </li>
          <li>
            Tất cả truyện bạn đăng lên <span className="font-bold">EBOOK</span>{" "}
            có bản quyền thuộc về cá nhân của bạn,{" "}
            <span className="font-bold">EBOOK</span> không có quyền lợi hay
            nghĩa vụ đăng ký bản quyền hộ bạn. Khi đăng truyện lên hệ thống bạn
            cho phép <span className="font-bold">EBOOK</span> và các website
            thuộc hệ thống quyền khai thác quảng cáo và quyền thu hộ trả phí (mở
            khóa) các chương truyện trên các truyện bạn đã đăng.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DieuKhoan;
