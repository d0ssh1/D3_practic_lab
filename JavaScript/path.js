function createHeartPathNode() {
    const svg = d3.select("svg");
    const width = 600;
    const height = 600;

    const dataPoints = [];
    const a = 10;

    for (let t = 0; t <= Math.PI * 2 + 1e-6; t += 0.05) {
        const shtuka = Math.PI - t;
        dataPoints.push({
            x: width / 2 + a * (13 * Math.cos(shtuka) - 5 * Math.cos(2 * shtuka) - 2 * Math.cos(3 * shtuka)),
            y: height / 2 + a * (14 * Math.sin(shtuka) - 4 * Math.sin(3 * shtuka))
        });
    }

    const line = d3.line()
        .x(d => d.x)
        .y(d => d.y);

    const path = svg.append('path')
        .attr('d', line(dataPoints))
        .attr('stroke', 'lightgray')
        .attr('stroke-dasharray', '5,5')
        .attr('fill', 'none');

    return path.node();
}

function translateAlong(path) {
    const length = path.getTotalLength();
    return function () {
        return function (t) {
            const { x, y } = path.getPointAtLength(t * length);
            return `translate(${x},${y})`;
        };
    };
}