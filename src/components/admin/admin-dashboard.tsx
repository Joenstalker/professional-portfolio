"use client";

import * as React from "react";
import { MessageInbox } from "@/components/admin/message-inbox";
import { PortfolioContentManager } from "@/components/admin/portfolio-content-manager";
import { Button } from "@/components/ui/button";

export function AdminDashboard() {
  const [section, setSection] = React.useState<"inbox" | "content">("inbox");

  return (
    <>
      <nav aria-label="Admin sections" className="mx-auto mb-8 flex max-w-5xl gap-2 px-4">
        <Button type="button" variant={section === "inbox" ? "default" : "outline"} onClick={() => setSection("inbox")}>
          Contact inbox
        </Button>
        <Button type="button" variant={section === "content" ? "default" : "outline"} onClick={() => setSection("content")}>
          Projects & certificates
        </Button>
      </nav>
      {section === "inbox" ? <MessageInbox /> : <PortfolioContentManager />}
    </>
  );
}
