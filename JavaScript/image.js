function drawKisa(svg) {
    const group = svg.append("g")
        .attr("stroke", "brown")
        .attr("stroke-width", 2)
        .attr("stroke-linecap", "round")

    group.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 50)
        .attr("fill", "#ffb739");

    group.append("polygon")
        .attr("points", "-35,-35 -15,-75 -5,-35")
        .attr("fill", "#ffb739");
    group.append("polygon")
        .attr("points", "35,-35 15,-75 5,-35")
        .attr("fill", "#ffb739");

    group.append("polygon")
        .attr("points", "-25,-40 -15,-68 -8,-38")
        .attr("fill", "pink")
        .attr("stroke", "pink");
    group.append("polygon")
        .attr("points", "25,-40 15,-68 8,-38")
        .attr("fill", "pink")
        .attr("stroke", "pink");

    group.append("polyline")
        .attr("points", "-22,-6 -17,-12 -12,-6")
        .attr("fill", "none");
    group.append("polyline")
        .attr("points", "22,-6 17,-12 12,-6")
        .attr("fill", "none");


    group.append("polygon")
        .attr("points", "0,4 -6,14 6,14")
        .attr("fill", "#ff8fa2")
        .attr("stroke", "#ff8fa2");


    group.append("polyline")
        .attr("points", "0,14 0,25 -6,30")
        .attr("fill", "none");
    group.append("polyline")
        .attr("points", "0,25 6,30")
        .attr("fill", "none");


    [-2, 4, 10].forEach(y => {
        group.append("line")
            .attr("x1", -12)
            .attr("y1", y)
            .attr("x2", -42)
            .attr("y2", y);
        group.append("line")
            .attr("x1", 12)
            .attr("y1", y)
            .attr("x2", 42)
            .attr("y2", y);
    });

    group.append("line")
        .attr("x1", -5)
        .attr("y1", -3)
        .attr("x2", -5)
        .attr("y2", -20);
    group.append("line")
        .attr("x1", 0)
        .attr("y1", -1)
        .attr("x2", 0)
        .attr("y2", -23);
    group.append("line")
        .attr("x1", 5)
        .attr("y1", -3)
        .attr("x2", 5)
        .attr("y2", -20);

    return group;
}