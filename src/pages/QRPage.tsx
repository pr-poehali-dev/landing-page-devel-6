import { QRCodeSVG } from "qrcode.react";

const SITE_URL = "https://upgradevl.ru";

const QRPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #1a0a00 0%, #3d1f00 40%, #6b3a00 70%, #1a0a00 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-8 p-12 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(212,175,55,0.3)",
          boxShadow: "0 8px 60px rgba(212,175,55,0.15)",
        }}
      >
        <div className="text-center">
          <h1
            className="text-3xl font-bold mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#D4AF37",
              textShadow: "0 2px 20px rgba(212,175,55,0.5)",
            }}
          >
            Квест «Апгрейд»
          </h1>
          <p className="text-sm" style={{ color: "rgba(212,175,55,0.7)" }}>
            Отсканируй, чтобы перейти на сайт
          </p>
        </div>

        <div
          className="p-5 rounded-2xl"
          style={{
            background: "#fff",
            boxShadow: "0 4px 30px rgba(212,175,55,0.4)",
          }}
        >
          <QRCodeSVG
            value={SITE_URL}
            size={240}
            fgColor="#1a0a00"
            bgColor="#ffffff"
            level="H"
          />
        </div>

        <p
          className="text-base font-medium tracking-wide"
          style={{ color: "rgba(212,175,55,0.9)" }}
        >
          upgradevl.ru
        </p>
      </div>
    </div>
  );
};

export default QRPage;
