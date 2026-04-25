'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Factory, Briefcase, Zap, MoveRight, Users2, Building2 } from "lucide-react";
import styles from "./page.module.css";

export default function CustomTemplatesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    buildNeeded: '',
    problem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission processing
    console.log("Form data submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Badge variant="warning">สร้างมาเพื่อคุณโดยเฉพาะ</Badge>
          <h1 className="h1">ระบบ Notion ที่ออกแบบมาเพื่อธุรกิจของคุณ</h1>
          <p className="h3 text-subtle" style={{ fontWeight: 400 }}>
            เราออกแบบ สร้าง และติดตั้งพื้นที่ทำงาน Notion เฉพาะตัว ที่ช่วยแก้ปัญหาขั้นตอนการทำงานของคุณ เพื่อให้ทีมของคุณทำงานได้เร็วขึ้น
          </p>
          <div style={{ marginTop: '1rem' }}>
            <Button 
              size="lg" 
              variant="primary" 
              onClick={() => {
                document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ติดต่อให้เราสร้างระบบให้
            </Button>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className="h2">ใครบ้างที่เลือกใช้บริการรับทำระบบของเรา?</h2>
          <p className="text-subtle" style={{ marginTop: '0.5rem' }}>หากคุณพบว่าเทมเพลตสำเร็จรูปไม่ตอบโจทย์การขยายตัวของคุณ คุณมาถูกที่แล้ว</p>
        </div>
        <div className={`${styles.grid} ${styles.grid2Col}`}>
          <div className={styles.targetCard}>
            <Briefcase className={styles.icon} size={24} />
            <div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>ผู้ก่อตั้งธุรกิจที่มั่นคงแล้ว</h3>
              <p className="text-subtle text-sm">คุณต้องการระบบปฏิบัติการที่รองรับขยายตัวซึ่งสอดคล้องกับกระบวนการทำงานที่มีอยู่ของคุณได้อย่างสมบูรณ์แบบ</p>
            </div>
          </div>
          <div className={styles.targetCard}>
            <Building2 className={styles.icon} size={24} />
            <div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>ธุรกิจขนาดเล็กและขนาดกลาง (SME)</h3>
              <p className="text-subtle text-sm">เปลี่ยนอีเมลและสเปรดชีตที่กระจัดกระจายให้เป็นสภาพแวดล้อมการติดตามข้อมูลแบบรวมศูนย์</p>
            </div>
          </div>
          <div className={styles.targetCard}>
            <Users2 className={styles.icon} size={24} />
            <div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>ทีมงานที่กำลังเติบโต</h3>
              <p className="text-subtle text-sm">คุณต้องการมาตรฐานในการอนบอร์ดพนักงาน ฐานความรู้ และการติดตามโปรเจกต์ที่ชัดเจนสำหรับทีมงาน</p>
            </div>
          </div>
          <div className={styles.targetCard}>
            <Zap className={styles.icon} size={24} />
            <div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>เอเจนซี่</h3>
              <p className="text-subtle text-sm">สร้างพอร์ทัลลูกค้าแบบไวท์เลเบลเพื่อจัดการงานที่ต้องส่งมอบและใบแจ้งหนี้ได้อย่างหมดจดและเป็นมืออาชีพ</p>
            </div>
          </div>
        </div>
      </section>

      {/* What can be customized */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="h2">สิ่งที่เราสามารถสร้างร่วมกันได้</h2>
            <p className="text-subtle" style={{ marginTop: '0.5rem' }}>เลิกเอาธุรกิจของคุณไปอยู่ในโครงสร้างสำเร็จรูปของคนอื่น</p>
          </div>
          <div className={`${styles.grid} ${styles.grid3Col}`}>
            {[
              "ระบบ CRM ที่ปรับแต่งได้", 
              "การบริหารจัดการโครงการ (Project Management)", 
              "กลไกการวางแผนเนื้อหาคอมเทนต์ (Content Planning Engine)", 
              "การติดตามการเงิน (Finance Tracking)", 
              "พอร์ทัลลูกค้า (Client Portals)", 
              "ฐานความรู้ของทีมงาน (Team Knowledge Base)", 
              "แดชบอร์ดธุรกิจ (Business Dashboards)",
              "การติดตามสินค้าคงคลัง (Inventory Tracking)",
              "ระบบปฏิบัติการการใช้ชีวิตและสร้างนิสัย (Habit & Life OS)"
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 color="var(--accent-primary)" size={18} />
                <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className="h2">กระบวนการทำงานของเรา</h2>
          <p className="text-subtle" style={{ marginTop: '0.5rem' }}>เปลี่ยนความยุ่งยากจากความวุ่นวายให้กลับมาเป็นความชัดเจนใน 4 ขั้นตอน</p>
        </div>
        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3 style={{ fontWeight: 600 }}>บอกความต้องการให้เรารู้</h3>
            <p className="text-subtle text-sm">กรอกแบบฟอร์มด้านล่าง ซึ่งระบุปัญหาในขั้นตอนการทำงานปัจจุบันของคุณ</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 style={{ fontWeight: 600 }}>ปรึกษาและทบทวนรูปแบบการทำงาน</h3>
            <p className="text-subtle text-sm">เราร่วมประชุมเพื่อพูดคุยถึงกระบวนการทำงานของคุณและร่างสถาปัตยกรรมของระบบข้อมูล</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 style={{ fontWeight: 600 }}>สร้างสรรค์โดยเฉพาะคุณ</h3>
            <p className="text-subtle text-sm">เราออกแบบเวิร์กสเปซใน Notion ที่เน้นความง่ายในการใช้งาน (UX) และความถูกต้องในการเก็บข้อมูล</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 style={{ fontWeight: 600 }}>ให้พร้อมใช้งานจริงพร้อมคู่มือ</h3>
            <p className="text-subtle text-sm">เราส่งมอบระบบ และทำวิดีโอแนะนำแนวทางการใช้งานทั้งหมดอย่างละเอียด</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.sectionAlt}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="h2" style={{ marginBottom: '2rem' }}>ทำไมต้องเลือกเรา?</h2>
          <div className={`${styles.grid} ${styles.grid2Col}`} style={{ textAlign: 'left' }}>
            <div className={styles.targetCard}>
              <Factory className={styles.icon} size={20} />
              <div>
                <h3 style={{ fontWeight: 600 }}>สร้างมาเพื่อกระบวนการทำงานของคุณ</h3>
                <p className="text-subtle text-sm">ไม่ใช้โครงสร้างแพทเทิร์นทั่วไปที่ไม่ได้เรื่อง</p>
              </div>
            </div>
            <div className={styles.targetCard}>
              <CheckCircle2 className={styles.icon} size={20} />
              <div>
                <h3 style={{ fontWeight: 600 }}>ออกแบบเรียบง่ายและสะอาดตา</h3>
                <p className="text-subtle text-sm">เลย์เอาต์ที่สวยงาม แต่ใช้งานได้จริงแบบเป็นธรรมชาติ</p>
              </div>
            </div>
            <div className={styles.targetCard}>
              <Zap className={styles.icon} size={20} />
              <div>
                <h3 style={{ fontWeight: 600 }}>ลดความสับสนได้อย่างปลอดภัย</h3>
                <p className="text-subtle text-sm">จำกัด Property เพื่อให้คุณแค่เห็นสิ่งที่สำคัญที่สุดเท่านั้น</p>
              </div>
            </div>
            <div className={styles.targetCard}>
              <Briefcase className={styles.icon} size={20} />
              <div>
                <h3 style={{ fontWeight: 600 }}>ผ่านการทดสอบทางธุรกิจมาแล้ว</h3>
                <p className="text-subtle text-sm">ออกแบบมาโดยเฉพาะสำหรับทีมงานที่ทำงานสร้างรายได้จริง</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className={`container ${styles.section}`} style={{ paddingBottom: '8rem' }}>
        <div className={styles.sectionHeader}>
          <h2 className="h2">ขอใบเสนอราคาปรับแต่งระบบของคุณ</h2>
          <p className="text-subtle" style={{ marginTop: '0.5rem' }}>กรอกแบบฟอร์มด้านล่างและเราจะติดต่อกลับไปภายใน 24 ชั่วโมง</p>
        </div>
        
        <div className={styles.formContainer}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2 size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 className="h2" style={{ marginBottom: '1rem' }}>ได้รับคำขอแล้ว!</h3>
              <p className="text-subtle" style={{ marginBottom: '2rem' }}>
                ขอขอบคุณที่ติดต่อเรามาครับ เราจะตรวจสอบความต้องการของคุณและส่งอีเมลเพื่อกําหนดการปรึกษาเรื่องเวิร์กโฟลว์ในเร็วๆ นี้
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>ส่งคำขอปรึกษาอีกครั้ง</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={`${styles.grid} ${styles.grid2Col}`} style={{ marginBottom: '0' }}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>ชื่อของคุณ</label>
                  <input required id="name" name="name" type="text" className={styles.input} value={formData.name} onChange={handleChange} placeholder="สมหญิง สวยจริง" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>ที่อยู่อีเมล</label>
                  <input required id="email" name="email" type="email" className={styles.input} value={formData.email} onChange={handleChange} placeholder="jane@company.com" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="role" className={styles.label}>รายนามธุรกิจ / ตำแหน่ง</label>
                <input required id="role" name="role" type="text" className={styles.input} value={formData.role} onChange={handleChange} placeholder="เช่น ผู้ก่อตั้งเอเจนซี่, ดีไซเนอร์อิสระ" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="buildNeeded" className={styles.label}>สิ่งที่คุณต้องการจะให้เราสร้าง?</label>
                <input required id="buildNeeded" name="buildNeeded" type="text" className={styles.input} value={formData.buildNeeded} onChange={handleChange} placeholder="เช่น ระบบ CRM สำหรับพนักงานขาย 5 คน, ตัวจัดการปฏิทินคอนเทนต์" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="problem" className={styles.label}>ปัญหาในขั้นตอนการทำงานหลักของคุณ</label>
                <textarea required id="problem" name="problem" className={styles.textarea} value={formData.problem} onChange={handleChange} placeholder="ในปัจจุบันสิ่งที่ทำให้เราทำงานได้ช้าลงหรือทำให้ระบบธุรกิจเกิดปัญหาคืออะไร?" />
              </div>

              <Button type="submit" size="lg" variant="primary" fullWidth>ส่งคำขอประเมิน <MoveRight size={16} style={{ marginLeft: '0.5rem' }} /></Button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
