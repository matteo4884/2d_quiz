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
  ],
};

export default quizData;
