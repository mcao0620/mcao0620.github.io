import App from "./app.js";

const main = () => {
  let app = new App();

  app.performThemeCheck();

  // Projects
  app.addProjectCard({
    title: "Storylines",
    url: "https://storylines.info",
    tools: ["Swift", "Supabase"],
    description:
      "Buiding an iOS app to help users bring the narratives out of the photos in their camera roll.\n\nComing soon.",
  });

  app.addProjectCard({
    title: "Detecting Bitcoin Fraud with GCNs",
    url: "https://medium.com/@akavin/319504800589",
    tools: ["PyTorch"],
    description:
      "Graph Convolutional Networks (GCNs) with augmented struc2vec features to detect illicit transactions in a Bitcoin transaction graph, achieving a test F1 of 83.94.",
  });

  app.addProjectCard({
    title: "WhenYou",
    url: "https://github.com/mcao0620/whenyou",
    tools: ["React Native", "TailwindCSS", "Firebase"],
    description:
      "iOS app dedicated to bringing friends together and spreading joy through live photo responses to funny prompts.",
  });

  app.addProjectCard({
    title: "Neural Historical Art Classifier",
    url: "http://cs231n.stanford.edu/reports/2022/pdfs/80.pdf",
    tools: ["PyTorch"],
    description:
      "Deep learning model to classify painting genre. Increased discriminatory power with texture-based features & deep discriminative representation learning with attention mapping (DDRL-AM).",
  });

  app.addProjectCard({
    title: "Retro QANet",
    url: "https://web.stanford.edu/class/cs224n/reports/final_reports/report249.pdf",
    tools: ["PyTorch"],
    description:
      "Transfomer / self-attention based Machine Reading Comprehension (MRC) model for solving question answering tasks. Achieved 60.659 F1 score on Stanford Question Answering Dataset (SQuAD) 2.0.  ",
  });

  app.addProjectCard({
    title: "Doctored or Not",
    url: "http://cs230.stanford.edu/projects_spring_2021/reports/21.pdf",
    tools: ["PyTorch", "JavaScript"],
    description:
      "Classification model to detect photoshopped images with 94.9% accuracy. Trained model on over 200K original and photoshopped images, using a Photoshop JavaScript script to doctor images.",
  });

  app.addProjectCard({
    title: "Droplet",
    url: "https://joindroplet.com/",
    tools: ["React Native", "Firebase"],
    description:
      "Soundbite-based social media app for iOS and Android. Record, share, and discover sounds, music, and conversations.",
  });

  app.addProjectCard({
    title: "Lyri",
    url: "https://github.com/mcao0620/lyri",
    tools: ["React", "Node.js", "Electron"],
    description:
      "Cross-platform desktop app to display real-time lyrics for currently-playing song on Spotify. Launched a year before Spotify Lyrics feature.",
  });

  app.addProjectCard({
    title: "Personal Portfolio",
    url: "https://github.com/mcao0620/mcao0620.github.io",
    tools: ["HTML", "TailwindCSS", "Vanilla JS 🍦"],
    description: "meta.",
  });
};

main();
