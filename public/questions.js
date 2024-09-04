const quizData = {
  questions: [
    {
      question: "What is the capital of France?",
      correct_answer: "Paris",
      incorrect_answers: ["London", "Berlin", "Madrid"],
    },
    {
      question: "Who painted the 'Mona Lisa'?",
      correct_answer: "Leonardo da Vinci",
      incorrect_answers: ["Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    },
    {
      question: "What is the planet closest to the Sun?",
      correct_answer: "Mercury",
      incorrect_answers: ["Venus", "Mars", "Earth"],
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      correct_answer: "William Shakespeare",
      incorrect_answers: ["Charles Dickens", "Mark Twain", "Dante Alighieri"],
    },
    {
      question: "What is the atomic number of oxygen?",
      correct_answer: "8",
      incorrect_answers: ["6", "10", "12"],
    },
    {
      question: "What is the fastest land animal?",
      correct_answer: "Cheetah",
      incorrect_answers: ["Lion", "Leopard", "Elephant"],
    },
    {
      question: "Which city is famous for the Leaning Tower?",
      correct_answer: "Pisa",
      incorrect_answers: ["Florence", "Rome", "Venice"],
    },
    {
      question: "In what year did World War I begin?",
      correct_answer: "1914",
      incorrect_answers: ["1918", "1939", "1945"],
    },
    {
      question: "What is the largest ocean in the world?",
      correct_answer: "Pacific Ocean",
      incorrect_answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    },
    {
      question: "Who discovered America?",
      correct_answer: "Christopher Columbus",
      incorrect_answers: ["Vasco da Gama", "Marco Polo", "Amerigo Vespucci"],
    },
    {
      question: "What is the longest river in the world?",
      correct_answer: "Nile",
      incorrect_answers: ["Amazon", "Mississippi", "Ganges"],
    },
    {
      question: "Who wrote 'The Divine Comedy'?",
      correct_answer: "Dante Alighieri",
      incorrect_answers: [
        "Giovanni Boccaccio",
        "Francesco Petrarca",
        "Ludovico Ariosto",
      ],
    },
    {
      question: "What is the largest island in the world?",
      correct_answer: "Greenland",
      incorrect_answers: ["Australia", "Madagascar", "Iceland"],
    },
    {
      question: "What is the highest mountain in the world?",
      correct_answer: "Everest",
      incorrect_answers: ["Kilimanjaro", "K2", "Mont Blanc"],
    },
    {
      question: "What is the unit of measurement for electric current?",
      correct_answer: "Ampere",
      incorrect_answers: ["Volt", "Watt", "Ohm"],
    },
    {
      question: "Who wrote 'The Betrothed'?",
      correct_answer: "Alessandro Manzoni",
      incorrect_answers: ["Giovanni Verga", "Luigi Pirandello", "Italo Svevo"],
    },
    {
      question: "What is the chemical symbol for gold?",
      correct_answer: "Au",
      incorrect_answers: ["Ag", "Pb", "Fe"],
    },
    {
      question: "Which country has the largest population?",
      correct_answer: "China",
      incorrect_answers: ["India", "United States", "Russia"],
    },
    {
      question: "What is the national animal of Australia?",
      correct_answer: "Kangaroo",
      incorrect_answers: ["Koala", "Emu", "Platypus"],
    },
    {
      question: "Who sculpted 'David'?",
      correct_answer: "Michelangelo",
      incorrect_answers: ["Donatello", "Raphael", "Leonardo da Vinci"],
    },
    {
      question: "What is the largest continent?",
      correct_answer: "Asia",
      incorrect_answers: ["Africa", "America", "Europe"],
    },
    {
      question: "Who invented the telephone?",
      correct_answer: "Alexander Graham Bell",
      incorrect_answers: ["Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    },
    {
      question: "What is the only metal that is liquid at room temperature?",
      correct_answer: "Mercury",
      incorrect_answers: ["Iron", "Gold", "Silver"],
    },
    {
      question: "Who wrote 'The Name of the Rose'?",
      correct_answer: "Umberto Eco",
      incorrect_answers: [
        "Italo Calvino",
        "Luigi Pirandello",
        "Giovanni Verga",
      ],
    },
    {
      question: "What is the most populous city in the world?",
      correct_answer: "Tokyo",
      incorrect_answers: ["New York", "Shanghai", "Mumbai"],
    },
    {
      question: "What is the most abundant gas in the Earth's atmosphere?",
      correct_answer: "Nitrogen",
      incorrect_answers: ["Oxygen", "Carbon Dioxide", "Argon"],
    },
    {
      question: "Who discovered the theory of relativity?",
      correct_answer: "Albert Einstein",
      incorrect_answers: ["Isaac Newton", "Galileo Galilei", "Niels Bohr"],
    },
    {
      question: "What is the capital of Spain?",
      correct_answer: "Madrid",
      incorrect_answers: ["Barcelona", "Valencia", "Seville"],
    },
    {
      question: "What is the largest animal in the world?",
      correct_answer: "Blue Whale",
      incorrect_answers: ["Elephant", "Great White Shark", "Polar Bear"],
    },
    {
      question: "Who wrote 'War and Peace'?",
      correct_answer: "Leo Tolstoy",
      incorrect_answers: [
        "Fyodor Dostoevsky",
        "Alexander Pushkin",
        "Anton Chekhov",
      ],
    },
    {
      question: "Which country is the largest by land area?",
      correct_answer: "Russia",
      incorrect_answers: ["Canada", "China", "United States"],
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      correct_answer: "Mars",
      incorrect_answers: ["Jupiter", "Saturn", "Venus"],
    },
    {
      question: "What is the official currency of Japan?",
      correct_answer: "Yen",
      incorrect_answers: ["Won", "Yuan", "Rupee"],
    },
    {
      question: "Who composed the Ninth Symphony?",
      correct_answer: "Ludwig van Beethoven",
      incorrect_answers: [
        "Wolfgang Amadeus Mozart",
        "Johann Sebastian Bach",
        "Franz Schubert",
      ],
    },
    {
      question: "What is the largest desert in the world?",
      correct_answer: "Sahara",
      incorrect_answers: ["Gobi", "Kalahari", "Atacama"],
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      correct_answer: "F. Scott Fitzgerald",
      incorrect_answers: ["Ernest Hemingway", "John Steinbeck", "Mark Twain"],
    },
    {
      question: "What is the second planet in the Solar System?",
      correct_answer: "Venus",
      incorrect_answers: ["Mars", "Earth", "Mercury"],
    },
    {
      question: "What is the chemical symbol for sodium?",
      correct_answer: "Na",
      incorrect_answers: ["S", "So", "Sd"],
    },
    {
      question: "What is Edvard Munch's most famous painting?",
      correct_answer: "The Scream",
      incorrect_answers: ["Starry Night", "Mona Lisa", "Guernica"],
    },
    {
      question: "What is the largest freshwater lake in the world?",
      correct_answer: "Lake Superior",
      incorrect_answers: ["Lake Victoria", "Lake Baikal", "Lake Tanganyika"],
    },
    {
      question: "Who wrote 'The Little Prince'?",
      correct_answer: "Antoine de Saint-Exupéry",
      incorrect_answers: ["Jules Verne", "Victor Hugo", "Albert Camus"],
    },
    {
      question: "What is the capital of Australia?",
      correct_answer: "Canberra",
      incorrect_answers: ["Sydney", "Melbourne", "Brisbane"],
    },
    {
      question: "What metal is used to make most modern coins?",
      correct_answer: "Nickel",
      incorrect_answers: ["Gold", "Silver", "Iron"],
    },
    {
      question: "Which planet is known for its rings?",
      correct_answer: "Saturn",
      incorrect_answers: ["Jupiter", "Uranus", "Neptune"],
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      correct_answer: "Jane Austen",
      incorrect_answers: ["Charlotte Brontë", "Emily Brontë", "George Eliot"],
    },
    {
      question: "What is the highest waterfall in the world?",
      correct_answer: "Angel Falls",
      incorrect_answers: ["Victoria Falls", "Niagara Falls", "Iguazu Falls"],
    },
    {
      question: "What is the largest terrestrial mammal?",
      correct_answer: "African Elephant",
      incorrect_answers: ["Rhinoceros", "Hippopotamus", "Giraffe"],
    },
    {
      question: "What is the lightest chemical element?",
      correct_answer: "Hydrogen",
      incorrect_answers: ["Helium", "Oxygen", "Lithium"],
    },
    {
      question: "What is the name of the galaxy that Earth is located in?",
      correct_answer: "Milky Way",
      incorrect_answers: ["Andromeda", "Triangle", "Magellanic Cloud"],
    },
    {
      question: "Which nation is home to the Colosseum?",
      correct_answer: "Italy",
      incorrect_answers: ["Spain", "Greece", "France"],
    },
    {
      question: "What color do you get by mixing blue and yellow?",
      correct_answer: "Green",
      incorrect_answers: ["Red", "Purple", "Orange"],
    },
    {
      question: "Which animal is known as the ship of the desert?",
      correct_answer: "Camel",
      incorrect_answers: ["Horse", "Elephant", "Lion"],
    },
    {
      question: "What is the capital of Spain?",
      correct_answer: "Madrid",
      incorrect_answers: ["Barcelona", "Seville", "Lisbon"],
    },
    {
      question:
        "Which element is represented by the symbol 'O' on the periodic table?",
      correct_answer: "Oxygen",
      incorrect_answers: ["Gold", "Silver", "Iron"],
    },
    {
      question: "What is the largest planet in our Solar System?",
      correct_answer: "Jupiter",
      incorrect_answers: ["Mars", "Saturn", "Earth"],
    },
    {
      question: "Which vitamin is primarily obtained from sunlight?",
      correct_answer: "Vitamin D",
      incorrect_answers: ["Vitamin A", "Vitamin B", "Vitamin C"],
    },
    {
      question: "Who wrote 'Macbeth'?",
      correct_answer: "William Shakespeare",
      incorrect_answers: ["Charles Dickens", "Jane Austen", "Leo Tolstoy"],
    },
    {
      question: "What is the hardest natural substance on Earth?",
      correct_answer: "Diamond",
      incorrect_answers: ["Gold", "Iron", "Quartz"],
    },
    {
      question: "In which continent is the Amazon Rainforest located?",
      correct_answer: "South America",
      incorrect_answers: ["North America", "Africa", "Asia"],
    },
    {
      question: "What is the main ingredient in bread?",
      correct_answer: "Flour",
      incorrect_answers: ["Sugar", "Salt", "Yeast"],
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      correct_answer: "Carbon Dioxide",
      incorrect_answers: ["Oxygen", "Nitrogen", "Hydrogen"],
    },
    {
      question: "What is the longest river in the world?",
      correct_answer: "Amazon River",
      incorrect_answers: ["Nile River", "Yangtze River", "Mississippi River"],
    },
    {
      question: "Who painted the Mona Lisa?",
      correct_answer: "Leonardo da Vinci",
      incorrect_answers: ["Pablo Picasso", "Vincent Van Gogh", "Michelangelo"],
    },
    {
      question: "What is the chemical symbol for water?",
      correct_answer: "H2O",
      incorrect_answers: ["CO2", "NaCl", "O2"],
    },
    {
      question: "Which planet is known as the Red Planet?",
      correct_answer: "Mars",
      incorrect_answers: ["Jupiter", "Saturn", "Venus"],
    },
    {
      question: "What do bees collect and use to create honey?",
      correct_answer: "Nectar",
      incorrect_answers: ["Pollen", "Sap", "Leaves"],
    },
    {
      question: "What type of animal is a frog?",
      correct_answer: "Amphibian",
      incorrect_answers: ["Reptile", "Mammal", "Bird"],
    },
    {
      question: "What device is used to measure temperature?",
      correct_answer: "Thermometer",
      incorrect_answers: ["Barometer", "Altimeter", "Compass"],
    },
    {
      question: "What is the capital of Australia?",
      correct_answer: "Canberra",
      incorrect_answers: ["Sydney", "Melbourne", "Perth"],
    },
    {
      question: "Who discovered gravity when he saw a falling apple?",
      correct_answer: "Isaac Newton",
      incorrect_answers: [
        "Albert Einstein",
        "Galileo Galilei",
        "Nicolaus Copernicus",
      ],
    },
    {
      question:
        "What is traditionally worn by a Scottish man at formal events?",
      correct_answer: "Kilt",
      incorrect_answers: ["Sari", "Kimono", "Toga"],
    },
    {
      question: "What is the chemical formula for table salt?",
      correct_answer: "NaCl",
      incorrect_answers: ["KCl", "LiCl", "MgCl2"],
    },
    {
      question: "What type of tree do acorns come from?",
      correct_answer: "Oak",
      incorrect_answers: ["Maple", "Pine", "Birch"],
    },
    {
      question: "What is sushi traditionally wrapped in?",
      correct_answer: "Seaweed",
      incorrect_answers: ["Rice paper", "Lettuce", "Spinach"],
    },
    {
      question: "What is the smallest continent by land area?",
      correct_answer: "Australia",
      incorrect_answers: ["Europe", "Antarctica", "South America"],
    },
    {
      question: "Which instrument is used for measuring wind speed?",
      correct_answer: "Anemometer",
      incorrect_answers: ["Audiometer", "Dynamometer", "Spectrometer"],
    },
    {
      question: "What is the study of the weather called?",
      correct_answer: "Meteorology",
      incorrect_answers: ["Ecology", "Astronomy", "Geology"],
    },
    {
      question: "What is the color of an emerald?",
      correct_answer: "Green",
      incorrect_answers: ["Red", "Blue", "Yellow"],
    },
    {
      question: "Which country is known as the land of the rising sun?",
      correct_answer: "Japan",
      incorrect_answers: ["China", "Australia", "Thailand"],
    },
    {
      question: "Which element is denoted by the chemical symbol 'N'?",
      correct_answer: "Nitrogen",
      incorrect_answers: ["Neon", "Nickel", "Natrium (Sodium)"],
    },
    {
      question: "What musical period did Ludwig van Beethoven belong to?",
      correct_answer: "Classical and Romantic",
      incorrect_answers: ["Baroque", "Renaissance", "Contemporary"],
    },
    {
      question: "What is the currency of Japan?",
      correct_answer: "Yen",
      incorrect_answers: ["Won", "Dollar", "Euro"],
    },
    {
      question: "Which organ in the human body purifies the blood?",
      correct_answer: "Kidneys",
      incorrect_answers: ["Heart", "Lungs", "Liver"],
    },
    {
      question: "What year did the Berlin Wall fall?",
      correct_answer: "1989",
      incorrect_answers: ["1985", "1991", "1995"],
    },
    {
      question: "Who is the author of 'The Little Prince'?",
      correct_answer: "Antoine de Saint-Exupéry",
      incorrect_answers: [
        "Hans Christian Andersen",
        "Brothers Grimm",
        "Lewis Carroll",
      ],
    },
    {
      question: "In which city would you find the Colosseum?",
      correct_answer: "Rome",
      incorrect_answers: ["Athens", "Istanbul", "Cairo"],
    },
    {
      question: "What is the most abundant gas in the Earth's atmosphere?",
      correct_answer: "Nitrogen",
      incorrect_answers: ["Oxygen", "Carbon Dioxide", "Hydrogen"],
    },
    {
      question: "Who painted 'Girl with a Pearl Earring'?",
      correct_answer: "Johannes Vermeer",
      incorrect_answers: ["Rembrandt", "Van Gogh", "Picasso"],
    },
    {
      question: "Which part of the plant conducts photosynthesis?",
      correct_answer: "Leaf",
      incorrect_answers: ["Root", "Stem", "Flower"],
    },
    {
      question: "What is the main ingredient in chocolate?",
      correct_answer: "Cocoa",
      incorrect_answers: ["Milk", "Sugar", "Butter"],
    },
    {
      question: "Which country is known for the creation of the kilt?",
      correct_answer: "Scotland",
      incorrect_answers: ["Ireland", "Wales", "England"],
    },
    {
      question: "What type of animal is a 'Portuguese Man O' War'?",
      correct_answer: "Jellyfish",
      incorrect_answers: ["Bird", "Fish", "Mammal"],
    },
    {
      question: "What geometric shape is generally used for stop signs?",
      correct_answer: "Octagon",
      incorrect_answers: ["Hexagon", "Circle", "Square"],
    },
    {
      question: "What is the name of the fairy in Peter Pan?",
      correct_answer: "Tinker Bell",
      incorrect_answers: ["Peter Pan", "Wendy", "Captain Hook"],
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
  ],
};

export default quizData;
