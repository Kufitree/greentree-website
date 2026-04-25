import { CheckoutButton } from "@/components/ecommerce/CheckoutButton";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Lock, Zap, RefreshCcw, Video } from "lucide-react";
import { prisma } from "@/lib/db";
import { getActivePrice } from "@/lib/pricing";
import { notFound } from "next/navigation";
import styles from "../../funnel.module.css";

export default async function TemplateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const product = await prisma.product.findUnique({
    where: { slug }
  });

  if (!product) {
    notFound();
  }

  const activePrice = getActivePrice(product);
  const isSale = product.salePrice && activePrice === product.salePrice;

  return (
    <main className={styles.main}>
      {/* 1. Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Badge variant="info">เทมเพลตพรีเมียม</Badge>
          <h1 className="h1">{product.title}</h1>
          <p className="h3 text-subtle" style={{ fontWeight: 400 }}>
            {product.description || "สุดยอดระบบจัดการสำหรับผู้มุ่งมั่นที่ต้องการทวงคืนเวลาของตัวเอง"}
          </p>
        </div>
      </section>

      {/* 2. Main Funnel Layout */}
      <section className={styles.layout}>
        <div className={styles.contentBody}>
          
          <div style={{ backgroundColor: 'var(--border-light)', borderRadius: 'var(--radius-lg)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            ภาพหน้าปกเทมเพลต / หน้าจออินเตอร์เฟซ
          </div>

          <div className={styles.section}>
            <h2 className="h2">สิ่งที่คุณจะได้รับ</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <CheckCircle2 className={styles.icon} size={24} />
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>ระบบต่างๆ ที่ปรับตั้งค่าให้ครบแล้ว</h3>
                  <p className="text-subtle">พร้อมที่จะทำซ้ำและดาวน์โหลดเข้าสู่เวิร์กสเปซของคุณทันทีโดยไม่ต้องตั้งค่าให้ยุ่งยาก</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <RefreshCcw className={styles.icon} size={24} />
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>อัปเดตฟรีตลอดชีพ</h3>
                  <p className="text-subtle">ทุกครั้งที่เราพัฒนาระบบให้ดีขึ้น คุณจะได้รับเวอร์ชันอัปเดตใหม่ฟรี ไม่มีเงื่อนไข</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <Video className={styles.icon} size={24} />
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>วิดีโอแนะนำการใช้งานฉบับสมบูรณ์</h3>
                  <p className="text-subtle">วิดีโอคำแนะนำที่ครอบคลุมที่จะแสดงให้คุณเห็นวิธีการใช้ฟีเจอร์แต่ละอย่างโดยละเอียด</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className="h2">เหมาะสำหรับใคร?</h2>
            <div className={styles.audienceGrid}>
              <div className={styles.audienceItem}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>ฟรีแลนซ์</h3>
                <p className="text-subtle text-sm">เลิกจัดการงานลูกค้าและการออกใบแจ้งหนี้ตกหล่น</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>เจ้าของเอเจนซี่</h3>
                <p className="text-subtle text-sm">สร้างมาตรฐานการดำเนินงานของคุณในศูนย์กลางเดียว</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>พนักงานองค์กรความรู้ (Knowledge Workers)</h3>
                <p className="text-subtle text-sm">สร้างระบบที่ช่วยให้เติบโตไปพร้อมกับความทะเยอทะยานของคุณ</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>ครีเอเตอร์</h3>
                <p className="text-subtle text-sm">จัดทำแผนและจัดการตารางส่งมอบงานของสปอนเซอร์อย่างเป็นระบบ</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Sticky Pricing Sidebar */}
        <aside className={styles.sidebar}>
          <Card padding="lg" variant="highlight">
            <div className={styles.pricingBlock}>
              <div>
                <h3 className="h2" style={{ marginBottom: '0.5rem' }}>สั่งซื้อ {product.title}</h3>
                <p className="text-subtle">รับสิทธิ์เข้าถึงทันทีหลังชำระเงิน</p>
              </div>
              
              <div className={styles.priceContainer}>
                {isSale && <span style={{ textDecoration: 'line-through', color: 'var(--text-secondary)', fontSize: '1.25rem' }}>${(product.regularPrice / 100).toFixed(0)}</span>}
                <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>${(activePrice / 100).toFixed(0)}</span>
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" /> ดาวน์โหลดได้ทันที
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" /> เหมาะสำหรับผู้เริ่มต้น
                </p>
              </div>

              <CheckoutButton productId={product.id} size="lg" fullWidth>
                รับเทมเพลตนี้
              </CheckoutButton>
              
              <div className={styles.secureText}>
                <Lock size={14} /> ชำระเงินอย่างปลอดภัยด้วย Stripe
              </div>
            </div>
          </Card>
        </aside>
      </section>

      {/* 4. Bottom CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className="h2">พร้อมที่จะทรานส์ฟอร์มระบบงานของคุณแล้วหรือยัง?</h2>
          <p className="text-subtle h3" style={{ fontWeight: 400 }}>
            ร่วมกับผู้ประกอบวิชาชีพและเจ้าของกิจการอีกหลายพันคนที่ได้อัปเกรดชีวิตดิจิทัลของตนเอง
          </p>
          <CheckoutButton productId={product.id} size="lg" variant="primary">
            รับ {product.title}
          </CheckoutButton>
        </div>
      </section>
    </main>
  );
}
