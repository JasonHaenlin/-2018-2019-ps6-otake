import { UniversityDetails } from 'src/models/UniversityDetails';

export const UNIVERSITIES_MOCKED: UniversityDetails[] = [
  {
    name: 'California Institute Of Technology',
    big_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Caltech_Entrance.jpg/1920px-Caltech_Entrance.jpg',
    // tslint:disable-next-line: max-line-length
    presentation_text: 'Caltech is a world-renowned science and engineering institute that marshals some of the world\'s brightest minds and most innovative tools to address fundamental scientific questions and pressing societal challenges. The Institute manages JPL for NASA, sending probes to explore the planets of our solar system and quantify changes on our home planet. Caltech also owns and operates large-scale research facilities such as the Seismological Laboratory and a global network of astronomical observatories, including the Palomar and W. M. Keck Observatories; and cofounded and comanages LIGO. Caltech is an independent, privately supported institution with a 124-acre campus located in Pasadena, California.',
    // tslint:disable-next-line: max-line-length
    admission_text: 'About 230 new freshmen and 10 to 15 new transfer students join Caltech each fall. Each new student is welcomed into a close-knit, collaborative community of nearly 1,000 undergraduate scholars who have demonstrated the highest level of academic excellence and share a strong interest in science, engineering, and technology.',
    // tslint:disable-next-line: max-line-length
    student_life_text: 'Caltech is a small, collaborative community, where faculty, postdoctoral scholars, students, and staff from diverse backgrounds, cultures, and experiences live, work, and engage with one another. Together, they remain committed to setting the example of what its intertwined missions of research and education can accomplish. Caltech is an integral part of Pasadena. Together with JPL, we are the city’s largest employer and a source of programs that benefit our neighbors: teachers, businesses, families, cultural centers, and government. To stay up-to-date on upcoming events and the latest community news, visit Caltech Today or subscribe to Caltech Matters.',
    cost_of_living_text: '1,400 – 2,400 USD/month',
    testimonial: [
      {
        first_name: 'Pierre',
        last_name: 'Martin',
        email: 'pierre.martin@etu.univ-cotedazur.fr',
        text: 'Très bonne expérience, à conseiller'
      },

      {
        first_name: 'Mélanie',
        last_name: 'Durant',
        email: 'melanie.durant@etu.univ-cotedazur.fr',
        text: 'Excellente université, 300 jours de Soleil par an, à proximité de la plage, que du bonheur !!!'
      },

      {
        first_name: 'Mathilde',
        last_name: 'Lebrun',
        email: 'mathilde.lebrun@etu.univ-cotedazur.fr',
        text: 'Faible niveau accadémique, coût de la vie excessivement cher'
      }
    ]
  },
  {
    name: 'cityU',
    big_picture: 'http://www.ejinsight.com/wp-content/uploads/2017/11/1700422_b146b95c23878cdc1e4b26e5c5903db6-692x360.jpg',
    // tslint:disable-next-line: max-line-length
    presentation_text: 'With an emphasis on professional education and research, CityU produces graduates with the ability to anticipate and precipitate change in a rapidly-evolving, globalised world. In recent years, CityU has performed strongly in university rankings and is currently among the top 10 in Asia and the top 100 in the world. It is a fast-growing institution with undergraduate and postgraduate students and academic staff in business, creative media, data science, energy and environment, engineering, humanities and social sciences, law, science, and veterinary medicine and life sciences. Our curriculum emphasises innovation and creativity, and this principle underlies all aspects of the University\'s professional education and problem-driven research. Supported by novel learning spaces and facilities in new buildings, the curriculum embodies CityU\'s Strategic Plan for a new era of growth. CityU has established itself as one of the most innovative universities in Asia, pioneering research in diverse fields that are of high relevance on pressing issues. The success of its research programmes is reflected in both the amount of funding received and the number of projects funded as well as the quality of its research output. CityU\'s proximity to, and close ties with, mainland China, as well as its international partnerships and outlook, make the University ideally positioned to provide a dynamic learning and research environment for students and faculty from all over the world. Both the stature and sheer volume of CityU\'s relationships with global institutions continue to grow. Like the incredible city in which it plays such an integral role, CityU continues to move, innovate, learn, teach and prosper.',
    admission_text: 'https://www.admo.cityu.edu.hk/exchange_visiting/exchange/info/',
    student_life_text: 'http://www.cityu.edu.hk/geo/ies_abouthk.htm',
    cost_of_living_text: 'https://www.cityu.edu.hk/geo/ies_costlivenfin.htm'
  }
];
