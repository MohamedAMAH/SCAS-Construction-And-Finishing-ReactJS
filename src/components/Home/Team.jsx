import styles from './Team.module.css';

const Team = () => {
  const directors = [
    {
      name: "Taymour Scarello",
      position: "Chief Executive Officer, Co-Founder",
      bio: "Taymour Scarello, co-founded SCAS in 2016 and currently serves as its CEO. He is also a partner at ATT Developments and a board member of ECO Associates, a leading MEP contracting and engineering service company operating across the Middle East and Africa. Additionally, he is on the board of the esteemed Italian Chamber of Commerce - CCI Egypt. Taymour graduated from the American University in Cairo with a bachelor's degree in Finance."
    },
    {
      name: "Ahmed Shilbaya",
      position: "Chief Business Development Officer, Co-Founder",
      bio: "In 2016, Ahmed Shilbaya co-founded SCAS and is the current Chief Business Development Officer. He also co-founded ATT Developments where he is the current Chief Executive Officer. He previously held the position of Assistant Contracts Manager for Ocean Marine Egypt (OME petroleum services company). Ahmed earned his bachelor's degree in International Business from North Hampton University in the United Kingdom."
    },
    {
      name: "George Mounir",
      position: "Chief Projects Management Officer, Co-Founder",
      bio: "George Mounir is the co-founder of SCAS and is the current Chief Projects Management Officer. He has a wealth of experience of more than 18 years in the construction and finishing field. He has managed various mega projects during his tenure with Modern Interiors/Ashraf Sadek Associates as well as Orascom Construction. He holds a bachelor's degree in Architecture and a post graduate diploma in Construction Management."
    }
  ];

  return (
    <section className={styles.team} id="team">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Board Of Directors</h2>
        </div>
        
        <div className={styles.directors}>
          {directors.map((director, index) => (
            <div className={styles.director} key={index}>
              <div className={styles.imageWrapper}>
                <div className={styles.image} style={{backgroundImage: `url(/src/assets/images/team-${index + 1}.jpg)`}}></div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{director.name}</h3>
                <p className={styles.position}>{director.position}</p>
                <p className={styles.bio}>{director.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;