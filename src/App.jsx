import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Đang kết nối tới server...");

  useEffect(() => {
    fetch("https://giftcard-security.onrender.com/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Không thể kết nối server"));
  }, []);

  // 🌟 Ánh sáng di chuyển theo chuột
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      document.body.style.setProperty("--x", `${clientX}px`);
      document.body.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🌌 Hiệu ứng parallax 3D khi rê chuột
  useEffect(() => {
    const handleParallax = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      document.body.style.setProperty("--rotateX", `${-y}deg`);
      document.body.style.setProperty("--rotateY", `${x}deg`);
    };
    window.addEventListener("mousemove", handleParallax);
    return () => window.removeEventListener("mousemove", handleParallax);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start text-white overflow-x-hidden relative">
      {/* 🌟 Dòng chữ chạy */}
      <div className="marquee-container">
        <div className="marquee-content">
          Ngày 21/10, Thủ tướng Chính phủ Phạm Minh Chính ký ban hành Chỉ thị số 32/CT-TTg yêu cầu các bộ ngành, địa phương nâng cao năng lực bảo vệ bí mật nhà nước trong tình hình mới. Là lực lượng chuyên trách trong bảo vệ thông tin bí mật nhà nước, Ban Cơ yếu Chính phủ được giao các nhiệm vụ đặc biệt quan trọng. Trong đó, tham mưu xây dựng và phát triển hệ thống thông tin mật mã quốc gia. Giúp Bộ trưởng Bộ Quốc phòng thực hiện quản lý nhà nước đối với hoạt động nghiên cứu, sản xuất, cung cấp và sử dụng sản phẩm mật mã để bảo vệ thông tin bí mật nhà nước.
        </div>
      </div>
      {/* 🧊 Nền động hologram */}
      <div className="cubes">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="cube"></div>
        ))}
      </div>

      <div className="triangles">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="triangle"></div>
        ))}
      </div>

      {/* 🌐 Nội dung chính */}
      <div className="w-full max-w-6xl mx-auto px-6 py-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg mb-3">
          Gift Card An Ninh Mạng
        </h1>
        <p className="text-gray-100 text-center mb-12 text-lg">
          Nâng cao hiểu biết – bảo vệ thông tin cá nhân – quà tặng công nghệ cho kỷ nguyên số
        </p>

        {/* GIỚI THIỆU */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-cyan-500/20 mb-16">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4 text-center">
            Học Cách Tự Bảo Vệ Mình Trong Thế Giới Số
          </h2>
          <p className="text-gray-200 mb-6 text-center">
            Gift Card của chúng tôi hướng đến việc nâng cao nhận thức về an ninh mạng
            và giúp bạn có thể tự bảo vệ thông tin cá nhân của mình.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-xl p-4 flex items-center gap-2 border border-cyan-500/30 hover:bg-black/50 transition-all">
              <span>🔒</span> Truy cập nội dung học tập về an ninh mạng
            </div>
            <div className="bg-black/30 rounded-xl p-4 flex items-center gap-2 border border-cyan-500/30 hover:bg-black/50 transition-all">
              <span>💳</span> Tích hợp thanh toán bảo mật cao
            </div>
            <div className="bg-black/30 rounded-xl p-4 flex items-center gap-2 border border-cyan-500/30 hover:bg-black/50 transition-all">
              <span>💡</span> Nâng cao hiểu biết về cách phòng tránh rủi ro trực tuyến
            </div>
            <div className="bg-black/30 rounded-xl p-4 flex items-center gap-2 border border-cyan-500/30 hover:bg-black/50 transition-all">
              <span>🎁</span> Món quà ý nghĩa cho chính bạn và người thân
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-8 rounded-full transition-all duration-200 shadow-md hover:shadow-cyan-400/40">
              KHÁM PHÁ NGAY
            </button>
          </div>

          <p className="text-cyan-300 text-center mt-4 italic">{message}</p>
        </div>

        {/* 🌟 SẢN PHẨM & DỊCH VỤ NỔI BẬT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-300 text-center mb-10">
            Giới thiệu sản phẩm
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/product1.jpg",
                title: "Security Calendar",
                desc: "Kiểm soát kế hoạch, thời gian và giúp nâng cao kiến thức bảo mật cho người thân.",
              },
              {
                img: "/images/product2.jpg",
                title: "Gift Card",
                desc: "Khám phá cách bảo vệ dữ liệu cá nhân trong thời đại số.",
              },
              {
                img: "/images/product3.jpg",
                title: "Giải Pháp phòng tránh",
                desc: "Đơn giản, dễ hiểu",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/30 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-cyan-500/30 transition-transform duration-300 border border-cyan-500/20"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{item.desc}</p>
                  <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200">
                    Khám phá
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="w-full py-6 text-center text-gray-200 text-sm bg-black/20 border-t border-white/10 relative z-10">
        © 2025 CyberGift Co. | Cùng bạn bảo vệ thế giới số an toàn hơn
      </footer>
    </div>
  );
}

export default App;
