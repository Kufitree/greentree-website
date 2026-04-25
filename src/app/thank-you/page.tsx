import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="container section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card padding="lg" variant="highlight" style={{ maxWidth: '500px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <CheckCircle2 size={64} color="var(--accent-primary)" />
        </div>
        <h1 className="h1" style={{ marginBottom: '1rem' }}>การชำระเงินสำเร็จ!</h1>
        <p className="text-subtle h3" style={{ marginBottom: '2rem' }}>
          ขอขอบคุณสำหรับการสั่งซื้อ เรากำลังเตรียมคำสั่งซื้อของคุณอยู่ในตอนนี้
        </p>
        
        <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '2rem' }}>
          <h3 className="h3" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Mail size={20} /> โปรดตรวจสอบอีเมลของคุณ
          </h3>
          <p className="text-subtle">
            เราได้ส่งอีเมลที่มีหัวข้อว่า <strong>"ลิงก์สำหรับเข้าสู่เนื้อหาของคุณ"</strong> ซึ่งบรรจุลิงก์เพื่อให้คุณสามารถคัดลอกเทมเพลตและวิธีเข้าสู่คอร์สเรียนไปให้คุณแล้ว
          </p>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          หากคุณไม่ได้รับอีเมลภายใน 5 นาที โปรดตรวจสอบโฟลเดอร์จดหมายขยะ (Spam) ของคุณ หรือติดต่อที่ support@creatorstore.com
        </p>

        <Link href="/">
          <Button variant="outline" fullWidth>กลับหน้าแรก</Button>
        </Link>
      </Card>
    </main>
  );
}
