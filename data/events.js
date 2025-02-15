const event = {
    id: 1,
    link: "https://docs.google.com/forms/d/1kPIptXunTYBykR6xTYSxoSdoX0Vg1unL8JVCqkJ56tA",
    name: 'Opening Ceremony',
    tag: 'Opening Ceremony',
    description: `The event will begin with an inaugural speech, welcoming all participants and dignitaries. There will be an introduction to the day's schedule and any important announcements regarding the events.`,
    date: '27th January 2025 , AB5 Auditorium',
    time: '9:30 AM – 10:30 AM',
    venue: 'AB5 Auditorium',
    organisers: [
      {
        key: '1',
        name: 'Team MBOSC',
        email: 'panchadip.mitblr2023@learner.manipal.edu',
        phoneNumber: '8116760429',
      }
    ],
    poster: 'https://res.cloudinary.com/dxb5lx3gk/image/upload/v1737546644/OpeningCeremony_zrzfg3.png',
  };

import Image from 'next/image';

// Render the event in a React component
function EventComponent() {
  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <a href={event.link} target="_blank" rel="noopener noreferrer">
        Open Google Forms
      </a>
      <Image src={event.poster} alt="Event Poster" width={500} height={500} />
    </div>
  );
}

const events = [
    event,
    {
        id: 2,
        link: 'guest lecture',
        name: 'Guest Lecture',
        tag: 'A promising and insightful Guest Lecture',
        description:
            '“A distinguished guest speaker will deliver a lecture on a relevant and engaging topic. This session aims to provide insights and inspiration to the attendees, followed by a short Q&A session."',
        date: '27th January 2025, AB5 Auditorium',
        time: '8:00 am',
        organisers: [
            {
                key: '1',
                name: 'Panchadip Bhattacharjee',
                email: 'panchadip.mitblr2023@learner.manipal.edu',
                phoneNumber: '8116760429',
            },
            {
                key: '2',
                name: 'Renuka A',
                email: 'renuka.mitblr2022@learner.manipal.edu',
                phoneNumber: '9945877455',
            },
        ],
        poster: 'https://res.cloudinary.com/dpjf6btln/image/upload/v1633793392/BB_bcq4a4.jpg',
        registration: "https://docs.google.com/forms/d/e/1FAIpQLSe3NJ-9eM_a80FgC2VRQ9TQQRaJSLG4vuXGBPJL6GZAQGJojQ/viewform?embedded=true",
        leadLink:"1vMIoyz6Q6FOtx9pPPP92yKkfrrZ-boipmSPAaI0qB6Y",    
    },
    {
        id: 1,
        link: 'show&tell',
        name: 'Show & Tell',
        tag: 'show&tell',
        description:
            "'The Show and Tell event will give participants the opportunity to showcase their talents, projects, or ideas to a group of peers. It could involve anything from presenting a creative project, demonstrating a new product or concept, or sharing a personal achievement. This session encourages attendees to engage with each others work and exchange ideas. It provides an interactive space for learning, feedback, and networking.",
        date: '27th January 2025 , AB4 Room No:108',
        time: '11:30 am - 1:00 pm',
        organisers: [
            {
                key: '1',
                name: 'Panchadip Bhattacharjee',
                email: 'panchadip.mitblr2023@learner.manipal.edu',
                phoneNumber: '8116760429',
            },
            {
                key: '2',
                name: 'Renuka A',
                email: 'renuka.mitblr2022@learner.manipal.edu',
                phoneNumber: '9945877455',
            },
        ],
        poster: 'https://res.cloudinary.com/dxb5lx3gk/image/upload/v1737546646/Show_Tell_j0ciaw.png',
        registration:
            '/',
        leadLink:"1k2yejkk2p7URprQ71YsEw3jJr6F-bFe4JpdQ-Yz8Pr4",        
    },
    {
        id: 1,
        link: 'Trivia Quiz (General):',
        name: 'console.log(“TRIVIA QUIZZZ”)',
        tag: 'Can you handle the tech quiz?',
        description:
            "The General Trivia Quiz is a fun and competitive event designed to test the participants' knowledge across various subjects such as general knowledge, history, pop culture, science, and more. Teams or individual participants will compete to answer a series of questions, and the session will be lively, with the possibility of small prizes for top scorers. It’s an engaging way to break the monotony of traditional events while promoting a sense of friendly competition.",
        date: '27th January 2025 , Auditorium AB5',
        time: '2:30pm - 4:30pm',
        organisers: [
            {
                key: '1',
                name: 'Panchadip Bhattacharjee',
                email: 'panchadip.mitblr2023@learner.manipal.edu',
                phoneNumber: '8116760429',
            },
            {
                key: '2',
                name: 'Renuka A',
                email: 'renuka.mitblr2022@learner.manipal.edu',
                phoneNumber: '9945877455',
            },
        ],
        poster: 'https://res.cloudinary.com/dpjf6btln/image/upload/v1633793230/WebDev_kdy8jd.png',
        registration:
            'https://dare2compete.com/p/consolelogreplicate-dhruva-iiit-kottayams-annual-technical-fest-indian-institute-of-information-technology-iiit-kottay-221911',
        leadLink:"1RPPyF8Zo2tEH04WG0dLCmfYkceCndur4Y9HhqIvek6w",        
    },
    {
        id: 1,
        link: 'Treasure Hunt:',
        name: 'Treasure Hunt',
        tag: 'Explore! Rebut! Win!',
        description:
            'The Treasure Hunt will be an outdoor or campus-wide event where participants are given clues or puzzles to solve in order to find hidden treasures. It may involve a mix of mental and physical challenges, encouraging teamwork and creative thinking. The hunt will be fun and adventurous, as participants move through different locations, solving puzzles and completing tasks to uncover the treasure.',
        date: '28th January 2025, Venue to be updated soon ',
        time: '5:00 PM to 7:00 PM',
        organisers: [
            {
                key: '1',
                name: 'Panchadip Bhattacharjee',
                email: 'panchadip.mitblr2023@learner.manipal.edu',
                phoneNumber: '8116760429',
            },
            {
                key: '2',
                name: 'Renuka A',
                email: 'renuka.mitblr2022@learner.manipal.edu',
                phoneNumber: '9945877455',
            },
        ],
        poster: 'https://res.cloudinary.com/dpjf6btln/image/upload/v1633793221/D1_ceshnu.jpg',
        registration:
            '/',
        leadLink:"1SZkSgZO9BVO9-rMkURy4T-f37GsdB-SPJRN_iw_ZKMM",    
    },
    
    
    {
        id: 1,
        link: ' Bizarre Bazaar',
        name: ' “Bizzare Bazzar”',
        tag: 'From Retro to Life',
        description:
            "The Bizarre Bazaar will feature various stalls or booths offering unique, creative, or unusual items. This marketplace will showcase products, crafts, food, and other interesting finds. It could include items for sale, artistic displays, or even interactive workshops where visitors can participate. The event will run throughout the day, offering attendees a chance to explore different booths, engage with vendors, and purchase one-of-a-kind items!",
        date: '28th January 2025, AB5 Room No: 108',
        time: '9:30 am - 11:30 am',
        organisers: [
            {
                key: '1',
                name: 'Panchadip Bhattacharjee',
                email: 'panchadip.mitblr2023@learner.manipal.edu',
                phoneNumber: '8116760429',
            },
            {
                key: '2',
                name: 'Renuka A',
                email: 'renuka.mitblr2022@learner.manipal.edu',
                phoneNumber: '9945877455',
            },
        ],
        poster: 'https://res.cloudinary.com/dpjf6btln/image/upload/v1633793272/GameDev_z8he5g.png',
        registration: '/',
        leadLink:"1OzpHafZbyBR4HhL0AFzZCxE9wLFvQt5KVvifp2PrxIE",    
    },
    {
        id: 1,
        link: 'GUEST_Talk',
        name: 'GUEST Talk',
        tag: '“Wisdom from the Experts, Straight to You!”',
        description:
            "A special guest speaker will host a talk focusing on a specific topic of interest. The guest could be a leader in a particular field, an academic, or someone with significant experience to share. The talk will dive deep into the subject matter, providing valuable insights, trends, or research. Attendees will have the opportunity to learn from an expert and engage with the content through a Q&A session afterward.",
        date: '28th January 2025, AB5 Room No: 108',
        time: '7:00pm - 9:00pm',
        organisers: [
            {
                key: '1',
                name: 'Panchadip Bhattacharjee',
                email: 'prabal@manipal.edupanchadip.mitblr2023@learner.manipal.edu',
                phoneNumber: '8116760429',
            },
            {
                key: '2',
                name: 'Renuka A',
                email: 'renuka.mitblr2022@learner.manipal.edu',
                phoneNumber: '9945877455',
            },
        ],
        poster: 'https://res.cloudinary.com/dlu72yo9b/image/upload/v1634185031/final_1_hug6mt.png',
        registration:
            'https://dare2compete.com/p/project-ayatjemis-dhruva-iiit-kottayams-annual-technical-fest-indian-institute-of-information-technology-iiit-kottayam-222433?lb=mrxkYIG',
        leadLink:"1XiSG12atq5e_Oq9dOc2-s5b3nUpZc9wzazl9hjhHEoc",    
    },
    {
        id: 1,
        link: 'digital_storytelling',
        name: 'Digital Storytelling',
        tag: '“Crafting Stories, Shaping Futures!”',
        description:
            'Digital Storytelling is an event where participants learn how to tell compelling stories using digital tools like video, animation, or multimedia presentations. The session will cover techniques and software used to craft engaging narratives, whether for marketing, education, or entertainment purposes.',
        date: '28th January 2025, AB5',
        time: '2:00pm - 4:30pm',
        organisers: [
            {
                key: '1',
                name: 'Panchadip Bhattacharjee',
                email: 'panchadip.mitblr2023@learner.manipal.edu',
                phoneNumber: '8116760429',
            },
            {
                key: '2',
                name: 'Renuka A',
                email: 'renuka.mitblr2022@learner.manipal.edu',
                phoneNumber: '9945877455',
            },
        ],

        poster: '/',
        registration:
            '/',
        leadLink:"1uFa0WOGnbz8Fa4q0Jx2knUplL5nbiGHJAOJNhHF5HQA",        
    },
    {
        id: 1,
        link: 'closing_ceremony',
        name: 'Closing Ceremony',
        tag: 'Clear the Pitch',
        description:
            'The Closing Ceremony marks the conclusion of the event.This ceremony will close the event on a positive note, leaving attendees with a sense of accomplishment and the anticipation of the next edition.',
        date: '28th January 2025',
        time: '5:00pm - 6:00pm, AB 5 Auditorium',
        organisers: [
            {
                key: '1',
                name: 'Panchadip Bhattacharjee',
                email: 'panchadip.mitblr2023@learner.manipal.edu',
                phoneNumber: '8116760429',
            },
            {
                key: '2',
                name: 'Renuka A',
                email: 'renuka.mitblr2022@learner.manipal.edu',
                phoneNumber: '9945877455',
            },
        ],
        poster: 'https://res.cloudinary.com/dpjf6btln/image/upload/v1633793227/SoldIT_bkhole.png',
        registration:
            '/',
        leadLink:"1C5UPwUzXGkWk33NaKwB1QDXURhK98zN1tlpLDiGNMWQ",        
    },
]

export { events }
