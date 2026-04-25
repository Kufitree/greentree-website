import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "../templates/page.module.css";
import Link from "next/link";

export default function CoursesListingPage() {
  const courses = [
    { title: "Productivity Masterclass", desc: "ระบบทีละขั้นตอนสำหรับครีเอเตอร์ในการจัดระเบียบทั้งชีวิตด้วย Notion", price: "$149", slug: "productivity-masterclass" },
  ];

  return (
    <main className="container section" style={{ minHeight: '80vh' }}>
      <header className={styles.header}>
        <h1 className="h1">คอร์สเรียนออนไลน์</h1>
        <p className="text-subtle h3">พลิกโฉมระบบการทำงานของคุณ และสร้างวิถีการทำงานที่เติบโตได้</p>
      </header>

      <div className={styles.grid}>
        {courses.map((course) => (
          <Card key={course.slug} padding="md" className={styles.productCard}>
            <div className={styles.imagePlaceholder}>ภาพตัวอย่างคอร์ส</div>
            <div className={styles.productInfo}>
              <h3 className="h3">{course.title}</h3>
              <p className="text-subtle">{course.desc}</p>
              <div className={styles.productFooter}>
                <span className={styles.price}>{course.price}</span>
                <Link href={`/courses/${course.slug}`}>
                  <Button variant="primary" size="sm">เรียนรู้เพิ่มเติม</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
