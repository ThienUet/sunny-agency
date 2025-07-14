import React from "react";
import styles from "@/styles/app/about-page/about_page.module.scss";
import Banner from "@/components/banner/Banner";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/images/user/ye.jpg",
  },
  {
    name: "Jane Smith",
    role: "Marketing Lead",
    image: "/images/user/naomi.jpg",
  },
  {
    name: "Michael Brown",
    role: "Developer",
    image: "/images/user/travis.jpg",
  },
];

export default function AboutPage() {
  return (
    <section className={styles.aboutPageContainer}>
      <div className={styles.aboutValues}>
        <h2>Core Values</h2>
        <ul>
          <li>🌟 Relentless Creativity</li>
          <li>🤝 Customer-Centric Approach</li>
          <li>🚀 Commitment to Results</li>
        </ul>
      </div>

      <div className={styles.aboutTeam}>
        <h2>Our Team</h2>
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
