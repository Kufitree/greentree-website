import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import styles from "./page.module.css";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Layout, BookOpen, Settings } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={`${styles.hero} container animate-fade-in-up`}>
        <div className={styles.heroContent}>
          <Badge variant="info">ระบบจัดการธุรกิจและชีวิตที่ครบวงจร</Badge>
          <h1 className="h1">จัดระเบียบทุกเป้าหมาย ให้กลายเป็นความสำเร็จที่จับต้องได้</h1>
          <p className={`text-subtle h3 ${styles.heroDescription}`}>
            GreenTree ออกแบบระบบการทำงานผ่าน Notion สำหรับมืออาชีพ ที่ต้องการทำงานให้ฉลาดขึ้น ไม่ใช่ทำงานหนักขึ้น
          </p>
          <p className="text-subtle" style={{ marginTop: "-0.5rem" }}>
            ไม่ต้องเสียเวลาเริ่มต้นจากศูนย์ เราสรุปวิธีที่ดีที่สุดมาให้คุณพร้อมใช้งานทันที
          </p>
          <div className={styles.heroActions}>
            <Link href="/templates">
              <Button size="lg" variant="primary">เลือกดูเทมเพลตพรีเมียม</Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline">เรียนรู้วิธีจัดการระบบ</Button>
            </Link>
          </div>
          <div className={styles.trustSignals}>
            <div className={styles.avatars}>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}></div>
            </div>
            <span className="text-subtle text-sm">ได้รับความไว้วางใจจากมืออาชีพและเจ้าของธุรกิจกว่า 2,000 คน</span>
          </div>
        </div>
      </section>

      {/* Business Introduction Section */}
      <section className={`section container animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-xl) 0' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>ทำไมต้องเป็น GreenTree?</h2>
          <p className="h3 text-subtle" style={{ fontWeight: 400, marginBottom: '2.5rem' }}>
            เราเชื่อว่าซอฟต์แวร์ที่ดีต้องช่วยลดภาระ ไม่ใช่เพิ่มภาระการทำงานใหม่ 
            เทมเพลตทุกชิ้นของเราจึงถูกออกแบบด้วยหลักการที่เน้นการปฏิบัติ เพื่อให้คุณรวบรวมสมาธิไปกับงานสำคัญจริงๆ
          </p>
          <div className={styles.grid} style={{ textAlign: 'left', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <Card padding="md" style={{ border: 'none', backgroundColor: 'var(--bg-tertiary)' }}>
              <Star size={28} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.25rem' }}>ออกแบบมาจากปัญหาจริง</h3>
              <p className="text-subtle">ดีไซน์ที่ไม่มีความซับซ้อนเกินจำเป็น โฟกัสไปที่กลไกการแก้ไขปัญหาที่คนทำงานต้องพบเจอเป็นประจำ</p>
            </Card>
            <Card padding="md" style={{ border: 'none', backgroundColor: 'var(--bg-tertiary)' }}>
              <CheckCircle2 size={28} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.25rem' }}>โครงสร้างพร้อมใช้แบบสำเร็จรูป</h3>
              <p className="text-subtle">คลิกติดตั้งเพียงครั้งเดียว ก็สามารถเข้าถึงระบบงานที่มีประสิทธิภาพได้ทันทีโดยไม่ต้องตั้งค่าใหม่</p>
            </Card>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <Link href="/about">
              <Button variant="outline" size="md">ทำความรู้จักเราเพิ่มเติม</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions Section */}
      <section className={`section animate-fade-in-up`} style={{ backgroundColor: 'var(--bg-tertiary)', margin: 'var(--spacing-2xl) 0', animationDelay: '0.2s', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
            <h2 className="h2">ปัญหาเหล่านี้ ทำให้คุณเหนื่อยฟรีอยู่ใช่ไหม?</h2>
            <p className="text-subtle h3" style={{ fontWeight: 400, marginTop: '0.5rem' }}>
              เปลี่ยนจากการรับมือความวุ่นวายรายวัน เป็นระบบที่จัดการข้อมูลให้คุณโดยอัตโนมัติ
            </p>
          </div>
          <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Card padding="md" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#dc2626', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>✕</span> ข้อมูลกระจัดกระจาย ค้นหายาก
              </div>
              <p className="text-subtle" style={{ flexGrow: 1 }}>
                ไฟล์งานอยู่ในคอมพิวเตอร์ ข้อมูลลูกค้าอยู่ในแชท นัดหมายอยู่ในจดหมาย ทำให้เสียเวลามากกว่า 20% ในทุกวันไปกับการค้นหา
              </p>
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} /> โซลูชัน: แดชบอร์ดสรุปงานทั้งหมดในที่เดียว
                </div>
              </div>
            </Card>

            <Card padding="md" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#dc2626', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>✕</span> ระบบเดิมใช้ยาก ทีมไม่ยอมใช้
              </div>
              <p className="text-subtle" style={{ flexGrow: 1 }}>
                ลองตั้งค่าระบบซับซ้อนให้ทีมใช้ สุดท้ายก็ล้มเหลวเพราะหน้าตาที่ไม่เป็นมิตรและต้องคลิกหลายหน้ากว่าจะรู้ว่าต้องทำอะไร
              </p>
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} /> โซลูชัน: ระบบที่คลีน เรียบง่าย ใครก็ใช้เป็น
                </div>
              </div>
            </Card>

            <Card padding="md" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#dc2626', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>✕</span> งานหลุดกำหนด จัดลำดับไม่ถูก
              </div>
              <p className="text-subtle" style={{ flexGrow: 1 }}>
                งานล้นมือจนไม่รู้ว่าวันนี้ควรโฟกัสอะไร โปรเจกต์พันกันจนส่งของให้ลูกค้าช้า และคุณมักจะรู้สึกเหมือนเพิ่งนึกออกตอนใกล้วันส่ง
              </p>
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} /> โซลูชัน: ไทม์ไลน์และลำดับความสำคัญอัตโนมัติ
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`section container animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
          <h2 className="h2">โซลูชันการบริการของเรา</h2>
          <p className="text-subtle h3" style={{ fontWeight: 400, marginTop: '0.5rem' }}>
            เลือกเครื่องมือและรูปแบบบริการที่ตรงโจทย์ธุรกิจคุณในตอนนี้มากที่สุด
          </p>
        </div>
        <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card padding="lg" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Layout size={32} color="var(--accent-primary)" />
            </div>
            <h3 className="h3" style={{ marginBottom: '0.5rem' }}>เทมเพลตสำเร็จรูป</h3>
            <p className="text-subtle" style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
              แก้ปัญหาได้ทันทีด้วยเครื่องมือเฉพาะทาง เช่น ระบบส่วนตัว การจัดการลูกค้า (CRM) และการเงินธุรกิจ
            </p>
            <Link href="/templates" style={{ width: '100%' }}>
              <Button variant="outline" fullWidth>ปลดล็อคข้อจำกัด</Button>
            </Link>
          </Card>

          <Card padding="lg" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <BookOpen size={32} color="var(--accent-primary)" />
            </div>
            <h3 className="h3" style={{ marginBottom: '0.5rem' }}>คอร์สเรียนฉบับปฏิบัติจริง</h3>
            <p className="text-subtle" style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
              เรียนรู้วิธีปั้นแนวคิดสมองที่สอง และเคล็ดลับการจัดการองค์กรผ่านคอร์สเรียนสั้น กระชับ จับต้องได้
            </p>
            <Link href="/courses" style={{ width: '100%' }}>
              <Button variant="outline" fullWidth>ยกระดับทักษะของคุณ</Button>
            </Link>
          </Card>

          <Card padding="lg" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Settings size={32} color="var(--accent-primary)" />
            </div>
            <h3 className="h3" style={{ marginBottom: '0.5rem' }}>พัฒนาระบบสั่งทำเฉพาะ (Custom)</h3>
            <p className="text-subtle" style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
              เปลี่ยนขั้นตอนที่ซับซ้อนของคุณให้เป็นระบบ Notion ใหม่ทั้งหมด ที่ออกแบบมาเพื่อธุรกิจของคุณคนเดียว
            </p>
            <Link href="/custom-templates" style={{ width: '100%' }}>
              <Button variant="primary" fullWidth>ปรึกษาให้เราออกแบบให้</Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`section container animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
        <div className={styles.sectionHeader}>
          <h2 className="h2">สินค้าเพื่อการเริ่มต้น</h2>
          <Link href="/templates" className={styles.viewAll}>ดูทั้งหมด <ArrowRight size={16} /></Link>
        </div>
        <div className={styles.grid}>
          <Card padding="md" className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Product Image</div>
            <div className={styles.productInfo}>
              <h3 className="h3">Second Brain OS</h3>
              <p className="text-subtle">ระบบจัดการชีวิตที่สมบูรณ์แบบที่สุด ไม่ให้คุณลืมเรื่องสำคัญอีกต่อไป</p>
              <div className={styles.productFooter}>
                <span className={styles.price}>$49</span>
                <Link href="/templates/second-brain">
                  <Button variant="secondary" size="sm">เริ่มจัดระเบียบชีวิต</Button>
                </Link>
              </div>
            </div>
          </Card>
          
          <Card padding="md" className={styles.productCard}>
            <div className={styles.imagePlaceholder}>Product Image</div>
            <div className={styles.productInfo}>
              <h3 className="h3">Freelancer Finance</h3>
              <p className="text-subtle">ติดตามรายได้ รายจ่าย และข้อมูลภาษี อย่างไร้รอยต่อ</p>
              <div className={styles.productFooter}>
                <span className={styles.price}>$29</span>
                <Link href="/templates/finance">
                  <Button variant="outline" size="sm">เริ่มจัดการการเงิน</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
