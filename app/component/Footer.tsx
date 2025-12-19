import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white py-10">
      <div className="container mx-auto px-4 md:px-8 text-center justify-between md:text-left flex items-center flex-col md:flex-row">
        <div>
          <p className="text-2xl font-bold mb-4">Lagos Elite Interiors</p>
        <p className="mb-6">
          Transforming luxury homes, estates, offices, and churches across Lagos.
        </p>
        </div>
        <div className="space-y-2 mb-8">
          <p>📧 brightbasicsenterprises@gmail.com</p>
          <p>📞 +234 9063846519/08072478674</p>
          <p>📱 WhatsApp: +234 9063846519</p>
          <p className="mt-4">Serving: Lekki • Ikeja • Ikorodu</p>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lagos Elite Interiors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}