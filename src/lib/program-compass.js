/**
 * program-compass.js — scoring engine for the Program Compass assessment.
 *
 * Pure functions, no DOM and no React, so the same code runs on the client to
 * render the result screen and on the server (in the API route) to re-derive
 * scores from the raw answers before they are emailed or written to the Sheet.
 * That matters: the server never trusts the scores the browser sends, it
 * recomputes them from the answer map.
 */

import { ITEMS, DIM_ORDER, PROGRAMS } from "@/data/programCompassData";

/**
 * Collapses the raw 1–5 Likert answers into 0–1 scores.
 *
 * RIASEC dimensions average their items; work-style axes are single-item, so
 * they map straight across. An unanswered item falls back to 3 (Neutral) so a
 * partial submission still scores rather than throwing.
 */
export function computeScores(answers = {}) {
  const dimSum = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const dimCount = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const axisRaw = {};

  ITEMS.forEach((item) => {
    const value = Number(answers[item.id]) || 3;
    if (item.dim === "ws") {
      axisRaw[item.axis] = value;
    } else {
      dimSum[item.dim] += value;
      dimCount[item.dim] += 1;
    }
  });

  const dimScore = {};
  DIM_ORDER.forEach((d) => {
    // (sum - count) / (count * 4) maps a 1–5 average onto 0–1.
    dimScore[d] = dimCount[d] ? (dimSum[d] - dimCount[d]) / (dimCount[d] * 4) : 0;
  });

  const axisScore = {};
  Object.keys(axisRaw).forEach((a) => {
    axisScore[a] = (axisRaw[a] - 1) / 4;
  });

  return { dimScore, axisScore };
}

/**
 * Ranks every program against a scored profile, best match first.
 *
 * Each program's match is the weighted average of the student's scores on the
 * dimensions and axes that program cares about. Dividing by the sum of that
 * program's own weights keeps programs with more terms from scoring higher
 * just for having more terms. A missing axis score defaults to 0.5 (neutral)
 * so it neither helps nor hurts.
 */
export function rankPrograms(dimScore, axisScore = {}) {
  return PROGRAMS.map((program) => {
    let raw = 0;
    let max = 0;

    Object.entries(program.riasec).forEach(([dim, weight]) => {
      raw += (dimScore[dim] ?? 0) * weight;
      max += weight;
    });
    Object.entries(program.axes || {}).forEach(([axis, weight]) => {
      raw += (axisScore[axis] ?? 0.5) * weight;
      max += weight;
    });

    return { program, match: max ? Math.round((raw / max) * 100) : 0 };
  }).sort((a, b) => b.match - a.match);
}

/** Dimensions ordered strongest to weakest — drives the bars and the legend. */
export function dimensionOrder(dimScore) {
  return [...DIM_ORDER].sort((a, b) => dimScore[b] - dimScore[a]);
}

/**
 * Runs the whole pipeline. `code` is the Holland-style three-letter summary
 * (e.g. "IEC") built from the student's three strongest dimensions.
 */
export function evaluate(answers) {
  const { dimScore, axisScore } = computeScores(answers);
  const order = dimensionOrder(dimScore);
  return {
    dimScore,
    axisScore,
    order,
    code: order.slice(0, 3).join(""),
    ranked: rankPrograms(dimScore, axisScore),
  };
}

/* ------------------------------------------------------------- geometry */

/**
 * Vertex `i` of the RIASEC hexagon at radius `r`, starting at 12 o'clock and
 * going clockwise, in the 260×260 viewBox the chart uses.
 */
export function hexPoint(i, r, cx = 130, cy = 130) {
  const angle = ((-90 + i * 60) * Math.PI) / 180;
  return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
}
