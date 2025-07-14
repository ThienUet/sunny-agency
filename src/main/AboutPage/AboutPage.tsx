import React from "react";
import styles from "@/styles/app/about-page/about_page.module.scss";
import Banner from "@/components/banner/Banner";

const teamMembers = [
  {
    name: "Nguyễn Văn A",
    role: "CEO & Founder",
    image: "/images/user/ye.jpg",
  },
  {
    name: "Trần Thị B",
    role: "Marketing Lead",
    image: "/images/user/naomi.jpg",
  },
  {
    name: "Lê Văn C",
    role: "Developer",
    image: "/images/user/travis.jpg",
  },
];

export default function AboutPage() {
  return (
    <section className={styles.aboutPageContainer}>
      

      <div className={styles.aboutValues}>
        <h2>Giá trị cốt lõi</h2>
        <ul>
          <li>🌟 Sáng tạo không ngừng</li>
          <li>🤝 Đặt khách hàng làm trung tâm</li>
          <li>🚀 Cam kết hiệu quả</li>
        </ul>
      </div>

      <div className={styles.aboutTeam}>
        <h2>Đội ngũ của chúng tôi</h2>
        <div className={styles.aboutTeamList}>
          {teamMembers.map(
            (member: { name: string; role: string; image: string }) => (
              <div className={styles.aboutTeamMember} key={member.name}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.aboutTeamAvatar}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
