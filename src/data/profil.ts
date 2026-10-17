export const profil = {
  nom: 'Joris GBENOU',
  titre: 'Ingénieur en automatisme industriel et en IA',
  accroche: "Je connecte l'intelligence artificielle aux machines industrielles et aux robots.",
  presentation:
    "Ingénieur en génie électrique, spécialisé en contrôle des processus industriels, " +
    "je travaille à la frontière entre l'usine et l'IA : automates Siemens, maintenance " +
    "industrielle, vision par ordinateur et robotique. Je construis mes projets en public " +
    "et je partage tout, du câblage au modèle d'IA.",
  email: 'jorisgbenou13@gmail.com',
  localisation: 'Bénin',
  cv: '/cv-joris-gbenou.pdf',
  liens: {
    linkedin: 'https://www.linkedin.com/in/joris-gbenou/',
    github: 'https://github.com/gbenoujoris',
    tiktok: 'https://www.tiktok.com/@ton-compte', // à remplacer
  },
};

export const experiences = [
  {
    periode: 'Mars 2025 – aujourd’hui',
    titre: 'Ingénieur stagiaire, service maintenance',
    organisation: 'Société des Ciments du Bénin (SCB)',
    details: ['Maintenance des équipements électriques et pneumatiques', 'Automatisme sur automate Siemens S7-300'],
  },
  {
    periode: 'Avril – juillet 2024',
    titre: 'Assistant d’enseignement',
    organisation: 'École Polytechnique d’Abomey-Calavi (EPAC)',
    details: ['Appui au cours « Stage de laboratoire » du Dr Audace DIDAVI', 'Accompagnement des étudiants, correction des examens et des projets'],
  },
  {
    periode: 'Août – octobre 2023',
    titre: 'Ingénieur stagiaire',
    organisation: 'Laboratoire LETIA, Abomey-Calavi',
    details: ['Finalisation et mise en œuvre du projet de fin d’études', 'Appui aux travaux du laboratoire'],
  },
  {
    periode: 'Mai – juillet 2023',
    titre: 'Ingénieur stagiaire, division Automatisme, Optimaint et Services généraux',
    organisation: 'Société Béninoise des Boissons Rafraîchissantes (SOBEBRA)',
    details: [
      'Automatisation de la siroperie sous Siemens TIA Portal (projet de fin d’études)',
      'Maintenance des moteurs électriques et des capteurs de la ligne de production',
      'Architecture Profibus et modules d’entrées-sorties déportés',
    ],
  },
  {
    periode: 'Août – septembre 2022',
    titre: 'Ingénieur stagiaire, service maintenance',
    organisation: 'Société des Ciments du Bénin (SCB)',
    details: ['Maintenance des moteurs et des compresseurs d’air', 'Dépannage électrique, remplacement de bandes transporteuses'],
  },
  {
    periode: 'Septembre – octobre 2020',
    titre: 'Stagiaire',
    organisation: 'ISMAST Energy',
    details: ['Installation de lampadaires solaires, projet d’électrification rurale'],
  },
];

export const formations = [
  {
    periode: '2017 – 2023 (diplôme en mars 2024)',
    titre: 'Master en génie électrique, spécialité contrôle des processus industriels',
    organisation: 'EPAC, Université d’Abomey-Calavi',
  },
  {
    periode: '2024',
    titre: 'Bourse AWS & Udacity en Machine Learning et IA',
    organisation: 'En ligne : deep learning, réseaux de neurones, PyTorch',
  },
  {
    periode: '2021',
    titre: 'École d’été en intelligence artificielle et robotique',
    organisation: 'Benin Excellence et Fondation Vallet',
  },
];

export const competences = [
  { domaine: 'Automatisme industriel', items: ['Siemens TIA Portal', 'Automates S7-300 et S7-1200', 'GRAFCET', 'IHM', 'Profibus', 'Maintenance électrique et pneumatique'] },
  { domaine: 'Intelligence artificielle', items: ['Python', 'PyTorch', 'NumPy et Pandas', 'Réseaux de neurones convolutifs', 'Détection d’objets', 'Vision par ordinateur'] },
  { domaine: 'Robotique et embarqué', items: ['Arduino', 'Raspberry Pi', 'Robots mobiles', 'Capteurs', 'ROS 2 (en apprentissage)'] },
  { domaine: 'Énergie', items: ['Solaire photovoltaïque', 'Installations électriques'] },
];

export const distinctions = [
  { annee: '2024', titre: 'Best Mentor Award, First Lego League Bénin', texte: 'L’équipe que j’ai encadrée a remporté le trophée de champion et le prix du meilleur projet d’innovation.' },
  { annee: '2021 – 2023', titre: 'Boursier d’excellence du COE-IE', texte: 'Centre d’excellence en électricité, énergie et économie, financé par la Banque mondiale.' },
  { annee: '2020', titre: 'Vainqueur de la MAIC 2020', texte: 'Compétition internationale d’intelligence artificielle organisée par MIFY.' },
];

export const certifications = [
  { titre: 'Programmation d’automates avec TIA Portal', lien: 'https://app.kajabi.com/certificates/b6295505' },
  { titre: 'Interfaces homme-machine avec TIA Portal', lien: 'https://app.kajabi.com/certificates/5f8c0817' },
  { titre: 'AWS & Udacity, Machine Learning et IA', lien: 'https://www.udacity.com/certificate/e/a3b51dec-2dce-11ef-b2c5-0b495a5e6f71' },
];

export const engagements = [
  { periode: '2024', titre: 'Mentor bénévole, First Lego League Bénin' },
  { periode: '2022 – 2023', titre: 'Président des clubs IGE (électronique, électrotechnique, informatique), EPAC' },
];
