"use client";

import { useEffect, useState } from "react";
import { evaluate } from "@/lib/program-compass";
import Landing from "./components/Landing";
import InfoForm from "./components/InfoForm";
import TestFlow from "./components/TestFlow";
import ResultScreen from "./components/ResultScreen";

/**
 * ProgramCompassClient — the screen machine for the whole flow:
 *   landing → info → test → loading → result
 *
 * Scores are computed here so the result renders instantly, but the raw answer
 * map is what gets POSTed — the server recomputes from those rather than
 * trusting numbers from the browser.
 */
export default function ProgramCompassClient() {
  const [screen, setScreen] = useState("landing");
  const [sourceCollege, setSourceCollege] = useState("");
  const [details, setDetails] = useState(null);
  const [profile, setProfile] = useState(null);
  const [saveState, setSaveState] = useState(null);

  // ?college=Name lets a partner college hand out its own tracked link. Read on
  // the client rather than via searchParams so the page stays statically
  // rendered and doesn't opt into dynamic rendering for every visitor.
  useEffect(() => {
    const college = new URLSearchParams(window.location.search).get("college");
    if (college) setSourceCollege(college.slice(0, 120));
  }, []);

  // Keep the viewport at the top of each new screen.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [screen]);

  function handleInfoSubmit(values) {
    setDetails(values);
    setScreen("test");
  }

  function handleComplete(answers) {
    const computed = evaluate(answers);
    setProfile(computed);
    setScreen("loading");

    // Short, deliberate pause — the scoring is instant, but landing straight on
    // the result reads as if nothing was evaluated.
    setTimeout(() => setScreen("result"), 900);

    submit(answers, computed);
  }

  async function submit(answers, computed) {
    setSaveState("saving");
    try {
      const response = await fetch("/api/program-compass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...details,
          sourceCollege: sourceCollege || details.currentCollege,
          channel: sourceCollege ? "college-link" : "direct",
          answers,
          // Sent for reference only — the server recomputes these itself.
          clientTopCode: computed.code,
        }),
      });
      setSaveState(response.ok ? "saved" : "error");
    } catch {
      setSaveState("error");
    }
  }

  if (screen === "landing") {
    return <Landing onStart={() => setScreen("info")} sourceCollege={sourceCollege} />;
  }

  if (screen === "info") {
    return (
      <InfoForm
        initialCollege={sourceCollege}
        onSubmit={handleInfoSubmit}
        onBack={() => setScreen("landing")}
      />
    );
  }

  if (screen === "test") {
    return <TestFlow onComplete={handleComplete} onBack={() => setScreen("info")} />;
  }

  if (screen === "loading") {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-[620px] flex-col items-center justify-center px-4 text-center">
        <span className="h-10 w-10 animate-spin rounded-full border-[3px] border-purple-200 border-t-purple-700" />
        <h1 className="font-playfair mt-6 text-[24px] text-slate-900">
          Scoring your responses…
        </h1>
        <p className="mt-2 text-[14px] text-slate-500">
          Matching your profile against six PGDM specializations.
        </p>
      </div>
    );
  }

  return (
    <ResultScreen
      profile={profile}
      firstName={details?.name?.split(" ")[0]}
      saveState={saveState}
    />
  );
}
