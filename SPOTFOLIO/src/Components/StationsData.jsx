export const stations = 
[
    { 
      id: 1,
      title: "Truth and Deception: Can Data Reveal When Someone is Lying?",
      objective:"Use a dataset of audio stories to develop a model capable of classifying the stories as truthful or deceptive",
      description:`
        - 100 unique, 2 minute audio stories were used, each labelled as truthful or deceptive
        - Librosa was used to extract audio features across the time and frequency domains, and artificially extend the dataset through audio augmentation
        - Ensemble models were developed to aggregate model performance across three machine learning models, resulting in an ultimate performance of 88% accuracy`,
      image:"../../public/project_1.png",
      githubLink:"https://github.com/Gitbyt3/Predicting-Truths-and-Lies",
      x: "-20", y: "600", colour: "stroke-black",
      route: "M -20 600 H 50 A 15 15 0 0 0 60 590 V 520 A 15 15 0 0 0 50 510 H 0 A 15 15 0 0 1 -10 500 V 410 A 15 15 0 0 1 0 400 H 160 A 15 15 0 0 1 170 410 V 470 A 15 15 0 0 0 180 480 H 250 A 15 15 0 0 1 260 490 V 570 A 15 15 0 0 0 270 580 H 300 A 15 15 0 0 0 310 570 V 440 A 15 15 0 0 0 300 430 H 260 A 15 15 0 0 1 250 420 V 300 A 15 15 0 0 1 260 290 H 330 A 15 15 0 0 0 340 280 V 250 A 15 15 0 0 1 350 240 H 360 A 15 15 0 0 1 370 250 V 390 A 15 15 0 0 0 380 400 H 500"
    },
    { 
      id: 2,
      title: "Video Game Search Engine",
      objective: "Design and implement a search engine capable of retrieving video game titles from a video game dataset",
      description: `
        - Multiple modules were designed and implemented on Python including query processing, candidate retrieval, and retrieval ranking
        - These modules were combined as a retrieval pipeline and accessed using a web interface
        - Games were ranked according to semantic similarity and keyword matching`,
      image:"../../public/project_2.png",
      githubLink:"https://github.com/Gitbyt3/SUPREME-Video-Game-Search-Engine",
      x: "-50", y: "100", colour: "stroke-red-700",
      route: "M -50 100 V 180 A 15 15 0 0 1 -60 190 H -130 A 15 15 0 0 0 -140 200 V 270 A 15 15 0 0 1 -150 280 H -200 A 15 15 0 0 0 -210 290 V 420 A 15 15 0 0 0 -200 430 H -50 A 15 15 0 0 0 -40 420 V 330 A 15 15 0 0 1 -30 320 H 50 A 15 15 0 0 1 60 330 V 370 A 15 15 0 0 0 70 380 H 200 A 15 15 0 0 0 210 370 V 250 A 15 15 0 0 1 220 240 H 300 A 15 15 0 0 0 310 230 V 180 A 15 15 0 0 1 320 170 H 380 A 15 15 0 0 1 390 180 V 330 A 15 15 0 0 0 400 340 H 450 A 15 15 0 0 0 460 330 V 280 A 15 15 0 0 1 470 270 H 490 A 15 15 0 0 1 500 280 V 400"
    },
    {
      id: 3,
      title: "Convolutional Neural Network (CNN) to Classify CIFAR-10",
      objective: "Classify images from 10 different classes using a CNN built and trained on Pytorch",
      description: `
        - The network was fully designed and trained on Pytorch
        - The final test accuracy was 92.3%
        - Many hyperparameters were tested and implemented including design changes, regularisation techniques, and training optimisations`,
      image:"../../public/project_3.png",
      githubLink:"https://github.com/Gitbyt3/CIFAR-10-CNN",
      x: "1100", y: "500", colour: "stroke-teal-700",
      route: "M 1100 500 V 300 A 15 15 0 0 0 1090 290 H 1010 A 15 15 0 0 0 1000 300 V 400 A 15 15 0 0 1 990 410 H 940 A 15 15 0 0 1 930 400 V 370 A 15 15 0 0 0 920 360 H 860 A 15 15 0 0 1 850 350 V 310 A 15 15 0 0 0 840 300 H 800 A 15 15 0 0 1 790 290 V 260 A 15 15 0 0 0 780 250 H 775 A 15 15 0 0 0 765 260 V 500 A 15 15 0 0 1 755 510 H 650 A 15 15 0 0 1 640 500 V 420 A 15 15 0 0 0 630 410 H 500"
    },
    { 
      id: 4,
      title: "Publication Click-Rate Analysis for a Think Tank",
      objective: "Investigate trends in publication downloads & views and identify their causes",
      description: `
        - Data was sourced from two internal databases, one containing click data and the other containing publication characteristics
        - Extensive data wrangling was conducted as the raw click data was near unusable in its original state
        - The regression analysis uncovered multiple variables potentially responsible for the downloads/views. These were:
          1. Frequency of publication releases
          2. Publication type
          3. Publication topic`,
      image:"../../public/project_4.png",
      githubLink:"https://github.com/Gitbyt3/Click-Rate-Analysis",
      x: "750", y: "200", colour: "stroke-purple-800",
      route: "M 750 200 H 700 A 15 15 0 0 1 690 190 V 120 A 15 15 0 0 0 680 110 H 640 A 15 15 0 0 0 630 120 V 270 A 15 15 0 0 1 620 280 H 580 A 15 15 0 0 0 570 290 V 340 A 15 15 0 0 0 580 350 H 680 A 15 15 0 0 0 690 340 V 290 A 15 15 0 0 1 700 280 H 740 A 15 15 0 0 1 750 290 V 380 A 15 15 0 0 1 740 390 H 500"
    },
    { 
      id: 5,
      title: "",
      objective: "",
      description: "",
      image:"",
      githubLink:"",
      x: "600", y: "700", colour: "stroke-blue-700",
      route: "M 600 700 H 500 A 15 15 0 0 0 490 710 V 750 A 15 15 0 0 1 480 760 H 400 A 15 15 0 0 1 390 750 V 740 A 15 15 0 0 0 380 730 H 300 A 15 15 0 0 0 290 740 V 770 A 15 15 0 0 1 280 780 H 150 A 15 15 0 0 1 140 770 V 530 A 15 15 0 0 1 150 520 H 230 A 15 15 0 0 1 240 530 V 640 A 15 15 0 0 0 250 650 H 300 A 15 15 0 0 0 310 640 V 600 A 15 15 0 0 1 320 590 H 360 A 15 15 0 0 0 370 580 V 540 A 15 15 0 0 1 380 530 H 450 A 15 15 0 0 1 460 540 V 620 A 15 15 0 0 0 470 630 H 485 A 15 15 0 0 0 495 620 V 400"
    },
    { 
      id: 6,
      title: "",
      objective: "",
      description: "",
      image:"",
      githubLink:"",
      x: "950", y: "670", colour: "stroke-yellow-500",
      route: "M 950 670 V 550 A 15 15 0 0 0 940 540 H 880 A 15 15 0 0 1 870 530 V 450 A 15 15 0 0 0 860 440 H 820 A 15 15 0 0 0 810 450 V 570 A 15 15 0 0 1 800 580 H 750 A 15 15 0 0 0 740 590 V 650 A 15 15 0 0 0 750 660 H 790 A 15 15 0 0 1 800 670 V 740 A 15 15 0 0 1 790 750 H 700 A 15 15 0 0 1 690 740 V 600 A 15 15 0 0 0 680 590 H 600 A 15 15 0 0 1 590 580 V 500 A 15 15 0 0 0 580 490 H 520 A 15 15 0 0 1 510 480 V 400"
    },
  ]