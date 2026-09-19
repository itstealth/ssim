/**
 * programCompassData.js — content model for the Program Compass assessment.
 *
 * Ported from the standalone program-compass.html prototype. Everything here is
 * plain data so it can be imported by both the client screens and the scoring
 * engine in src/lib/program-compass.js without pulling in any React.
 *
 * The item bank is 12 RIASEC items (2 per dimension) + 6 work-style items.
 * Wording is deliberately plain — respondents include undergraduates from
 * regional-medium colleges, so no idioms and short sentences.
 *
 * NOTE: the RIASEC → program weight vectors in PROGRAMS are a scoring
 * heuristic, not a validated instrument. Program heads should sanity-check
 * them against the current PGDM specialization list before any large rollout.
 */

/* ------------------------------------------------------------------ items */

export const ITEMS = [
  { id: "r1", dim: "R", text: "I like working with tools, machines, or equipment to fix or build things." },
  { id: "r4", dim: "R", text: "I like practical, hands-on work more than just talking about theory." },
  { id: "i1", dim: "I", text: "I like studying information closely to find things other people miss." },
  { id: "i2", dim: "I", text: "I want to know why something works, not just that it works." },
  { id: "a2", dim: "A", text: "I like work that does not have one single correct answer." },
  { id: "a3", dim: "A", text: "I enjoy creating new things — like designs, writing, or art." },
  { id: "s1", dim: "S", text: "I enjoy helping other people solve a problem or make a decision." },
  { id: "s3", dim: "S", text: "I prefer working with people more than with data or machines all day." },
  { id: "e1", dim: "E", text: "I like convincing other people to agree with my idea." },
  { id: "e2", dim: "E", text: "I like taking charge of a project and making sure it gets finished." },
  { id: "c1", dim: "C", text: "I like arranging information in a clear, organized way." },
  { id: "c2", dim: "C", text: "I prefer having clear rules and steps to follow." },
  { id: "w1", dim: "ws", axis: "data", text: "When I solve a problem, I trust facts and numbers more than my feelings." },
  { id: "w2", dim: "ws", axis: "ambiguity", text: "I do my best work even when the goal is not fully clear yet." },
  { id: "w3", dim: "ws", axis: "risk", text: "I prefer taking a chance on something new and uncertain, rather than something safe." },
  { id: "w4", dim: "ws", axis: "team", text: "I do my best work in a team, sharing ideas with others, rather than working alone." },
  { id: "w5", dim: "ws", axis: "persuasion", text: "I feel confident explaining my idea, even to people who do not agree at first." },
  { id: "w6", dim: "ws", axis: "detail", text: "I notice small mistakes that other people usually miss." },
];

export const LIKERT = [
  "Strongly disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly agree",
];

/** Number of RIASEC items before the work-style block — drives the interstitial. */
export const SECTION_BREAK_AT = 12;

/* ------------------------------------------------------- dimension labels */

export const DIM_ORDER = ["R", "I", "A", "S", "E", "C"];

export const DIM_LABEL = {
  R: "Realistic",
  I: "Investigative",
  A: "Artistic",
  S: "Social",
  E: "Enterprising",
  C: "Conventional",
};

/**
 * Long-form explanations — shown on the test side panel while a student answers
 * questions from that dimension, and again in the result screen's
 * "Understanding your profile" section.
 */
export const DIM_DESC = {
  R: "Realistic types are hands-on, practical problem-solvers. You're drawn to work you can see and touch the results of — building, fixing, operating, or optimizing something physical or technical, rather than debating it in the abstract. You value clear, tangible outcomes over long discussions. In postgraduate work, this shows up as a pull toward operations, supply chain, or any specialization where the work has a visible, process-based outcome.",
  I: "Investigative types are natural analysts. You're energized by open-ended problems, by digging into data or evidence to find patterns other people miss, and by understanding why something works rather than just accepting that it does. You tend to trust rigor and reasoning over gut instinct. In postgraduate work, this pulls toward analytics, research-driven strategy, or any specialization where diagnosing a problem carefully comes before acting on it.",
  A: "Artistic types think generatively. You're comfortable in situations without one correct answer, and you're drawn to originating ideas — designing, writing, or creating something that didn't exist before, rather than executing an established process. Structured, repetitive work can feel constraining. In postgraduate work, this pulls toward brand and creative strategy, content, or any specialization where original thinking is the product, not just an input to it.",
  S: "Social types are oriented toward people. You get genuine satisfaction from helping someone work through a problem, from teaching or mentoring, and you're usually good at sensing how the people around you are actually feeling, not just what they're saying. In postgraduate work, this pulls toward human resources, training and development, or any specialization built around understanding and developing people.",
  E: "Enterprising types are driven by influence and outcomes. You're comfortable taking charge of a project, persuading a room, and taking a calculated risk to chase an opportunity — negotiating, pitching, and pushing things to completion rather than waiting to be told what to do. In postgraduate work, this pulls toward marketing, business development, or any specialization where the core skill is moving people and organizations toward a goal.",
  C: "Conventional types bring order to complexity. You're comfortable with detailed, precise work — numbers, records, structured processes — and you tend to plan things step by step rather than improvise. Clear rules and defined procedures feel like a foundation to build on, not a constraint. In postgraduate work, this pulls toward finance, banking, or any specialization where accuracy and structure directly determine whether the work is actually correct.",
};

export const AXIS_DESC = {
  data: "This looks at how much you lean on numbers and evidence versus intuition when you make a call.",
  ambiguity: "This looks at whether you do your best work when a goal is clearly defined, or while it's still taking shape.",
  risk: "This looks at your appetite for a bold, uncertain opportunity over a safe, predictable one.",
  team: "This looks at whether you do your best thinking alone or bouncing ideas off other people.",
  persuasion: "This looks at how comfortable you are pitching an idea to a room that isn't already convinced.",
  detail: "This looks at how naturally you catch small errors or inconsistencies that others might miss.",
};

export const WS_INTRO =
  "The next 6 questions aren't about what interests you — they're about how you like to work: with data or instinct, alone or with others, cautiously or boldly.";

/* ------------------------------------------------------------- programs */

/**
 * Six PGDM specializations. `riasec` and `axes` are the weight vectors the
 * ranking runs against; every weight is on a 0–1 scale and the match score is
 * normalized by the sum of the weights a program actually uses, so programs
 * with more terms aren't penalized.
 */
export const PROGRAMS = [
  {
    id: "ba",
    name: "Business Analytics",
    riasec: { R: 0.05, I: 0.8, A: 0.15, S: 0.15, E: 0.35, C: 0.6 },
    axes: { data: 0.8, detail: 0.5 },
    blurb:
      "Turning data into decisions — analytics, dashboards, and business intelligence for real organizational choices.",
    why: "Your strength in analytical, evidence-driven thinking pairs with a structured, precise working style — the core of using data to understand a problem and drive a decision.",
    longWhy:
      "Your strongest signal is Investigative, reinforced by real comfort with structured, detail-heavy work — exactly the combination Business Analytics is built around. The work is fundamentally about sitting with a messy, ambiguous question, finding the pattern in the data that answers it, and being precise enough that the answer actually holds up — then using it to shape a decision someone in a leadership meeting can act on. People who thrive here would rather spend an extra hour verifying a result than ship something that looks right but isn't, and they get as much satisfaction from being useful as from being correct.",
  },
  {
    id: "mkt",
    name: "Marketing",
    riasec: { R: 0, I: 0.25, A: 0.55, S: 0.45, E: 0.8, C: 0.15 },
    axes: { persuasion: 0.7, risk: 0.4, data: 0.3 },
    blurb:
      "Building and pitching ideas that move people — brand, campaigns, and data-driven growth.",
    why: "You combine creative thinking with persuasive energy — the blend that drives building and pitching ideas that move people.",
    longWhy:
      "You combine Artistic and Enterprising energy — original thinking paired with the drive to actually sell that thinking to someone. Marketing is built around exactly that combination: coming up with an idea worth people's attention, then building the case, the campaign, and the pitch that gets it in front of them, whether that's classic brand work or a data-driven digital campaign measured against real numbers. It rewards people who get as much satisfaction from persuading a room as from the original idea itself, and who are comfortable being judged on whether the idea actually worked.",
  },
  {
    id: "hr",
    name: "Human Resource Management",
    riasec: { R: 0, I: 0.1, A: 0.2, S: 0.9, E: 0.4, C: 0.3 },
    axes: { team: 0.7, persuasion: 0.3 },
    blurb: "Hiring, developing, and supporting the people inside an organization.",
    why: "A people-first orientation combined with practical drive fits work built around understanding and developing people.",
    longWhy:
      "Social is your clearest signal — genuine energy from helping people work through problems, and from sensing what's actually going on with someone beyond what they're saying. Human Resource Management turns that into a profession: hiring, developing, and supporting the people inside an organization, from performance conversations to designing how a workplace actually functions day to day. It suits people who find organizational and interpersonal problems as interesting as technical ones — often more so.",
  },
  {
    id: "ops",
    name: "Operations Management",
    riasec: { R: 0.6, I: 0.3, A: 0, S: 0.2, E: 0.4, C: 0.6 },
    axes: { detail: 0.5, team: 0.3 },
    blurb: "Making processes, supply chains, and delivery systems actually run well.",
    why: "A hands-on, systems-minded style fits the execution-heavy, process-driven core of operations work.",
    longWhy:
      "Your profile combines Realistic and Conventional traits — a preference for tangible, visible outcomes, paired with real comfort for structure and process. Operations Management is judged by whether the system actually performs: whether the store, the supply line, the delivery process, or the production schedule runs the way it's supposed to, not by how well it's theorized. It suits people who would rather fix the problem on the floor than write a memo about it, and who find a well-run process genuinely satisfying to look at.",
  },
  {
    id: "bi",
    name: "Banking and Insurance",
    riasec: { R: 0.05, I: 0.45, A: 0, S: 0.15, E: 0.25, C: 0.85 },
    axes: { detail: 0.75, data: 0.4 },
    blurb:
      "Risk, underwriting, compliance, and financial products — precision work that matters.",
    why: "Your comfort with structured, detail-heavy analysis fits the rigor that banking and insurance work demands.",
    longWhy:
      "Your profile leans strongly Conventional — comfortable with structure, precision, and process — with enough Investigative pull to enjoy the analytical side of the work. Banking and Insurance runs on exactly that: risk assessment, underwriting, compliance, and financial products where a small error compounds fast, so the people who do well here take genuine satisfaction in getting the details right, not just the big picture. It suits people who find a well-governed system reassuring rather than restrictive.",
  },
  {
    id: "fin",
    name: "Finance",
    riasec: { R: 0, I: 0.5, A: 0, S: 0.05, E: 0.45, C: 0.7 },
    axes: { detail: 0.6, data: 0.55, risk: 0.2 },
    blurb:
      "Numbers-first thinking that ends in a decision — capital, investment, and financial strategy.",
    why: "Your analytical, structured profile with a practical decision-making edge fits corporate finance and financial strategy.",
    longWhy:
      "Your profile combines Conventional precision with real Investigative depth and enough Enterprising drive to want your analysis to shape an actual decision — capital allocation, investment appraisal, financial strategy. Finance suits people who like rigorous, numbers-first thinking, but want that thinking to end in a call that moves a business forward, not just a report that sits in a folder. It rewards people who are comfortable being the one who has to defend the number in the room.",
  },
];

/* --------------------------------------------------------- form options */

export const DEGREE_OPTIONS = [
  "B.Com",
  "BBA / BBM",
  "B.Sc",
  "B.A",
  "B.Tech / B.E",
  "B.Pharm",
  "BCA",
  "Other",
];

/** Graduation years offered in the intake form — current year through +3. */
export function gradYearOptions(now = new Date()) {
  const start = now.getFullYear();
  return Array.from({ length: 4 }, (_, i) => String(start + i));
}
