const challengingQuizData = {
  questions: [
    {
      question: "What is the term for a group of crows?",
      correct_answer: "Murder",
      incorrect_answers: ["Flock", "Pack", "Gaggle"],
    },
    {
      question: "What is the atomic number of lead?",
      correct_answer: "82",
      incorrect_answers: ["84", "81", "83"],
    },
    {
      question: "Who wrote 'The Art of War'?",
      correct_answer: "Sun Tzu",
      incorrect_answers: ["Confucius", "Laozi", "Mao Zedong"],
    },
    {
      question: "In which year did the United States enter World War I?",
      correct_answer: "1917",
      incorrect_answers: ["1914", "1916", "1918"],
    },
    {
      question:
        "Which composer wrote the music for 'The Ring of the Nibelung'?",
      correct_answer: "Richard Wagner",
      incorrect_answers: [
        "Johann Sebastian Bach",
        "Wolfgang Amadeus Mozart",
        "Ludwig van Beethoven",
      ],
    },
    {
      question:
        "What phenomenon describes the bending of light as it passes around the edge of an object?",
      correct_answer: "Diffraction",
      incorrect_answers: ["Reflection", "Refraction", "Dispersion"],
    },
    {
      question: "What is the hardest known substance in the universe?",
      correct_answer: "Nuclear pasta",
      incorrect_answers: ["Diamond", "Graphene", "Boron nitride"],
    },
    {
      question: "In computing, what does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Print Unit",
        "Computer Personal Unit",
        "Central Polygon Unit",
      ],
    },
    {
      question:
        "Which literary character is a symbol of rebellion in George Orwell's '1984'?",
      correct_answer: "Emmanuel Goldstein",
      incorrect_answers: ["Winston Smith", "Big Brother", "Julia"],
    },
    {
      question: "What was the original name of New York City?",
      correct_answer: "New Amsterdam",
      incorrect_answers: ["New London", "New Paris", "New Berlin"],
    },
    {
      question: "Who discovered the radioactive elements polonium and radium?",
      correct_answer: "Marie Curie",
      incorrect_answers: [
        "Dmitri Mendeleev",
        "Albert Einstein",
        "Isaac Newton",
      ],
    },
    {
      question:
        "What is the area of mathematics that studies the lengths and angles of triangles?",
      correct_answer: "Trigonometry",
      incorrect_answers: ["Calculus", "Geometry", "Algebra"],
    },
    {
      question: "Who painted 'The School of Athens'?",
      correct_answer: "Raphael",
      incorrect_answers: ["Michelangelo", "Leonardo da Vinci", "Titian"],
    },
    {
      question:
        "What is the scientific term for the study of the nervous system?",
      correct_answer: "Neurology",
      incorrect_answers: ["Cardiology", "Hematology", "Endocrinology"],
    },
    {
      question:
        "What element on the periodic table has the highest atomic weight?",
      correct_answer: "Oganesson",
      incorrect_answers: ["Lead", "Uranium", "Plutonium"],
    },
    {
      question:
        "What Greek philosopher is considered the father of Western philosophy?",
      correct_answer: "Socrates",
      incorrect_answers: ["Plato", "Aristotle", "Heraclitus"],
    },
    {
      question: "In which century did the Black Death occur?",
      correct_answer: "14th Century",
      incorrect_answers: ["13th Century", "15th Century", "16th Century"],
    },
    {
      question:
        "Which king of England was forced to sign the Magna Carta in 1215?",
      correct_answer: "King John",
      incorrect_answers: ["King Edward I", "King Henry V", "King Richard III"],
    },
    {
      question:
        "What is the branch of biology that deals with the classification of organisms?",
      correct_answer: "Taxonomy",
      incorrect_answers: ["Ecology", "Anatomy", "Phylogeny"],
    },
    {
      question: "What is the principle of conservation of energy?",
      correct_answer:
        "Energy cannot be created or destroyed, only transformed from one form to another.",
      incorrect_answers: [
        "Energy can be created but not destroyed.",
        "Energy can be destroyed but not created.",
        "Energy can be neither created nor destroyed but can diminish over time.",
      ],
    },
    {
      question:
        "What famous scientist was awarded the 1921 Nobel Prize in Physics for his work on theoretical physics?",
      correct_answer: "Albert Einstein",
      incorrect_answers: ["Niels Bohr", "Max Planck", "Erwin Schrödinger"],
    },
    {
      question:
        "What is the term used to describe the motion of a planet in its orbit where it is closest to the Sun?",
      correct_answer: "Perihelion",
      incorrect_answers: ["Aphelion", "Perigee", "Apogee"],
    },
    {
      question: "What is the capital city of Australia?",
      correct_answer: "Canberra",
      incorrect_answers: ["Sydney", "Melbourne", "Perth"],
    },
    {
      question:
        "Who was the prime minister of the United Kingdom at the start of World War II?",
      correct_answer: "Neville Chamberlain",
      incorrect_answers: [
        "Winston Churchill",
        "Clement Attlee",
        "Anthony Eden",
      ],
    },
    {
      question:
        "Which disease did Dr. Jonas Salk successfully create a vaccine for in the 1950s?",
      correct_answer: "Polio",
      incorrect_answers: ["Measles", "Tuberculosis", "Smallpox"],
    },
    {
      question: "What is the name of the longest river in South America?",
      correct_answer: "Amazon River",
      incorrect_answers: ["Orinoco River", "Parana River", "Magdalena River"],
    },
    {
      question: "Who is considered the father of modern chemistry?",
      correct_answer: "Antoine Lavoisier",
      incorrect_answers: ["John Dalton", "Dmitri Mendeleev", "Robert Boyle"],
    },
    {
      question: "What ancient language was the Rosetta Stone inscribed in?",
      correct_answer: "Egyptian Hieroglyphs",
      incorrect_answers: ["Sumerian Cuneiform", "Ancient Greek", "Pali"],
    },
    {
      question: "What philosopher coined the term 'cogito, ergo sum'?",
      correct_answer: "René Descartes",
      incorrect_answers: [
        "Søren Kierkegaard",
        "Friedrich Nietzsche",
        "Immanuel Kant",
      ],
    },
    {
      question: "What was the first synthetic polymer to be discovered?",
      correct_answer: "Bakelite",
      incorrect_answers: ["Nylon", "Polyethylene", "PVC"],
    },
    {
      question:
        "Which planet in our solar system is known for having the most elaborate ring system?",
      correct_answer: "Saturn",
      incorrect_answers: ["Jupiter", "Uranus", "Neptune"],
    },
    {
      question: "What is the hardest known natural material on Earth?",
      correct_answer: "Diamond",
      incorrect_answers: [
        "Graphene",
        "Boron nitride",
        "Wurtzite boron nitride",
      ],
    },
    {
      question:
        "What mathematical principle describes the distribution of prime numbers?",
      correct_answer: "The Riemann Hypothesis",
      incorrect_answers: [
        "Fermat's Last Theorem",
        "Poincaré Conjecture",
        "Cantor's Diagonal Argument",
      ],
    },
    {
      question: "Who was the first woman to win a Nobel Prize in Physics?",
      correct_answer: "Marie Curie",
      incorrect_answers: [
        "Lise Meitner",
        "Maria Goeppert-Mayer",
        "Dorothy Hodgkin",
      ],
    },
    {
      question:
        "What is the only letter that does not appear on the periodic table?",
      correct_answer: "J",
      incorrect_answers: ["Q", "X", "Z"],
    },
    {
      question: "Which composer became deaf later in his life?",
      correct_answer: "Ludwig van Beethoven",
      incorrect_answers: [
        "Wolfgang Amadeus Mozart",
        "Johann Sebastian Bach",
        "Franz Schubert",
      ],
    },
    {
      question: "What is the most abundant element in the Earth's crust?",
      correct_answer: "Oxygen",
      incorrect_answers: ["Silicon", "Aluminum", "Iron"],
    },
    {
      question: "What does 'CIA' stand for?",
      correct_answer: "Central Intelligence Agency",
      incorrect_answers: [
        "Central Inspection Agency",
        "Citizen's Intelligence Association",
        "Corporate Intelligence Agency",
      ],
    },
    {
      question:
        "Which country has the oldest continuously operating university in the world?",
      correct_answer: "Morocco",
      incorrect_answers: ["Italy", "Egypt", "China"],
    },
    {
      question: "Who developed the theory of relativity?",
      correct_answer: "Albert Einstein",
      incorrect_answers: ["Sir Isaac Newton", "Galileo Galilei", "Marie Curie"],
    },
    {
      question: "What ancient language was the Rosetta Stone written in?",
      correct_answer: "Egyptian Hieroglyphs",
      incorrect_answers: ["Sanskrit", "Latin", "Ancient Greek"],
    },
    {
      question: "What was the first element to be created artificially?",
      correct_answer: "Technetium",
      incorrect_answers: ["Plutonium", "Radium", "Curium"],
    },
    {
      question: "What planet is known as the evening star?",
      correct_answer: "Venus",
      incorrect_answers: ["Mars", "Jupiter", "Mercury"],
    },
    {
      question: "What is the capital of Turkey?",
      correct_answer: "Ankara",
      incorrect_answers: ["Istanbul", "Izmir", "Bursa"],
    },
    {
      question: "Who painted 'The Birth of Venus'?",
      correct_answer: "Sandro Botticelli",
      incorrect_answers: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
    },
    {
      question: "What is the smallest unit of memory in computer terminology?",
      correct_answer: "Bit",
      incorrect_answers: ["Byte", "Block", "Baud"],
    },
    {
      question: "Which country is the origin of the car brand 'Hyundai'?",
      correct_answer: "South Korea",
      incorrect_answers: ["Japan", "China", "India"],
    },
    {
      question: "Which disease is also known as the 'Black Death'?",
      correct_answer: "Bubonic Plague",
      incorrect_answers: ["Smallpox", "Tuberculosis", "Influenza"],
    },
    {
      question: "What is the largest type of deer?",
      correct_answer: "Moose",
      incorrect_answers: ["White-tailed deer", "Reindeer", "Mule deer"],
    },
    {
      question: "What is the longest-running Broadway show of all time?",
      correct_answer: "The Phantom of the Opera",
      incorrect_answers: ["Cats", "Les Misérables", "Hamilton"],
    },
    {
      question: "What does the 'G' in 'GPS' stand for?",
      correct_answer: "Global",
      incorrect_answers: ["Geographical", "Galactic", "General"],
    },
    {
      question: "What is the deepest part of the world's oceans?",
      correct_answer: "Mariana Trench",
      incorrect_answers: [
        "Tonga Trench",
        "Java Trench",
        "Kuril-Kamchatka Trench",
      ],
    },
    {
      question:
        "What gas do plants absorb from the environment to perform photosynthesis?",
      correct_answer: "Carbon Dioxide",
      incorrect_answers: ["Oxygen", "Nitrogen", "Hydrogen"],
    },
    {
      question: "What is the largest type of 'big cat' in the world?",
      correct_answer: "Tiger",
      incorrect_answers: ["Lion", "Jaguar", "Leopard"],
    },
    {
      question: "Which city is known as the City of Love?",
      correct_answer: "Paris",
      incorrect_answers: ["Venice", "Rome", "Vienna"],
    },
    {
      question: "What element does 'Au' represent on the periodic table?",
      correct_answer: "Gold",
      incorrect_answers: ["Silver", "Aluminum", "Oxygen"],
    },
    {
      question: "What is the capital of Egypt?",
      correct_answer: "Cairo",
      incorrect_answers: ["Luxor", "Alexandria", "Giza"],
    },
    {
      question: "What does the 'pH' scale measure?",
      correct_answer: "Acidity or Alkalinity",
      incorrect_answers: ["Temperature", "Pressure", "Density"],
    },
    {
      question: "Which animal is an apex predator in the ocean?",
      correct_answer: "Shark",
      incorrect_answers: ["Dolphin", "Whale", "Octopus"],
    },
    {
      question:
        "What is the traditional number of wonders of the ancient world?",
      correct_answer: "Seven",
      incorrect_answers: ["Five", "Six", "Eight"],
    },
    {
      question: "What color is cobalt?",
      correct_answer: "Blue",
      incorrect_answers: ["Red", "Green", "Yellow"],
    },
    {
      question: "What is the name of the largest ocean on earth?",
      correct_answer: "Pacific Ocean",
      incorrect_answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      correct_answer: "Jane Austen",
      incorrect_answers: ["Emily Brontë", "Louisa May Alcott", "Mary Shelley"],
    },
    {
      question:
        "What is the term for a word that is similar in meaning to another word?",
      correct_answer: "Synonym",
      incorrect_answers: ["Antonym", "Homonym", "Acronym"],
    },
    {
      question: "What is the name of the longest river in Africa?",
      correct_answer: "Nile",
      incorrect_answers: ["Congo", "Niger", "Zambezi"],
    },
    {
      question: "What is the hardest known natural material?",
      correct_answer: "Diamond",
      incorrect_answers: ["Gold", "Iron", "Ruby"],
    },
    {
      question: "Who was the first woman to win a Nobel Prize (in 1903)?",
      correct_answer: "Marie Curie",
      incorrect_answers: ["Rosalind Franklin", "Ada Lovelace", "Lise Meitner"],
    },
    {
      question: "Which country is the origin of the cocktail Mojito?",
      correct_answer: "Cuba",
      incorrect_answers: ["Mexico", "Brazil", "Spain"],
    },
    {
      question: "What does the acronym 'LASER' stand for?",
      correct_answer: "Light Amplification by Stimulated Emission of Radiation",
      incorrect_answers: [
        "Light Amplification by Stimulated Energy of Radiation",
        "Light Amplification by Stimulated Emission of Rays",
        "Light Analysis by Stimulated Emission of Radiation",
      ],
    },
    {
      question: "What is the primary ingredient in traditional Italian pesto?",
      correct_answer: "Basil",
      incorrect_answers: ["Coriander", "Parsley", "Mint"],
    },
    {
      question: "Which vitamin is predominantly found in citrus fruits?",
      correct_answer: "Vitamin C",
      incorrect_answers: ["Vitamin A", "Vitamin D", "Vitamin E"],
    },
    {
      question: "What is the capital of Iceland?",
      correct_answer: "Reykjavik",
      incorrect_answers: ["Oslo", "Copenhagen", "Helsinki"],
    },
    {
      question:
        "What is the name of the phobia that involves an irrational fear of spiders?",
      correct_answer: "Arachnophobia",
      incorrect_answers: ["Acrophobia", "Agoraphobia", "Claustrophobia"],
    },
    {
      question:
        "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
      correct_answer: "Sputnik 1",
      incorrect_answers: ["Explorer 1", "Vostok 1", "Apollo 11"],
    },
    {
      question: "What is the largest internal organ of the human body?",
      correct_answer: "Liver",
      incorrect_answers: ["Heart", "Lung", "Kidney"],
    },
    {
      question: "Which planet in our solar system is known for having a ring?",
      correct_answer: "Saturn",
      incorrect_answers: ["Jupiter", "Mars", "Uranus"],
    },
    {
      question: "What musical instrument has keys, pedals, and strings?",
      correct_answer: "Piano",
      incorrect_answers: ["Guitar", "Violin", "Harp"],
    },
    {
      question: "What is the art of paper folding called?",
      correct_answer: "Origami",
      incorrect_answers: ["Decoupage", "Papier-mâché", "Calligraphy"],
    },
    {
      question: "Which animal can be seen on the Porsche logo?",
      correct_answer: "Horse",
      incorrect_answers: ["Lion", "Eagle", "Bear"],
    },
    {
      question: "What is the study of mushrooms called?",
      correct_answer: "Mycology",
      incorrect_answers: ["Microbiology", "Botany", "Zoology"],
    },
  ],
};

export default challengingQuizData;
