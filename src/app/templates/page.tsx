import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "./page.module.css";
import Link from "next/link";

export default function TemplatesListingPage() {
  const templates = [
    { title: "Second Brain OS", desc: "ระบบจัดการชีวิตและสมองที่สองที่สมบูรณ์แบบที่สุด", price: "$49", slug: "second-brain" },
    { title: "Freelancer Finance", desc: "ติดตามและจัดการรายได้ ค่าใช้จ่าย และภาษีของคุณแบบมืออาชีพ", price: "$29", slug: "finance" },
    { title: "Content Calendar", desc: "ใช้วางแผนการทำคอนเทนต์ ร่าง และกำหนดเวลาโพสต์", price: "$19", slug: "content-calendar" },
    { title: "Habit Tracker Pro", desc: "สนุกกับการบันทึกนิสัยและสร้างกิจวัตรใหม่ๆ", price: "$15", slug: "habit-tracker" },
  ];

  return (
    <main className="container section" style={{ minHeight: '80vh' }}>
      <header className={styles.header}>
        <h1 className="h1">เทมเพลต Notion ระดับพรีเมียม</h1>
        <p className="text-subtle h3">ระบบที่ถูกรังสรรค์และคัดบรรจงมาอย่างพิถีพิถันเพื่อยกระดับผลผลิตการทำงานของคุณ</p>
      </header>

      <div className={styles.grid}>
        {templates.map((tpl) => (
          <Card key={tpl.slug} padding="md" className={styles.productCard}>
            <div className={styles.imagePlaceholder}>ภาพตัวอย่างเทมเพลต</div>
            <div className={styles.productInfo}>
              <h3 className="h3">{tpl.title}</h3>
              <p className="text-subtle">{tpl.desc}</p>
              <div className={styles.productFooter}>
                <span className={styles.price}>{tpl.price}</span>
                <Link href={`/templates/${tpl.slug}`}>
                  <Button variant="secondary" size="sm">ดูรายละเอียด</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
