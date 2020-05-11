import { monthIterator } from "./monthIterator";

const constructForMonthVertical = (mainSvg, nthMonthOfYear) => {
  let dayCounter = 0;
  for (let i = 0; i < Array(30).fill(0).length; i++) {
    const dayG = mainSvg.append("g").attr("id", `day-${i + 1}`);
    const day = dayG.append("line").classed("cls-1", true);
    day.attr("x1", 62 + dayCounter * 62);
    day.attr("x2", 62 + dayCounter * 62);
    day.attr("y2", 245);
    dayCounter++;
  }
};
const constructForYearVertical = (mainSvg, nthMonthOfYear) => {
  let monthCounter = 0;
  let mIter = monthIterator();
  for (let i = 0; i < Array(12).fill(0).length; i++) {
    const monthG = mainSvg.append("g").attr("id", `month-${i + 1}`);
    const month = monthG.append("line").classed("cls-1", true);
    month.attr("x1", 62 + monthCounter * 62);
    month.attr("x2", 62 + monthCounter * 62);
    month.attr("y2", 245);

    const monthCircle = monthG.append("circle").classed("cls-3", true);
    monthCircle.attr("cx", 62 + monthCounter * 62);
    monthCircle.attr("cy", 120.5);
    monthCircle.attr("r", 3);
    const monthLabel = monthG.append("text").classed("cls-6", true);
    monthLabel.attr("transform", `translate(${55 + monthCounter * 62} 133.81)`);
    const monthText = monthLabel.text(mIter.next().value);
    if (nthMonthOfYear < monthCounter) {
      monthText.style("fill", "#afafaf");
      monthCircle.style("fill", "#afafaf");
      monthCircle.style("stroke", "#afafaf");
      month.style("stroke", "#afafaf");
    }
    monthCounter++;
  }
};

export const constructVerticals = (chartType, mainSvg, nthMonthOfYear) => {
  if (chartType === "year") {
    constructForYearVertical(mainSvg, nthMonthOfYear);
  } else if (chartType === "month") {
    constructForMonthVertical(mainSvg, nthMonthOfYear);
  }
};
