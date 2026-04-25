import { CheckoutButton } from "@/components/ecommerce/CheckoutButton";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Lock, BookOpen, Clock, PlayCircle } from "lucide-react";
import { prisma } from "@/lib/db";
import { getActivePrice } from "@/lib/pricing";
import { notFound } from "next/navigation";
import styles from "../../funnel.module.css";

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
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
          <Badge variant="warning">เปิดรับสมัครลงทะเบียนแล้ว</Badge>
          <h1 className="h1">{product.title}</h1>
          <p className="h3 text-subtle" style={{ fontWeight: 400 }}>
            {product.description || "ควบคุมการทำงานและจัดการเวลาของคุณได้อย่างเชี่ยวชาญด้วยคอร์สเรียนมาสเตอร์คลาสของเรา"}
          </p>
        </div>
      </section>

      {/* 2. Main Funnel Layout */}
      <section className={styles.layout}>
        <div className={styles.contentBody}>
          
          <div style={{ backgroundColor: 'var(--border-light)', borderRadius: 'var(--radius-lg)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            วิดีโอแนะนำคอร์สเรียน (จำลอง)
          </div>

          <div className={styles.section}>
            <h2 className="h2">สิ่งที่คุณจะได้รับ</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <PlayCircle className={styles.icon} size={24} />
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>บทเรียนคุณภาพสูงกว่า 40+ ตอน</h3>
                  <p className="text-subtle">วิดีโอเนื้อหากระชับ นำไปใช้ได้จริง ที่จะพาดูกระบวนการสร้างแบบละเอียด</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <BookOpen className={styles.icon} size={24} />
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>แบบฝึกหัดประกอบการเรียน (Workbook)</h3>
                  <p className="text-subtle">แบบฝึกหัดดิจิทัลสำหรับร่างกระบวนการทำงานของคุณไปพร้อมกับสิ่งที่เรียนรู้</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <Clock className={styles.icon} size={24} />
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>สิทธิ์การเข้าถึงตลอดชีพ</h3>
                  <p className="text-subtle">เรียนรู้ตามจังหวะของคุณเอง สามารถกลับมาทบทวนได้ทุกเมื่อที่ระบบของคุณต้องการการอัปเดต</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className="h2">เหมาะสำหรับใคร?</h2>
            <div className={styles.audienceGrid}>
              <div className={styles.audienceItem}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>คนที่มีงานล้นมือจนไม่รู้จะเริ่มจากตรงไหน (Task Paralysis)</h3>
                <p className="text-subtle text-sm">รายการสิ่งที่ต้องทำยาวเหยียดจนคุณไม่รู้ว่าควรเริ่มจากตรงไหนดี</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>ข้อมูลล้นตัว (Information Overload)</h3>
                <p className="text-subtle text-sm">คุณจะบันทึกบทความและวิดีโอเก็บไว้ แต่สุดท้ายก็มักจะหาไม่เจอเสมอ</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>คนชอบเปลี่ยนแอปพลิเคชันไปมา (App Hoppers)</h3>
                <p className="text-subtle text-sm">คุณจะสลับใช้ระหว่างแอปพลิเคชันไปมาด้วยความหวังว่าตัวถัดไปคือตัวที่ดีกว่า</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>มืออาชีพที่ได้รับความกดดัน</h3>
                <p className="text-subtle text-sm">คุณต้องการพับจอแล็ปท็อปลงสบายๆในตอน 5 โมงเย็น โดยที่รู้ว่าทุกอย่างถูกจัดการให้คุณแล้ว</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Sticky Pricing Sidebar */}
        <aside className={styles.sidebar}>
          <Card padding="lg" variant="highlight">
            <div className={styles.pricingBlock}>
              <div>
                <h3 className="h2" style={{ marginBottom: '0.5rem' }}>สมัครเรียนตอนนี้</h3>
                <p className="text-subtle">เริ่มเข้าคอร์สเรียนได้ทันทีหลังจากสั่งซื้อสำเร็จ</p>
              </div>
              
              <div className={styles.priceContainer}>
                {isSale && <span style={{ textDecoration: 'line-through', color: 'var(--text-secondary)', fontSize: '1.25rem' }}>${(product.regularPrice / 100).toFixed(0)}</span>}
                <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>${(activePrice / 100).toFixed(0)}</span>
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" /> รับประกันคืนเงิน 30 วัน
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" /> สามารถเข้าเรียนได้ทันที
                </p>
              </div>

              <CheckoutButton productId={product.id} size="lg" fullWidth>
                เข้าสู่คลาสเรียน (Masterclass)
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
          <h2 className="h2">พร้อมที่จะบริหารชีวิตให้ดียิ่งขึ้นแล้วหรือยัง?</h2>
          <p className="text-subtle h3" style={{ fontWeight: 400 }}>
            ถึงเวลาเปลี่ยนจากการแค่ 'จัดการงาน' เป็นการ 'ลงมือทำงาน' และสร้างผลลัพธ์
          </p>
          <CheckoutButton productId={product.id} size="lg" variant="primary">
            สมัครเรียนวันนี้
          </CheckoutButton>
        </div>
      </section>
    </main>
  );
}
