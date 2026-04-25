import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Layout, BookOpen, Settings, UserCircle2 } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "About | CreatorStore",
  description: "Learn more about our mission to help professionals orchestrate their work in Notion.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* 1. Hero Intro */}
      <section className={`${styles.hero} container`}>
        <h1 className="h1">สร้างระบบที่ใช่ให้ชีวิตคุณ.</h1>
        <p className={`h3 ${styles.subheadline}`}>
          ภารกิจของเราคือการช่วยให้ผู้ประกอบวิชาชีพและเจ้าของธุรกิจจัดการชีวิตดิจิทัลของตนเอง และสร้างระบบที่สงบและมีประสิทธิภาพสูงใน Notion
        </p>
      </section>

      {/* 2 & 6. Founder Story + Personal Touch */}
      <section className={styles.storySection}>
        <div className={`container ${styles.storyContent}`}>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>จุดเริ่มต้นของเรา</h2>
          <p>
            เมื่อสามปีที่แล้ว ผมต้องจมอยู่กับเครื่องมือการทำงานมากมาย งานอยู่ใน Linear โน้ตอยู่ใน Apple Notes โปรเจกต์อยู่ใน Asana และไอเดียกระจัดกระจายไปหมด แทนที่จะได้ลงมือทำงาน กลับต้องเสียเวลาไปกับการจัดการงาน จนเหนื่อยล้าไปหมด
          </p>
          <p>
            ผมตระหนักว่าปัญหาไม่ได้อยู่ที่เราขาดเครื่องมือ แต่เป็นสิ่งที่เราขาดคือระบบที่รวมทุกอย่างเข้าด้วยกัน นั่นคือตอนที่ผมค้นพบ Notion ผมใช้เวลาหลายเดือนหมกมุ่นกับการสร้างพื้นที่ทำงานที่เชื่อมโยงงานประจำวันเข้ากับเป้าหมายระยะยาวโดยไม่มีความยุ่งยาก
          </p>
          <p>
            ความแตกต่างนั้นราวกับหน้ามือเป็นหลังมือ ผมเลิกรู้สึกว่ามีงานล้นมือและในที่สุดก็มีความชัดเจนในการโฟกัส เมื่อผมแชร์ระบบงานของผมกับเพื่อนผู้ประกอบการ พวกเขาก็ถามว่าขอซื้อได้ไหม นั่นคือจุดเริ่มต้นของสิ่งนี้
          </p>

          <div className={styles.founderIntro}>
            <div className={styles.founderImage}>
              <UserCircle2 size={48} strokeWidth={1} color="var(--text-primary)" />
            </div>
            <div>
              <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }}>สวัสดีครับ ผมเป็นผู้ก่อตั้ง</p>
              <p className="text-subtle" style={{ fontSize: "1rem" }}>ผมสร้างเครื่องมือเหล่านี้ขึ้นมาเพราะมันคือระบบที่ผมใช้ทำงานในธุรกิจของผมทุกๆ วัน</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What we offer */}
      <section className="section container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="h2">สิ่งที่เราสร้าง</h2>
          <p className="text-subtle" style={{ marginTop: "0.75rem" }}>เครื่องมือที่ใช้งานได้จริง ไม่ยุ่งยาก</p>
        </div>

        <div className={styles.grid}>
          <Card padding="md">
            <Layout className={styles.icon} size={32} style={{ marginBottom: "1rem" }} />
            <h3 className="h3" style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>เทมเพลตพรีเมียม</h3>
            <p className="text-subtle">พื้นที่ทำงาน Notion แบบพร้อมใช้งานที่ออกแบบมาอย่างพิถีพิถัน สำหรับการใช้งานเฉพาะ เช่น การเงิน ฟรีแลนซ์ และการจัดการชีวิต</p>
          </Card>

          <Card padding="md">
            <BookOpen className={styles.icon} size={32} style={{ marginBottom: "1rem" }} />
            <h3 className="h3" style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>คอร์สเรียนฉบับมาสเตอร์ทีละขั้นตอน</h3>
            <p className="text-subtle">การฝึกอบรมผ่านวิดีโอแบบเป็นขั้นเป็นตอน เกี่ยวกับวิธีสร้าง Second Brain ของคุณเองและเชี่ยวชาญคุณสมบัติขั้นสูงของ Notion</p>
          </Card>

          <Card padding="md">
            <Settings className={styles.icon} size={32} style={{ marginBottom: "1rem" }} />
            <h3 className="h3" style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>เทมเพลตสั่งทำพิเศษ</h3>
            <p className="text-subtle">สำหรับทีมและเอเจนซี่ที่ต้องการระบบปฏิบัติการเฉพาะตัว ที่ปรับแต่งให้เข้ากับกระบวนการทำงานภายในของตนเองโดยเฉพาะ</p>
          </Card>
        </div>
      </section>

      {/* 4. Who it's for */}
      <section className="section" style={{ backgroundColor: "var(--bg-tertiary)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2">เหมาะสำหรับใคร?</h2>
          <p className="text-subtle" style={{ marginTop: "1rem", maxWidth: "600px", margin: "1rem auto 0" }}>
            หากคุณเคยรู้สึกว่าเครื่องมือของคุณทำให้คุณทำงานช้าลง แทนที่จะเร็วขึ้น คุณมาถูกที่แล้ว
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem} style={{ textAlign: "left" }}>
              <CheckCircle2 className={styles.icon} />
              <div>
                <strong style={{ color: "var(--text-primary)" }}>ฟรีแลนซ์ & ครีเอทีฟ</strong>
                <p className="text-subtle" style={{ fontSize: "0.95rem", marginTop: "0.25rem" }}>ผู้ที่ต้องการรวมศูนย์จัดการลูกค้า ใบแจ้งหนี้ และงานที่ต้องส่ง</p>
              </div>
            </div>
            <div className={styles.featureItem} style={{ textAlign: "left" }}>
              <CheckCircle2 className={styles.icon} />
              <div>
                <strong style={{ color: "var(--text-primary)" }}>ผู้ก่อตั้งเอเจนซี่</strong>
                <p className="text-subtle" style={{ fontSize: "0.95rem", marginTop: "0.25rem" }}>ผู้ที่ต้องการสร้างมาตรฐานการดำเนินงานและพาคนในทีมเข้ามาทำงานได้อย่างราบรื่น</p>
              </div>
            </div>
            <div className={styles.featureItem} style={{ textAlign: "left" }}>
              <CheckCircle2 className={styles.icon} />
              <div>
                <strong style={{ color: "var(--text-primary)" }}>พนักงานองค์กรความรู้</strong>
                <p className="text-subtle" style={{ fontSize: "0.95rem", marginTop: "0.25rem" }}>ผู้ที่มีข้อมูลล้นตัวและต้องการ Second Brain ที่เชื่อถือได้</p>
              </div>
            </div>
            <div className={styles.featureItem} style={{ textAlign: "left" }}>
              <CheckCircle2 className={styles.icon} />
              <div>
                <strong style={{ color: "var(--text-primary)" }}>มืออาชีพที่ได้รับความกดดัน</strong>
                <p className="text-subtle" style={{ fontSize: "0.95rem", marginTop: "0.25rem" }}>ผู้ที่เหนื่อยกับการต้องเปิดสับเปลี่ยนระหว่าง 5 แอพพลิเคชั่น เพียงเพื่อที่จะรู้ว่าต้องทำอะไรในวันนี้</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Credibility */}
      <section className="section container">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>2,000+</div>
            <div className={styles.statLabel}>มืออาชีพและผู้ใช้งาน</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4.9/5</div>
            <div className={styles.statLabel}>คะแนนความพึงพอใจ</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>ระบบพรีเมียมให้เลือก</div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section container" style={{ paddingBottom: "8rem" }}>
        <Card variant="highlight" padding="lg">
          <div className={styles.ctaSection}>
            <h2 className="h2">พร้อมที่จะควบคุมระบบการทำงานของคุณแล้วหรือยัง?</h2>
            <p className="text-subtle h3" style={{ fontWeight: 400 }}>
              เข้าร่วมกับผู้ประกอบวิชาชีพหลายพันคนที่อัปเกรดระบบงานของตนแล้ว
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/templates">
                <Button size="lg" variant="primary">ดูเทมเพลต</Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline">หาคอร์สเรียน</Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
