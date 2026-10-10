"use client";

import AIDashboardHeroVisual from "./AIDashboardHeroVisual";

interface AIBusinessCoreProps {
  highlightNodes?: string[];
  accentColor?: string;
  activeTabId?: string;
}

export default function AIBusinessCore({
  highlightNodes,
  accentColor = "#7c5cff",
  activeTabId = "ai-erp",
}: AIBusinessCoreProps) {
  return (
    <AIDashboardHeroVisual
      accentColor={accentColor}
      activeTabId={activeTabId}
      highlightNodes={highlightNodes}
    />
  );
}
