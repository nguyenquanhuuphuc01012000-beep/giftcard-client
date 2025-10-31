import { useEffect, useState } from "react";

const Feature = ({ text }) => (
  <div className="bg-[#112b3c] p-4 rounded-xl hover:scale-105 transition-transform duration-300">
    {text}
  </div>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://giftcard-security.onrender.com/api/message")
  .then(res => res.json())
  .then(data => setMessage(data.message))
  .catch(err => setMessage("Không thể kết nối server"));

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041a2f] to-[#010d18] text-white">
      <header className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Gift Card An Ninh Mạng
        </h1>
        <p className="text-gray-300 mt-3">
          Nâng cao hiểu biết – bảo vệ thông tin cá nhân – quà tặng công nghệ cho kỷ nguyên số
        </p>
      </header>

      <main className="max-w-4xl mx-auto bg-[#0a1929] p-8 rounded-2xl shadow-lg border border-cyan-700">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          Học Cách Tự Bảo Vệ Mình Trong Thế Giới Số
        </h2>
        <p className="text-gray-300 mb-6">
          Gift Card của chúng tôi hướng đến việc nâng cao nhận thức về an ninh mạng và giúp bạn có thể tự bảo vệ thông tin cá nhân của mình.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Feature text="🔐 Truy cập nội dung học tập về an ninh mạng" />
          <Feature text="💳 Tích hợp thanh toán bảo mật cao" />
          <Feature text="💡 Nâng cao hiểu biết về cách phòng tránh rủi ro trực tuyến" />
          <Feature text="🎁 Món quà ý nghĩa cho chính bạn và người thân" />
        </div>

        <div className="text-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
            KHÁM PHÁ NGAY
          </button>
          <p className="text-gray-400 mt-8 text-sm italic">{message}</p>
        </div>
      </main>

      <footer className="text-center text-gray-400 mt-12 py-6 border-t border-cyan-800 text-sm">
        © 2025 CyberGift Co. | Cùng bạn bảo vệ thế giới số an toàn hơn
      </footer>
    </div>
  );
}
