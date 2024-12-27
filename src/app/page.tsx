import Image from "next/image";
export default function Home() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image src="/toto.jpg" alt="toto" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
