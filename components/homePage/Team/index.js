
import React from 'react'
import Title from '../../common/title'
import styles from './Team.module.scss'

const Team = () => {
  return (
    <div className={styles.teams_container}>
        <Title> تــیم ما </Title>
        <div className={styles.team}>
            <div className={styles.team_member}>
                <img src='https://img.freepik.com/fotos-kostenlos/frohe-dunkelhaarige-junge-frau-sagt-hoert-sich-gut-an-bestaetigt-etwas-alles-unter-kontrolle-und-laeuft-grossartig-genehmigt-promo-hat-froehlichen-ausdruck-stimmt-mit-person-ueberein-traegt-gelbes-sweatshirt_273609-42865.jpg?w=2000' />
                <h6>احمدرضا عابدزاده</h6>
                <div className={styles.member_info}><span>مسئول نظافت</span></div>
            </div>
            <div className={styles.team_member}>
                <img src='https://img.allvipp.com/www-promipool-de/image/upload/c_fill,g_faces,w_1200,h_900,q_auto:eco,f_jpg/matthew_fox_lost_jack_shephard_today_200115_gaypw5uqrr' />
                <h6>احمدرضا عابدزاده</h6>
                <div className={styles.member_info}><span>مسئول تامین امنیت</span></div>
            </div>
            <div className={styles.team_member}>
                <img src='https://www.ecpi.edu/sites/default/files/CIV%20Sept%2026.png' />
                <h6>احمدرضا عابدزاده</h6>
                <div className={styles.member_info}><span>مسئول آشپزی</span></div>
            </div>
            <div className={styles.team_member}>
                <img src='https://celebrity.land/en/wp-content/uploads/2022/05/Todays-famous-birthdays-list-for-May-27-2022-includes-celebrity.jpg' />
                <h6>احمدرضا عابدزاده</h6>
                <div className={styles.member_info}><span>مسئول رفت و آمد</span></div>
            </div>
        </div>
    </div>
  )
}

export default Team