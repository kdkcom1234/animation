function drawLines(svg, time) {
  svg.querySelectorAll('path').forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.animation = `draw ${time}s linear forwards`;
  });
}
