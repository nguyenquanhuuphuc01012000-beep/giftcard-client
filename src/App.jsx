import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Đang kết nối tới server...");

  useEffect(() => {
    fetch("https://giftcard-security.onrender.com/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Không thể kết nối server"));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-4">
      {/* PHẦN HEADER */}
      <h1 className="text-4xl font-bold text-cyan-400 mb-2 text-center">
        Gift Card An Ninh Mạng
      </h1>
      <p className="text-slate-300 text-center mb-10">
        Nâng cao hiểu biết – bảo vệ thông tin cá nhân – quà tặng công nghệ cho kỷ nguyên số
      </p>

      {/* PHẦN GIỚI THIỆU */}
      <div className="bg-slate-800/50 p-8 rounded-2xl shadow-xl w-full max-w-4xl mb-16">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">
          Học Cách Tự Bảo Vệ Mình Trong Thế Giới Số
        </h2>
        <p className="text-slate-300 mb-6 text-center">
          Gift Card của chúng tôi hướng đến việc nâng cao nhận thức về an ninh mạng
          và giúp bạn có thể tự bảo vệ thông tin cá nhân của mình.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-2">
            <span>🔒</span> Truy cập nội dung học tập về an ninh mạng
          </div>
          <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-2">
            <span>💳</span> Tích hợp thanh toán bảo mật cao
          </div>
          <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-2">
            <span>💡</span> Nâng cao hiểu biết về cách phòng tránh rủi ro trực tuyến
          </div>
          <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-2">
            <span>🎁</span> Món quà ý nghĩa cho chính bạn và người thân
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-200">
            KHÁM PHÁ NGAY
          </button>
        </div>

        <p className="text-slate-400 text-center mt-4 italic">{message}</p>
      </div>

      {/* PHẦN SẢN PHẨM */}
      <section className="w-full max-w-6xl px-4 mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">
          Sản Phẩm & Dịch Vụ Nổi Bật
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="/images/product1.jpg" alt="Gift Card" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                Gift Card Bảo Mật Cá Nhân
              </h3>
              <p className="text-slate-300 mb-4">
                Thẻ quà tặng giúp bạn truy cập khoá học về an toàn mạng.
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200">
                Khám phá
              </button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="/images/product2.jpg" alt="Khóa học" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                Khóa Học An Ninh Mạng Cơ Bản
              </h3>
              <p className="text-slate-300 mb-4">
                Khám phá cách bảo vệ dữ liệu cá nhân trong thời đại số.
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200">
                Khám phá
              </button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="/images/product3.jpg" alt="Gói Premium" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                Gói Premium Tặng Người Thân
              </h3>
              <p className="text-slate-300 mb-4">
                Món quà ý nghĩa giúp nâng cao kiến thức bảo mật cho người thân.
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200">
                Khám phá
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-slate-500 text-center text-sm mt-auto pb-6">
        © 2025 CyberGift Co. | Cùng bạn bảo vệ thế giới số an toàn hơn
      </footer>
    </div>
  );
}

export default App;
