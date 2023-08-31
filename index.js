import App from "./app.js";

const main = () => {
  let app = new App();

  app.performThemeCheck();

  // Projects
  app.addProjectCard({
    title: "Parabolic: Knowledge-enriched Tickets",
    url: "https://storylines.info",
    tools: ["LlamaIndex", "GPT-4", "Tree-sitter", "Python", "Streamlit"],
    description:
      "Generative AI assistant that helps users create codebase-aware software tickets. Finds relevant modules/classes/snippets and creates a graph visualization from their AST. Integrates with Linear.",
  });

  app.addProjectCard({
    title: "Storylines",
    url: "https://storylines.info",
    tools: ["Swift", "Supabase", "Social Media", "Entrepreneurship"],
    description:
      "Buiding an iOS app to help users bring the narratives out of the photos in their camera roll.\n\nComing soon.",
  });

  app.addProjectCard({
    title: "Detecting Bitcoin Fraud with GCNs",
    url: "https://medium.com/@akavin/319504800589",
    tools: ["PyTorch", "Graph ML", "Security"],
    description:
      "Graph Convolutional Networks (GCNs) with augmented struc2vec features to detect illicit transactions in a Bitcoin transaction graph, achieving a test F1 of 83.94.",
  });

  app.addProjectCard({
    title: "WhenYou",
    url: "https://github.com/mcao0620/whenyou",
    tools: [
      "React Native",
      "TailwindCSS",
      "Firebase",
      "Social Media",
      "Project Management",
    ],
    description:
      "iOS app dedicated to bringing friends together and spreading joy through live photo responses to funny prompts.",
  });

  app.addProjectCard({
    title: "Neural Historical Art Classifier",
    url: "http://cs231n.stanford.edu/reports/2022/pdfs/80.pdf",
    tools: ["PyTorch", "Contrastive Learning", "Data Augmentation"],
    description:
      "Deep learning model to classify painting genre. Increased discriminatory power with texture-based features & deep discriminative representation learning with attention mapping (DDRL-AM).",
  });

  app.addProjectCard({
    title: "Retro QANet",
    url: "https://web.stanford.edu/class/cs224n/reports/final_reports/report249.pdf",
    tools: [
      "PyTorch",
      "Deep Learning",
      "Transformers",
      "Natural Language Processing",
    ],
    description:
      "Transfomer / self-attention based Machine Reading Comprehension (MRC) model for solving question answering tasks. Achieved 60.659 F1 score on Stanford Question Answering Dataset (SQuAD) 2.0.  ",
  });

  app.addProjectCard({
    title: "See Your Dream",
    url: "https://seeyourdream.org",
    tools: ["Unity", "C#", "VR", "Entrepreneurship"],
    description:
      "501(c)(3) non-profit dedicated to providing VR experiences to pediatric patients to help prepare them for frightening procedures such as MRI scans and surgery. Partnered with 2 children's hospitals in MN, won $10K in seed funding from MN Cup.",
  });

  app.addProjectCard({
    title: "Doctored or Not",
    url: "http://cs230.stanford.edu/projects_spring_2021/reports/21.pdf",
    tools: ["PyTorch", "JavaScript", "Computer Vision", "Data Augmentation"],
    description:
      "Classification model to detect photoshopped images with 94.9% accuracy. Trained model on over 200K original and photoshopped images, using a Photoshop JavaScript script to doctor images.",
  });

  app.addProjectCard({
    title: "Droplet",
    url: "https://joindroplet.com/",
    tools: ["React Native", "Firebase", "Social Media", "Sound Processing"],
    description:
      "Soundbite-based social media app for iOS and Android. Record, share, and discover sounds, music, and conversations.",
  });

  app.addProjectCard({
    title: "Lyri",
    url: "https://github.com/mcao0620/lyri",
    tools: ["React", "Node.js", "Electron", "APIs"],
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
