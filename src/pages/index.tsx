import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Button>Click Me now @@</Button>
    </div>
  );
}
