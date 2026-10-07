import { NextResponse } from "next/server";
import { KNOWLEDGE_BASE } from "@/data/knowledge-base";

const KB = KNOWLEDGE_BASE;

function normalize(s: string): string {
  return s.toLowerCase().replace(/[?.!,]/g, "").trim();
}

function containsAny(msg: string, keywords: string[]): boolean {
  const n = normalize(msg);
  return keywords.some(k => n.includes(normalize(k)));
}

function matchFaq(msg: string): { answer: string } | null {
  const n = normalize(msg);
  for (const f of KB.faq) {
    const q = normalize(f.question);
    if (n.includes(q) || q.includes(n)) return { answer: f.answer };
    const kwMatch = f.keywords.filter(k => n.includes(normalize(k))).length;
    if (kwMatch >= 2) return { answer: f.answer };
  }
  return null;
}

function formatProjectDetail(p: typeof KB.projects[0]): string {
  const links = [];
  if (p.githubUrl) links.push(`[GitHub](${p.githubUrl})`);
  const docsUrl = (p as { documentationUrl?: string }).documentationUrl;
  if (docsUrl) links.push(`[Documentation](${docsUrl})`);
  return `**${p.title}** (${p.category})\n\n` +
         `${p.description}\n\n` +
         `**Tech Stack:** ${p.technologies.join(", ")}\n\n` +
         `**Key Features:**\n${p.features.map((f, i) => `${i + 1}. ${f}`).join("\n")}` +
         (links.length > 0 ? `\n\n**Links:** ${links.join(" • ")}` : "");
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const rawMessage = messages[messages.length - 1].content as string;
    const msg = rawMessage.toLowerCase();
    const n = normalize(rawMessage);

    // 1) FAQ direct match first
    const faqMatch = matchFaq(rawMessage);
    if (faqMatch) {
      await new Promise(r => setTimeout(r, 800));
      return NextResponse.json({ content: faqMatch.answer });
    }

    let response = `I&apos;m Joenil&apos;s AI Portfolio Assistant! 🤖 I have access to Joenil&apos;s full portfolio data.

Here are some things you can ask me about:
• **About** Joenil - personal info, motto, philosophy, stats, hobbies
• **Projects** - Dental Clinic MS, Mini Library MS, Robotic Arm, POS System
• **Certificates** - TOPCIT, Python Essentials 1 & 2, CCNA 1 & 2, Sui DEVCON, Java, Web, DB, IoT, NC2 TESDA
• **Skills** - Frontend, Backend, Database, IoT, DevOps, Desktop tools
• **Contact** - email, phone, address, social media (Facebook, GitHub, LinkedIn)
• **Services** - Web dev, SaaS, POS, CCTV, electrical installation`;

    // =================== PERSONAL / IDENTITY ===================
    if (containsAny(msg, ["who is joenil", "who is he", "about joenil", "tell me about joenil", "who are you"])) {
      response = `${KB.personal.whoIsHe}\n\n${KB.personal.detailedBio}\n\n**Personal Motto:** "${KB.personal.motto}"`;
    }
    else if (containsAny(msg, ["full name", "complete name", "what is your name", "real name"])) {
      response = `Joenil&apos;s full name is **${KB.personal.fullName}**.`;
    }
    else if (containsAny(msg, ["your title", "job title", "position title", "what is his title"])) {
      response = `Joenil is an **${KB.personal.title}** with ${KB.personal.yearsExperience} of experience.`;
    }
    else if (containsAny(msg, ["motto", "philosophy", "believe", "quote", "saying in life", "what is your motto"])) {
      response = `Joenil&apos;s personal motto is: **"${KB.personal.motto}"**\n\nHis philosophy about technology: "${KB.personal.philosophyQuote}"`;
    }
    else if (containsAny(msg, ["experience", "how long", "years work", "how many year"])) {
      response = `Joenil has been active in development and technical services **${KB.personal.experience}** (${KB.personal.yearsExperience}).`;
    }
    else if (containsAny(msg, ["location", "where do you live", "where is he", "where from", "address", "city", "province", "live in"])) {
      response = `Joenil is based in:\n\n**${KB.personal.location.fullAddress}**\n\n• Barangay: ${KB.personal.location.barangay}\n• City: ${KB.personal.location.city}\n• Province: ${KB.personal.location.province}\n• Postal Code: ${KB.personal.location.postalCode}`;
    }
    else if (containsAny(msg, ["relationship", "girlfriend", "taken", "dating", "status", "partner", "love life", "special someone"])) {
      response = `YES, Joenil is ${KB.personal.statusRelationship} with **${KB.personal.partnerName}** ❤️.\n\nYou can find her here: ${KB.personal.partnerProfile}`;
    }
    else if (containsAny(msg, ["stats", "statistics", "numbers", "how many project", "how many skill", "achievements count"])) {
      response = `Here are Joenil&apos;s quick stats:\n\n` + KB.stats.map(s => `• **${s.value}** — ${s.label}`).join("\n");
    }
    else if (containsAny(msg, ["hobbies", "hobby", "interests outside", "free time", "what do you do for fun", "pickle", "billiard", "coffee", "hike", "travel", "pastime"])) {
      response = `Joenil&apos;s hobbies and interests beyond coding:\n\n` +
                 KB.hobbies.map(h => `• **${h.title}** — ${h.description} (${h.photoCount} photo${h.photoCount > 1 ? "s" : ""})`).join("\n") +
                 `\n\nHe also enjoys Bible study, Christian ministry, and exploring business ideas. You can see hobby photos in the About page!`;
    }
    else if (containsAny(msg, ["coffee", "cafe", "café"])) {
      response = `☕ **Coffee Sessions** is one of Joenil&apos;s hobbies! He loves fueling creativity one cup at a time in cozy cafés. This is part of his balanced approach to life — code, create, and take time to enjoy every moment.`;
    }
    else if (containsAny(msg, ["pickle", "pickleball", "sport"])) {
      response = `🏓 **Pickle Ball** is Joenil&apos;s go-to sport for staying active and competitive with fast-paced rallies! It&apos;s a great way to step away from the keyboard.`;
    }
    else if (containsAny(msg, ["billiard", "pool", "snooker"])) {
      response = `🎱 **Billiards** helps Joenil focus his mind with strategic shots and precise positioning — a mental workout outside of coding.`;
    }
    else if (containsAny(msg, ["hike", "hiking", "mountain", "trek", "nature", "trail"])) {
      response = `🥾 **Hiking** is a favorite! Joenil loves exploring nature trails and reaching breathtaking mountain summits.`;
    }
    else if (containsAny(msg, ["travel", "trip", "tour", "vacation", "places"])) {
      response = `✈️ **Travel** — Joenil enjoys discovering new places, cultures, and unforgettable experiences. The best ideas often come when you step away from the keyboard!`;
    }
    else if (containsAny(msg, ["nc2", "electrical install", "tesda", "electrical nc", "nc ii"])) {
      response = `⚡ **TESDA NC2 Certification:**\n\nJoenil is a **${KB.certifications.nc2.title}** certified by **${KB.certifications.nc2.issuer}**.\n\nThis unique background bridges the gap between physical infrastructure and digital systems.\n\nYou can view the certificate PDF here: [View NC2 Certificate](${KB.certifications.nc2.pdfUrl})`;
    }

    // =================== AI / TRAINING ===================
    else if (containsAny(msg, ["training", "how do you work", "what are you", "are you ai", "chatbot", "bot", "dataset", "knowledge base"])) {
      response = `I am Joenil&apos;s specialized **Portfolio Assistant**, powered by a comprehensive knowledge base dataset that covers:\n\n` +
                 `• **Personal Info** — bio, motto, philosophy, stats (10+ projects, ${KB.skills.categorized.length}+ technologies)\n` +
                 `• **Hobbies** — Pickle Ball, Billiards, Coffee, Hiking, Travel\n` +
                 `• **Projects** — ${KB.projects.length} detailed projects (DCMS, MINI LMS, Robotic Arm, POS System)\n` +
                 `• **Certificates** — ${KB.certifications.all.length} certifications (TOPCIT, Python Essentials 1 & 2, CCNA 1 & 2, Sui DEVCON, etc.)\n` +
                 `• **Skills** — categorized across 8 categories (Frontend, Backend, DB, IoT, DevOps, etc.)\n` +
                 `• **Contact** — email, phone, address, Facebook, GitHub, LinkedIn\n` +
                 `• **Services** — programming (SaaS, POS, Web) and non-programming (CCTV, electrical, maintenance)\n` +
                 `• **49 Interview-style Q&A entries** with categorized keywords\n\n` +
                 `I&apos;m constantly learning from Joenil&apos;s new achievements!`;
    }

    // =================== SERVICES ===================
    else if (containsAny(msg, ["service", "offer", "what can you do", "services offer", "cctv", "electrical", "maintenance", "saas", "game dev", "ai autom"])) {
      response = `Joenil offers a variety of services:\n\n` +
                 `**🖥️ Programming / Development:**\n${KB.services.programming.map(s => `• ${s}`).join("\n")}\n\n` +
                 `**🔧 Technical Services:**\n${KB.services.nonProgramming.map(s => `• ${s}`).join("\n")}`;
    }
    else if (containsAny(msg, ["cctv"])) {
      response = `📹 **CCTV Installation** is one of Joenil&apos;s technical services. He provides installation work alongside other services like Electrical Installation and Maintenance. This pairs well with his NC2 TESDA certification in Electrical Installation and Maintenance!`;
    }

    // =================== SKILLS / TECH ===================
    else if (containsAny(msg, ["skill", "tech stack", "technology", "know", "frontend", "backend", "devops", "tools", "what language", "programming", "stack"])) {
      const parts = [];
      if (containsAny(msg, ["frontend", "client side", "ui", "front-end"])) {
        parts.push(`**🎨 Frontend:** ${KB.skills.frontend.join(", ")}`);
      } else if (containsAny(msg, ["backend", "server side", "api", "back-end"])) {
        parts.push(`**⚙️ Backend:** ${KB.skills.backend.join(", ")}`);
      } else if (containsAny(msg, ["database", "db", "sql", "nosql"])) {
        parts.push(`**🗄️ Database:** ${KB.skills.database.join(", ")}`);
      } else if (containsAny(msg, ["iot", "hardware", "arduino", "robot", "electronic"])) {
        parts.push(`**🔌 IoT / Hardware:** ${KB.skills.iot.join(", ")}`);
      } else if (containsAny(msg, ["devops", "deploy", "cloud", "hosting", "cicd", "ci/cd"])) {
        parts.push(`**☁️ Deployment / DevOps:** ${KB.skills.deployment.join(", ")}`);
      } else if (containsAny(msg, ["tool", "development tool", "npm", "composer", "git", "figma"])) {
        parts.push(`**🛠️ Tools:** ${KB.skills.tools.join(", ")}`);
      } else if (containsAny(msg, ["desktop", "electron", "javafx", "java app"])) {
        parts.push(`**💻 Desktop:** ${KB.skills.desktop.join(", ")}`);
      } else if (containsAny(msg, ["mobile", "phone", "android", "ios"])) {
        parts.push(KB.skills.mobile.length > 0 ? `**📱 Mobile:** ${KB.skills.mobile.join(", ")}` : `Joenil is interested in mobile development and currently exploring it!`);
      } else {
        parts.push(`**🎨 Frontend:** ${KB.skills.frontend.join(", ")}\n`);
        parts.push(`**⚙️ Backend:** ${KB.skills.backend.join(", ")}\n`);
        parts.push(`**🗄️ Database:** ${KB.skills.database.join(", ")}\n`);
        parts.push(`**☁️ Deployment / DevOps:** ${KB.skills.deployment.join(", ")}`);
        if (KB.skills.iot.length) parts.push(`\n**🔌 IoT/Hardware:** ${KB.skills.iot.join(", ")}`);
        if (KB.skills.tools.length) parts.push(`\n**🛠️ Tools:** ${KB.skills.tools.join(", ")}`);
      }
      response = `Joenil&apos;s technical arsenal (${KB.skills.categorized.length}+ total):\n\n` + parts.join("\n");
    }

    // =================== CERTIFICATES ===================
    else if (containsAny(msg, ["certificate", "certification", "certified", "cert", "achievement", "award", "license", "credential"])) {
      if (containsAny(msg, ["topcit"])) {
        const t = KB.certifications.all.find(c => c.id === "topcit");
        if (t) {
          response = `🏆 **${t.title}**\n\n` +
                     `• **Issuer:** ${t.issuer}\n` +
                     `• **Date:** ${t.date}\n` +
                     `• **Category:** ${t.category}\n` +
                     (t.link ? `• **View PDF Certificate:** [TOPCIT Certificate.pdf](${t.link})\n` : "") +
                     `\nTOPCIT (Test of Practical Competency in IT) assesses practical IT competency — a strong validation of Joenil&apos;s hands-on skills.`;
        }
      }
      else if (containsAny(msg, ["python"])) {
        const py = KB.certifications.all.filter(c => c.id.includes("python"));
        response = `🐍 **Python Certifications (Cisco Networking Academy / OpenEDG):**\n\n` +
                   py.map(c => `• **${c.title}** — ${c.date}\n  Verify: ${c.link || "View on portfolio certificates page"}`).join("\n\n");
      }
      else if (containsAny(msg, ["ccna", "cisco", "network"])) {
        const cc = KB.certifications.all.filter(c => c.id.includes("ccna"));
        response = `🌐 **CCNA Certifications (Cisco Networking Academy):**\n\n` +
                   cc.map(c => `• **${c.title}** — ${c.date}`).join("\n");
      }
      else if (containsAny(msg, ["sui", "blockchain", "devcon"])) {
        const s = KB.certifications.all.find(c => c.id.includes("sui"));
        if (s) response = `⛓️ **${s.title}**\n• Issuer: ${s.issuer}\n• Date: ${s.date}\n• Category: ${s.category}`;
      }
      else if (containsAny(msg, ["java", "web certif", "database certif", "iot certif"])) {
        const matchCat = containsAny(msg, ["java"]) ? "Programming" :
                         containsAny(msg, ["web"]) ? "Web Development" :
                         containsAny(msg, ["database", "db"]) ? "Database" : "IoT";
        const found = KB.certifications.all.filter(c => c.category === matchCat && c.id.includes("cert"));
        if (found.length > 0) {
          response = `📜 **${matchCat} Certifications:**\n\n` +
                     found.map(c => `• **${c.title}** — ${c.issuer} (${c.date})`).join("\n");
        }
      }
      else {
        const byCategory: Record<string, string[]> = {};
        KB.certifications.all.forEach(c => {
          if (!byCategory[c.category]) byCategory[c.category] = [];
          byCategory[c.category].push(`• ${c.title} (${c.date})`);
        });
        response = `📜 **Joenil has **${KB.certifications.all.length}** certifications**:\n\n` +
                   Object.entries(byCategory).map(([cat, list]) => `**${cat}:**\n${list.join("\n")}`).join("\n\n") +
                   `\n\nAlso holds **TESDA NC2** in Electrical Installation and Maintenance.\n\n` +
                   `Visit the Certificates page for the full gallery!`;
      }
    }

    // =================== PROJECTS ===================
    else if (containsAny(msg, ["project", "work on", "built", "portfolio project", "system built", "saas", "dcms", "dental", "mini library", "lms", "pos", "robotic arm", "arduino", "junkshop", "car rental", "memofy"])) {
      if (containsAny(msg, ["dental", "dcms", "clinic manag", "saas dental", "tenant"])) {
        const p = KB.projects.find(pr => pr.id === "dental-clinic-management");
        if (p) response = `🦷 **${p.title}**\n\n${formatProjectDetail(p)}`;
      }
      else if (containsAny(msg, ["library", "lms", "mini lib", "book", "borrow"])) {
        const p = KB.projects.find(pr => pr.id === "mini-library");
        if (p) response = `📚 **${p.title}**\n\n${formatProjectDetail(p)}`;
      }
      else if (containsAny(msg, ["robotic", "robot arm", "arm", "servo", "potentio", "arduino"])) {
        const p = KB.projects.find(pr => pr.id === "robotic-arm");
        if (p) response = `🦾 **${p.title}**\n\n${formatProjectDetail(p)}`;
      }
      else if (containsAny(msg, ["pos", "point of sale", "junkshop", "hanna", "payout", "inventory system"])) {
        const p = KB.projects.find(pr => pr.id === "junkshop-pos");
        if (p) response = `💰 **${p.title}**\n\n${formatProjectDetail(p)}`;
      }
      else if (containsAny(msg, ["car rental"])) {
        response = `🚗 **Car Rental Management System**\n\nOne project Joenil is particularly proud of! It includes:\n• Booking management\n• Customer management\n• Vehicle tracking\n• Reporting\n• Administrative dashboards\n\nThis system allowed applying both frontend and backend skills while solving a real business need.`;
      }
      else if (containsAny(msg, ["memofy"])) {
        response = `🧠 **Memofy** — listed among Joenil&apos;s key projects (Web App). It showcases his ability to build creative, user-focused solutions!`;
      }
      else {
        response = `🚀 **Joenil has worked on several key projects**:\n\n` +
                   KB.projects.map((p, i) => {
                     const extra: string[] = [];
                     if (p.githubUrl) extra.push("🔗 GitHub");
                     if ((p as { documentationUrl?: string }).documentationUrl) extra.push("📄 Docs");
                     return `${i + 1}. **${p.title}** [${p.category}]\n   ${p.description.substring(0, 100)}${p.description.length > 100 ? "..." : ""}\n   Tech: ${p.technologies.slice(0, 4).join(", ")}${extra.length ? `\n   Links: ${extra.join(" • ")}` : ""}`;
                   }).join("\n\n") +
                   `\n\nAsk me about a specific project: Dental Clinic, Mini Library, Robotic Arm, POS, or Car Rental.`;
      }
    }

    // =================== CONTACT ===================
    else if (containsAny(msg, ["contact", "hire", "email", "reach", "get in touch", "contact info", "how to reach", "social media", "facebook", "github", "linkedin", "phone", "number", "call", "text"])) {
      if (containsAny(msg, ["facebook", "fb", "meta"])) {
        const s = KB.contact.socials.find(x => x.platform === "facebook");
        response = `📘 **Facebook:** [${s?.label}](${s?.url})`;
      }
      else if (containsAny(msg, ["github", "git", "repository", "repo", "source code"])) {
        const s = KB.contact.socials.find(x => x.platform === "github");
        response = `🐙 **GitHub:** [${s?.label}](${s?.url})`;
      }
      else if (containsAny(msg, ["linkedin", "linkden", "resume", "professional network"])) {
        const s = KB.contact.socials.find(x => x.platform === "linkedin");
        response = `💼 **LinkedIn:** [${s?.label}](${s?.url})`;
      }
      else if (containsAny(msg, ["phone", "call", "number", "mobile", "text", "sms", "contact number"])) {
        response = `📱 **Phone / Mobile:** ${KB.contact.phone}\n\nYou can call or text Joenil here. For email, reach out at ${KB.contact.email}.`;
      }
      else if (containsAny(msg, ["email", "gmail", "e-mail", "mail"])) {
        response = `📧 **Email:** [${KB.contact.email}](${KB.contact.emailUrl})\n\nClick to compose an email in Gmail, or copy the address: ${KB.contact.email}`;
      }
      else {
        response = `📬 **Get in touch with Joenil through any of these channels:**\n\n` +
                   `• **📧 Email:** [${KB.contact.email}](${KB.contact.emailUrl})\n` +
                   `• **📱 Phone:** ${KB.contact.phone}\n` +
                   `• **📍 Address:** ${KB.personal.location.fullAddress}\n\n` +
                   `**Social Media:**\n` +
                   KB.contact.socials.map(s => `• **${s.platform.charAt(0).toUpperCase() + s.platform.slice(1)}:** [${s.label}](${s.url})`).join("\n") +
                   `\n\nOr use the contact form on the Contact page of this site!`;
      }
    }

    // =================== CATEGORY-FOCUSED FALLBACKS ===================
    else if (containsAny(msg, ["minimal"])) {
      // explicit small-word edge
    }

    await new Promise(resolve => setTimeout(resolve, 800));
    return NextResponse.json({ content: response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
