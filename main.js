import * as d3 from "d3";
import { constructVerticals } from "./utilities/construct-verticals";
import { constructHorizontals } from "./utilities/construct-horizontals";

const lineOne = document.getElementById(`line-1`).firstElementChild;
// lineOne.style.stroke = "red";
// console.log(lineOne);
// const deneme = d3.selectAll(`#line-1 > line`).style("stroke", "red");
// console.log(deneme);
const container = d3.select("#container");
const mainSvg = container.append("svg").attr("viewBox", "0 0 988.5 245");

const today = new Date();
const nthDayOfYear = today.getDate() + today.getMonth() * 31;

constructVerticals("year", mainSvg, today.getMonth());
constructHorizontals("year", mainSvg, nthDayOfYear);

d3.selectAll(".cls-3")
  .style("opacity", 0)
  .style("transform", "translateY(10px)")
  .transition()
  .duration(1000)
  .style("opacity", 1)
  .style("transform", "translateY(0)");

d3.selectAll(".cls-1")
  .style("opacity", 0)
  .style("transform", "translateY(10px)")
  .transition()
  .duration(1000)
  .style("opacity", 0.4)
  .style("transform", "translateY(0)");

d3.selectAll(".cls-6")
  .style("opacity", 0)
  .transition()
  .duration(1000)
  .style("opacity", 1);
