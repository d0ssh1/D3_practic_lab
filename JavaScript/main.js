document.addEventListener("DOMContentLoaded", function () {
    const width = 600;
    const height = 600;
    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);
});


let clearImages = () => {
    d3.select('svg').selectAll('*').remove();
}

let runAnimation = (dataForm) => {
    const svg = d3.select("svg");
    let pict = drawKisa(svg);

    pict.attr("transform", `translate(300, 300) 
                           scale(${dataForm.scaleX.value}, ${dataForm.scaleY.value}) 
                           rotate(${dataForm.rotate.value})`);

    const path = createHeartPathNode();

    const duration = +dataForm.duration.value || 2000;

    pict.transition()
        .duration(duration)
        .attrTween("transform", translateAlong(path))
}
