import styles from './Values.module.css';

const Values = () => {
  const coreValues = [
    {
      name: "HSE",
      description: "We believe all accidents are preventable by following safety protocols and guidelines.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Quality",
      description: "We take pride in providing quality products and services that we stand behind.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "People",
      description: "We value our teams' contributions and encourage them to advance by taking lead.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Growth",
      description: "We are all about advancing and taking risks to learn from as we grow and become better together.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 22V12C3 10.9391 3.42143 9.92172 4.17157 9.17157C4.92172 8.42143 5.93913 8 7 8C8.06087 8 9.07828 8.42143 9.82843 9.17157C10.5786 9.92172 11 10.9391 11 12V22" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 8V7C5 5.4087 5.63214 3.88258 6.75736 2.75736C7.88258 1.63214 9.4087 1 11 1C12.5913 1 14.1174 1.63214 15.2426 2.75736C16.3679 3.88258 17 5.4087 17 7V8" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 22V16C13 14.9391 13.4214 13.9217 14.1716 13.1716C14.9217 12.4214 15.9391 12 17 12C18.0609 12 19.0783 12.4214 19.8284 13.1716C20.5786 13.9217 21 14.9391 21 16V22" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12V8C19 6.93913 18.5786 5.92172 17.8284 5.17157C17.0783 4.42143 16.0609 4 15 4H14" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Integrity",
      description: "Our moral values are carried out in our work. We conduct ourselves with pride in being honest, ethical and transparent.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Teamwork",
      description: "We work together to meet the needs of our customers and to grow as a whole.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 17L21 12L16 7" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 7L3 12L8 17" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 16L15 8" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Innovation",
      description: "We are open to ideas that challenge the conventional views and drive change.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H22" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2V22" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Respect",
      description: "Diversity is our motto which enables an environment all members value being a part of.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.85 12.15L19 4" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 5L20 7" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 8L17 10" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Trust",
      description: "Transparent in all work matters. Genuine and honest in all the projects we participate in.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.31 8L20.05 17.94" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.69 8H21.17" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.38 12.00L13.12 2.06" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.69 16L3.95 6.06" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.31 16H2.83" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.62 12L10.88 21.94" stroke="#212322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.values} id="values">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>SCAS Core Values</h2>
          <p className={styles.subtitle}>The manner by which we conduct our business is guided by our belief and commitment to the following core values:</p>
        </div>
        
        <div className={styles.valuesGrid}>
          {coreValues.map((value, index) => (
            <div className={styles.valueCard} key={index}>
              <div className={styles.valueIcon}>
                {value.icon}
              </div>
              <h3 className={styles.valueName}>{value.name}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;