function drawLines(svg, color, time) {
  svg.querySelectorAll('path').forEach((path) => {
    const length = path.getTotalLength();
    path.style.fill = 'none';
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.stroke = color;
    path.style.animation = `draw ${time}s linear forwards`;
  });
}
