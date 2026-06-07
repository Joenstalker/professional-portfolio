import { NextResponse } from "next/server";
import { DEVELOPER_DATA } from "@/lib/constants";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    // Default response for unrelated questions
    let response = `I'm Joenil's AI Portfolio Assistant, currently in training! 🤖 \n\nI'm specifically trained to answer questions about Joenil's professional background, projects, and services. \n\nTo help you better, you might want to ask about:\n• Who is Joenil?\n• What are his technical skills?\n• What services does he offer?\n• Tell me about his projects.`;

    // FAQ matching
    const faqMatch = DEVELOPER_DATA.faq.find(f => 
      lastMessage.includes(f.question.toLowerCase().replace(/[?.]/g, "")) ||
      f.question.toLowerCase().includes(lastMessage.replace(/[?.]/g, ""))
    );
    if (faqMatch) {
      response = faqMatch.answer;
    }
    // Identity / Who is Joenil
    else if (lastMessage.includes("who is joenil") || lastMessage.includes("who are you") || lastMessage.includes("about joenil") || lastMessage.includes("who is he")) {
      response = `${DEVELOPER_DATA.bio.who_is_joenil}\n\n${DEVELOPER_DATA.bio.detailed}\n\n**Personal Motto:** "${DEVELOPER_DATA.bio.motto}"`;
    } 
    // AI Training / Nature
    else if (lastMessage.includes("training") || lastMessage.includes("ai") || lastMessage.includes("how do you work")) {
      response = `I am a specialized AI assistant currently being trained and refined by Joenil. My purpose is to provide instant, accurate information about his technical expertise and projects. I'm constantly learning from his new achievements!`;
    }
    // Motto or philosophy
    else if (lastMessage.includes("motto") || lastMessage.includes("philosophy") || lastMessage.includes("believe")) {
      response = `Joenil's personal motto is: "${DEVELOPER_DATA.bio.motto}"`;
    }
    // Services
    else if (lastMessage.includes("service") || lastMessage.includes("offer") || lastMessage.includes("can you do") || lastMessage.includes("cctv") || lastMessage.includes("electrical") || lastMessage.includes("programming")) {
      response = `Joenil offers a variety of services:\n\n` +
                 `**Programming:** ${DEVELOPER_DATA.services.programming.join(", ")}.\n\n` +
                 `**Technical Services:** ${DEVELOPER_DATA.services.non_programming.join(", ")}.`;
    }
    // Skills / Tech Stack
    else if (lastMessage.includes("skill") || lastMessage.includes("tech") || lastMessage.includes("stack") || lastMessage.includes("know") || lastMessage.includes("frontend") || lastMessage.includes("backend")) {
      response = `His technical arsenal includes:\n\n` +
                 `**Frontend:** ${DEVELOPER_DATA.skills.frontend.join(", ")}\n` +
                 `**Backend:** ${DEVELOPER_DATA.skills.backend.join(", ")}\n` +
                 `**DevOps:** ${DEVELOPER_DATA.skills.devops.join(", ")}`;
    }
    // Projects
    else if (lastMessage.includes("project") || lastMessage.includes("work") || lastMessage.includes("built") || lastMessage.includes("pos") || lastMessage.includes("saas")) {
      const projectNames = DEVELOPER_DATA.projects.map(p => p.name).join(", ");
      response = `Joenil has worked on several key projects, including: ${projectNames}. You can find more details in the Projects section of this portfolio!`;
    }
    // Contact / Hire
    else if (lastMessage.includes("contact") || lastMessage.includes("hire") || lastMessage.includes("email") || lastMessage.includes("reach")) {
      response = `You can reach Joenil via email at joenilpanal@gmail.com or through the contact form on this site. He's always open to new opportunities!`;
    }
    // Experience
    else if (lastMessage.includes("experience") || lastMessage.includes("how long")) {
      response = `Joenil has been active in development and technical services ${DEVELOPER_DATA.experience}.`;
    }
    // Location
    else if (lastMessage.includes("location") || lastMessage.includes("where")) {
      response = `Joenil is based in Malaybalay City, Bukidnon, Philippines.`;
    }
    // Tricky / Personal question - Relationship Status
    else if (
      lastMessage.includes("relationship") || 
      lastMessage.includes("girlfriend") || 
      lastMessage.includes("status") ||
      lastMessage.includes("dating") ||
      lastMessage.includes("taken") ||
      lastMessage.includes("seeing someone") ||
      lastMessage.includes("special woman") ||
      lastMessage.includes("special in joenil's life") ||
      lastMessage.includes("who is his girl")
    ) {
      response = `YES, Joenil is in a relationship with Thrie Jie Barcina ❤️. You can find her here: https://www.facebook.com/thriejie.barcina\n\n![girlfriend](/girlfriend.png)`;
    }

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ content: response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
