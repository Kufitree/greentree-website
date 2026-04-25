import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import styles from "../funnel.module.css";

export const metadata = {
  title: "ยกเลิกคำสั่งซื้อ | CreatorStore",
  description: "คำสั่งซื้อถูกยกเลิกแล้ว ไม่มีการเรียกเก็บเงินใดๆ",
};

export default function CancelPage() {
  return (
    <main className={styles.main} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-tertiary)' }}>
      <section className="container" style={{ maxWidth: '600px', padding: '4rem 1rem' }}>
        <Card padding="lg" variant="default" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', color: 'var(--text-secondary)', border: '1px solid var(--border-light)' }}>
            <AlertCircle size={40} />
          </div>
          
          <div>
            <h1 className="h1" style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>ยกเลิกการชำระเงิน</h1>
            <p className="text-subtle h3" style={{ fontWeight: 400 }}>
              กระบวนการชำระเงินถูกยกเลิก และจะไม่มีการเรียกเก็บเงินจากคุณแต่อย่างใด
            </p>
          </div>

          <p className="text-subtle text-sm">
            หากคุณพบปัญหาในการชำระเงิน หรือเปลี่ยนใจ คุณสามารถกลับไปเลือกซื้อสินค้าอื่นๆ และเริ่มกระบวนการชำระเงินใหม่ได้ตลอดเวลา
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
            <Link href="/">
              <Button size="lg" variant="outline">กลับสู่หน้าแรก</Button>
            </Link>
            <Link href="/templates">
              <Button size="lg" variant="primary">ไปที่แคตตาล็อกระบบ</Button>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
