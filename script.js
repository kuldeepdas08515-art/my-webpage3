const quizData = [
    // --- PHYSICS ---
    { question: "Newton's first law of motion is also known as?", options: ["Law of Momentum", "Law of Inertia", "Law of Action-Reaction", "Law of Gravity"], correct: "Law of Inertia" },
    { question: "What is the S.I. unit of Power?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: "Watt" },
    { question: "Light year is a unit of measurement of?", options: ["Time", "Speed of light", "Stellar distance", "Intensity of light"], correct: "Stellar distance" },
    { question: "The mirror used by dentists to see large images of teeth is?", options: ["Convex mirror", "Plane mirror", "Concave mirror", "Cylindrical mirror"], correct: "Concave mirror" },
    { question: "The splitting of white light into its component colors is called?", options: ["Refraction", "Reflection", "Dispersion", "Diffraction"], correct: "Dispersion" },
    { question: "The resistance of a conductor is inversely proportional to its?", options: ["Length", "Area of cross-section", "Temperature", "Resistivity"], correct: "Area of cross-section" },
    { question: "Sound travels fastest in which medium?", options: ["Vacuum", "Air", "Water", "Steel"], correct: "Steel" },
    { question: "Device used to measure electric current in a circuit is?", options: ["Voltmeter", "Ammeter", "Galvanometer", "Ohmeter"], correct: "Ammeter" },
    { question: "The energy possessed by a body due to its motion is?", options: ["Potential Energy", "Kinetic Energy", "Chemical Energy", "Nuclear Energy"], correct: "Kinetic Energy" },
    { question: "Value of Acceleration due to gravity (g) at the center of Earth is?", options: ["9.8 m/s²", "Infinite", "Zero", "1 m/s²"], correct: "Zero" },

    // --- CHEMISTRY ---
    { question: "Modern Periodic Table is based on?", options: ["Atomic Mass", "Atomic Number", "Valency", "Atomic Volume"], correct: "Atomic Number" },
    { question: "Which gas is known as 'Laughing Gas'?", options: ["Nitrogen dioxide", "Nitrous oxide", "Nitric oxide", "Nitrogen pentoxide"], correct: "Nitrous oxide" },
    { question: "The pH value of pure water is?", options: ["0", "14", "7", "1"], correct: "7" },
    { question: "Which is the hardest natural substance found on Earth?", options: ["Gold", "Diamond", "Iron", "Platinum"], correct: "Diamond" },
    { question: "The process of coating iron with zinc to prevent rusting is?", options: ["Crystallization", "Galvanization", "Electrolysis", "Oxidation"], correct: "Galvanization" },
    { question: "Which acid is present in ant sting?", options: ["Methanoic acid", "Citric acid", "Oxalic acid", "Acetic acid"], correct: "Methanoic acid" },
    { question: "Baking soda is chemically known as?", options: ["Sodium Carbonate", "Sodium Bicarbonate", "Calcium Carbonate", "Sodium Chloride"], correct: "Sodium Bicarbonate" },
    { question: "The most abundant gas in the Earth's atmosphere is?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: "Nitrogen" },
    { question: "Which non-metal is a liquid at room temperature?", options: ["Mercury", "Bromine", "Iodine", "Chlorine"], correct: "Bromine" },
    { question: "The mass number of an atom is the sum of?", options: ["Protons and Electrons", "Electrons and Neutrons", "Protons and Neutrons", "Only Protons"], correct: "Protons and Neutrons" },

    // --- BIOLOGY ---
    { question: "Which cell organelle is called the 'Powerhouse of the Cell'?", options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"], correct: "Mitochondria" },
    { question: "The green pigment present in leaves is?", options: ["Hemoglobin", "Chlorophyll", "Melanin", "Bilirubin"], correct: "Chlorophyll" },
    { question: "Which vitamin deficiency causes Scurvy?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: "Vitamin C" },
    { question: "Human heart has how many chambers?", options: ["2", "3", "4", "1"], correct: "4" },
    { question: "Which hormone regulates blood sugar level in humans?", options: ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"], correct: "Insulin" },
    { question: "The basic unit of life is?", options: ["Tissue", "Organ", "Cell", "DNA"], correct: "Cell" },
    { question: "Which blood group is known as the 'Universal Donor'?", options: ["AB+", "A+", "B+", "O-"], correct: "O-" },
    { question: "Xylem in plants is responsible for transport of?", options: ["Food", "Water", "Amino acids", "Oxygen"], correct: "Water" },
    { question: "Study of fungi is known as?", options: ["Phycology", "Mycology", "Virology", "Bacteriology"], correct: "Mycology" },
    { question: "Total number of bones in an adult human body is?", options: ["206", "300", "208", "210"], correct: "206" },

    // --- CHEMISTRY CONT. ---
    { question: "Solder is an alloy of?", options: ["Cu and Zn", "Pb and Sn", "Cu and Sn", "Al and Mg"], correct: "Pb and Sn" },
    { question: "The chemical formula of Plaster of Paris is?", options: ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaSO₄.5H₂O", "CaCO₃"], correct: "CaSO₄.½H₂O" },
    { question: "Which element is common to all acids?", options: ["Oxygen", "Hydrogen", "Sulfur", "Chlorine"], correct: "Hydrogen" },
    { question: "Diamond and Graphite are ______ of Carbon.", options: ["Isomers", "Allotropes", "Isotopes", "Isobars"], correct: "Allotropes" },
    { question: "Which metal is kept immersed in kerosene oil?", options: ["Iron", "Sodium", "Gold", "Silver"], correct: "Sodium" },
    { question: "What is the valency of Magnesium (Mg)?", options: ["1", "2", "3", "4"], correct: "2" },
    { question: "Rusting of iron is an example of?", options: ["Reduction", "Oxidation", "Substitution", "Polymerization"], correct: "Oxidation" },
    { question: "Which is used in making pencil leads?", options: ["Charcoal", "Graphite", "Lead", "Coal"], correct: "Graphite" },
    { question: "The purest form of water is?", options: ["Tap water", "River water", "Rain water", "Sea water"], correct: "Rain water" },
    { question: "Cinnabar is an ore of which metal?", options: ["Lead", "Copper", "Mercury", "Iron"], correct: "Mercury" },

    // --- PHYSICS CONT. ---
    { question: "1 Horsepower is equal to how many Watts?", options: ["746 W", "1000 W", "500 W", "750 W"], correct: "746 W" },
    { question: "The escape velocity on Earth is approximately?", options: ["11.2 km/s", "8.5 km/s", "5.0 km/s", "15 km/s"], correct: "11.2 km/s" },
    { question: "Which lens is used to correct Myopia (Short-sightedness)?", options: ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"], correct: "Concave lens" },
    { question: "The sky appears blue due to?", options: ["Refraction", "Reflection", "Scattering of light", "Total Internal Reflection"], correct: "Scattering of light" },
    { question: "The heating element of an electric iron is made of?", options: ["Copper", "Nichrome", "Iron", "Tungsten"], correct: "Nichrome" },
    { question: "Atmospheric pressure is measured by?", options: ["Thermometer", "Barometer", "Hydrometer", "Lactometer"], correct: "Barometer" },
    { question: "The frequency of AC mains in India is?", options: ["60 Hz", "50 Hz", "100 Hz", "220 Hz"], correct: "50 Hz" },
    { question: "Hydraulic brakes work on which principle?", options: ["Bernoulli's principle", "Pascal's law", "Archimedes' principle", "Newton's law"], correct: "Pascal's law" },
    { question: "Speed of light is maximum in?", options: ["Air", "Water", "Glass", "Vacuum"], correct: "Vacuum" },
    { question: "A transformer works on the principle of?", options: ["Self Induction", "Mutual Induction", "Eddy currents", "Magnetic effect"], correct: "Mutual Induction" },

    // --- BIOLOGY CONT. ---
    { question: "Which part of the brain controls balance and posture?", options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], correct: "Cerebellum" },
    { question: "Bile is produced by which organ?", options: ["Stomach", "Pancreas", "Liver", "Gall bladder"], correct: "Liver" },
    { question: "The functional unit of Kidney is?", options: ["Neuron", "Nephron", "Alveoli", "Villi"], correct: "Nephron" },
    { question: "Blood clotting is helped by which vitamin?", options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"], correct: "Vitamin K" },
    { question: "Which is the smallest bone in human body?", options: ["Femur", "Tibia", "Stapes", "Humerus"], correct: "Stapes" },
    { question: "Double fertilization is a characteristic of?", options: ["Algae", "Fungi", "Angiosperms", "Gymnosperms"], correct: "Angiosperms" },
    { question: "Who is known as the 'Father of Genetics'?", options: ["Charles Darwin", "Gregor Mendel", "Lamarck", "Aristotle"], correct: "Gregor Mendel" },
    { question: "DNA stands for?", options: ["Deoxyribonucleic acid", "Diribonucleic acid", "Deoxyribose acid", "Deoxynucleic acid"], correct: "Deoxyribonucleic acid" },
    { question: "Energy currency of the cell is?", options: ["ADP", "ATP", "AMP", "DNA"], correct: "ATP" },
    { question: "Penicillin was discovered by?", options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner"], correct: "Alexander Fleming" },

    // --- PHYSICS/CHEMISTRY MIX ---
    { question: "LPG is a mixture of?", options: ["Methane and Ethane", "Propane and Butane", "Ethane and Propane", "Butane and Methane"], correct: "Propane and Butane" },
    { question: "Weight of an object on Moon is ____ of its weight on Earth.", options: ["1/2", "1/4", "1/6", "1/10"], correct: "1/6" },
    { question: "Which isotope is used in the treatment of Cancer?", options: ["U-235", "Co-60", "I-131", "C-14"], correct: "Co-60" },
    { question: "Mirage is an optical illusion caused by?", options: ["Refraction only", "Total Internal Reflection", "Reflection only", "Diffraction"], correct: "Total Internal Reflection" },
    { question: "Which acid is present in Tamarind?", options: ["Citric acid", "Tartaric acid", "Acetic acid", "Lactic acid"], correct: "Tartaric acid" },
    { question: "What is the escape velocity on Earth?", options: ["11.2 km/s", "11.2 m/s", "9.8 km/s", "7.9 km/s"], correct: "11.2 km/s" },
    { question: "Bronze is an alloy of?", options: ["Cu and Zn", "Cu and Sn", "Fe and Ni", "Pb and Sn"], correct: "Cu and Sn" },
    { question: "Kilowatt-hour (kWh) is the unit of?", options: ["Power", "Force", "Electrical Energy", "Current"], correct: "Electrical Energy" },
    { question: "Permanent hardness of water is removed by adding?", options: ["Chlorine", "Washing Soda", "Potassium Permanganate", "Bleaching Powder"], correct: "Washing Soda" },
    { question: "Sound waves in air are?", options: ["Transverse", "Longitudinal", "Electromagnetic", "Polarized"], correct: "Longitudinal" },

    // --- BIOLOGY/ECOLOGY ---
    { question: "World Environment Day is celebrated on?", options: ["June 5", "April 22", "September 16", "December 1"], correct: "June 5" },
    { question: "Which gas is released during Photosynthesis?", options: ["CO₂", "Oxygen", "Nitrogen", "Hydrogen"], correct: "Oxygen" },
    { question: "Which is an example of a viral disease?", options: ["Cholera", "Tuberculosis", "Influenza", "Typhoid"], correct: "Influenza" },
    { question: "Malaria is caused by?", options: ["Bacteria", "Virus", "Protozoa", "Fungi"], correct: "Protozoa" },
    { question: "The master gland of human body is?", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], correct: "Pituitary" },
    { question: "Which vitamin is synthesized in the skin by sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: "Vitamin D" },
    { question: "Vermicomposting is done by?", options: ["Fungi", "Bacteria", "Earthworms", "Birds"], correct: "Earthworms" },
    { question: "In a food chain, plants are called?", options: ["Decomposers", "Consumers", "Producers", "Omnivores"], correct: "Producers" },
    { question: "The scientific name of human being is?", options: ["Homo habilis", "Homo erectus", "Homo sapiens", "Homo neanderthalensis"], correct: "Homo sapiens" },
    { question: "Which tissue connects bone to bone?", options: ["Tendon", "Ligament", "Cartilage", "Muscle"], correct: "Ligament" },

    // --- GENERAL SCIENCE ---
    { question: "The melting point of ice is?", options: ["273 K", "0 K", "100 K", "373 K"], correct: "273 K" },
    { question: "The most electronegative element is?", options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"], correct: "Fluorine" },
    { question: "Human eye forms image at?", options: ["Cornea", "Pupil", "Iris", "Retina"], correct: "Retina" },
    { question: "Newton's second law gives the measure of?", options: ["Acceleration", "Force", "Momentum", "Inertia"], correct: "Force" },
    { question: "Which instrument is used to measure humidity?", options: ["Hygrometer", "Hydrometer", "Anemometer", "Lactometer"], correct: "Hygrometer" },
    { question: "Dry ice is nothing but?", options: ["Liquid Oxygen", "Solid CO₂", "Solid Nitrogen", "Ice with salt"], correct: "Solid CO₂" },
    { question: "Sun gets its energy from?", options: ["Nuclear Fission", "Nuclear Fusion", "Chemical reaction", "Burning of gases"], correct: "Nuclear Fusion" },
    { question: "A solar cell converts solar energy into?", options: ["Heat energy", "Chemical energy", "Electrical energy", "Light energy"], correct: "Electrical energy" },
    { question: "Soap is a sodium salt of?", options: ["Dicarboxylic acids", "Fatty acids", "Mineral acids", "Glycerol"], correct: "Fatty acids" },
    { question: "The frequency range of Audible sound for humans is?", options: ["2 Hz - 20 Hz", "20 Hz - 20 kHz", "20 kHz - 100 kHz", "10 Hz - 10 kHz"], correct: "20 Hz - 20 kHz" },
    { question: "Decibel is the unit of?", options: ["Speed of light", "Intensity of sound", "Intensity of heat", "Frequency"], correct: "Intensity of sound" },
    { question: "Optical fiber works on the principle of?", options: ["Refraction", "Scattering", "Total Internal Reflection", "Interference"], correct: "Total Internal Reflection" },
    { question: "In a convex mirror, image formed is always?", options: ["Real and Inverted", "Virtual and Erect", "Virtual and Inverted", "Real and Erect"], correct: "Virtual and Erect" },
    { question: "Fuse wire has?", options: ["High resistance, low melting point", "Low resistance, high melting point", "High resistance, high melting point", "Low resistance, low melting point"], correct: "High resistance, low melting point" },
    { question: "Process of conversion of liquid to gas at any temperature below its boiling point is?", options: ["Boiling", "Melting", "Evaporation", "Sublimation"], correct: "Evaporation" },
    { question: "Isotopes have same number of?", options: ["Neutrons", "Electrons", "Protons", "Mass number"], correct: "Protons" },
    { question: "pH of gastric juice in stomach is?", options: ["Less than 7", "More than 7", "Exactly 7", "0"], correct: "Less than 7" },
    { question: "The main constituent of Hemoglobin is?", options: ["Magnesium", "Iron", "Calcium", "Zinc"], correct: "Iron" },
    { question: "Plant cell wall is mainly composed of?", options: ["Lignin", "Cellulose", "Pectin", "Chitin"], correct: "Cellulose" },
    { question: "Which planet is known as 'Morning Star'?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correct: "Venus" }
];

// Browser memory se score aur index lena
let currentIdx = parseInt(localStorage.getItem("quizIndex")) || 0;
let userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {}; 
let score = parseInt(localStorage.getItem("quizScore")) || 0;

function loadQuiz() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const buttonArea = document.getElementById("button-area");

    if (currentIdx >= quizData.length) {
        showResults();
        return;
    }

    buttonArea.innerHTML = "";

    const currentQuiz = quizData[currentIdx];
    questionEl.innerText = `${currentIdx + 1}. ${currentQuiz.question}`;
    optionsEl.innerHTML = "";

    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        
        if (userAnswers[currentIdx] !== undefined) {
            button.classList.add("disabled");
            if (option === currentQuiz.correct) button.classList.add("correct");
            else if (option === userAnswers[currentIdx]) button.classList.add("wrong");
        } else {
            button.onclick = () => checkAnswer(button, option);
        }
        optionsEl.appendChild(button);
    });

    if (userAnswers[currentIdx] !== undefined) {
        showNextButton();
    }
}

function checkAnswer(selectedBtn, selectedOption) {
    const currentQuiz = quizData[currentIdx];
    
    userAnswers[currentIdx] = selectedOption;
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.classList.add("disabled");
        if (btn.innerText === currentQuiz.correct) btn.classList.add("correct");
        else if (btn.innerText === selectedOption && selectedOption !== currentQuiz.correct) btn.classList.add("wrong");
    });

    if (selectedOption === currentQuiz.correct) {
        score++;
        localStorage.setItem("quizScore", score);
    }
    showNextButton();
}

function showNextButton() {
    const buttonArea = document.getElementById("button-area");
    if (!document.getElementById("next-btn")) {
        const nextBtn = document.createElement("button");
        nextBtn.id = "next-btn";
        nextBtn.innerText = "Next Question →";
        nextBtn.className = "next-btn";
        nextBtn.onclick = () => {
            currentIdx++;
            localStorage.setItem("quizIndex", currentIdx);
            loadQuiz();
        };
        buttonArea.appendChild(nextBtn);
    }
}

function showResults() {
    const quizMain = document.getElementById("quiz-main");
    quizMain.innerHTML = `
        <h1>Quiz Finished!</h1>
        <hr>
        <p class="question">You scored ${score} out of ${quizData.length}.</p>
        <button onclick="resetQuiz()" class="done-btn">sweet heart fer sa try karo  </button>
    `;
}

function resetQuiz() {
    localStorage.clear();
    location.reload();
}

loadQuiz();
