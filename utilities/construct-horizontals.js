export const constructHorizontals = (chartType, mainSvg, nthDayOfYear) => {
  constructHorizontalsMonth(mainSvg, nthDayOfYear);
};

const constructHorizontalsMonth = (mainSvg, nthDayOfYear) => {
  const middleLineStart = mainSvg.append("g").attr("id", `middle-line-start`);
  middleLineStart
    .append("line")
    .classed("cls-3", true)
    .attr("y1", 120)
    .attr("y2", 120)
    .attr("x2", 62);
  let monthCounter = 0;
  for (let i = 0; i < Array(12 * 31).fill(0).length; i++) {
    const monthG = mainSvg.append("g").attr("id", `line-${i + 1}`);
    const month = monthG.append("line").classed("cls-3", true);
    month.attr("x1", 62 + (monthCounter * 62) / 31);
    month.attr("y1", 120);
    month.attr("x2", 64 + (monthCounter * 62) / 31);
    month.attr("y2", 120);
    if (nthDayOfYear <= monthCounter) {
      month.style("stroke", "#afafaf");
    }
    if (nthDayOfYear === monthCounter) {
      monthG
        .append("line")
        .classed("cls-3", true)
        .attr("x1", 62 + (monthCounter * 62) / 31)
        .attr("x2", 62 + (monthCounter * 62) / 31)
        .attr("y2", 122)
        .style("stroke", "url(#linear-gradient-top)");
      monthG
        .append("line")
        .classed("cls-3", true)
        .attr("x1", 62 + (monthCounter * 62) / 31)
        .attr("x2", 62 + (monthCounter * 62) / 31)
        .attr("y1", 122)
        .attr("y2", 245)
        .style("stroke", "url(#linear-gradient-bottom)");
    }
    monthCounter++;
  }
};
